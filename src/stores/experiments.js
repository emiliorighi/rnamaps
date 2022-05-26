import {defineStore} from 'pinia'
import schema from '../assets/schemas/metadata.json'
import { shallowReactive,reactive } from 'vue'

export const experiments = defineStore('experiments', {
    state: () => ({
        renderedExps:[],
        table:reactive({}),
        query:[],
        currentOrganism: '',
    }),
    actions:{
        createQueryTable(){
            const data = schema[this.currentOrganism]
            Object.keys(data).forEach(dt => {
                this.table[dt] = {}
                Object.keys(data[dt]).forEach(tp => {
                    this.table[dt][tp] = {}
                    this.table[dt][tp].active=false
                    this.table[dt][tp].value=data[dt][tp].length
                })
            })
        },
        filterExperiments(){
            this.renderedExps = [...schema[this.currentOrganism][this.query.dataType][this.query.timepoint]]
        },
        filterTPExperiments(){
            const newExps = []
            Object.keys(schema[this.currentOrganism]).forEach(dt => {
                Object.keys(schema[this.currentOrganism][dt]).forEach(tp => {
                    if(tp === this.query.timepoint){
                        newExps.push(...schema[this.currentOrganism][dt][tp])
                    }
                })
            })
            this.renderedExps = [...newExps]
        },
        filterDTExperiments(){
            const newExps = []
            Object.keys(schema[this.currentOrganism][this.query.dataType]).forEach(tp => {
                newExps.push(...schema[this.currentOrganism][this.query.dataType][tp])
            })
            this.renderedExps = [...newExps]
        },
        removeTracks(){
            this.tracks=[]
        }
    }
    // other options...
  })