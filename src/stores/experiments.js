import {defineStore} from 'pinia'
import schema from '../assets/schemas/test_metadata.json'
import { shallowReactive,reactive } from 'vue'

export const experiments = defineStore('experiments', {
    state: () => ({
        renderedExps:[],
        table:reactive({}),
        query:[],
        currentOrganism: '',
        index:1,
    }),
    actions:{
        createMatrix(){
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