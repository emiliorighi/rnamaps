import {defineStore} from 'pinia'
import schema from '../assets/metadata.json'
import { shallowReactive,reactive,ref } from 'vue'

export const experiments = defineStore('experiments', {
    state: () => ({
        renderedExps:[],
        table:reactive({}),
        query:[],
        currentOrganism: ref(''),
        dataTypes:reactive([]),
        timepoints:reactive([]),
        index:1,
    }),
    actions:{
        createMatrix(){
            this.table = {}
            schema[this.currentOrganism].forEach(exp => {
                if(!(exp.dataType in this.table)){
                    this.table[exp.dataType] = {}
                }
                if(!(exp.time in this.table[exp.dataType])){
                    this.table[exp.dataType][exp.time] = {
                        value:0,
                        active:false,
                    }
                }
                this.table[exp.dataType][exp.time].value ++
            })
        },
        loadExps(){
            const exps = schema[this.currentOrganism]
            this.renderedExps = [...exps]
        },
        filterExperiments(){
            const filteredExps = schema[this.currentOrganism].filter(exp => exp.dataType === this.query.dataType && exp.time === this.query.timepoint)
            this.renderedExps = [...filteredExps]
        },
        filterTPExperiments(){
            const newExps = schema[this.currentOrganism].filter(exp => exp.time === this.query.timepoint)
            this.renderedExps = [...newExps]
        },
        filterDTExperiments(){
            const newExps = schema[this.currentOrganism].filter(exp => exp.dataType === this.query.dataType)
            this.renderedExps = [...newExps]
        },
    }
  })