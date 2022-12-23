import {defineStore} from 'pinia'
import schema from '../assets/metadata.json'
import {reactive } from 'vue'
import { expQuery } from '../static-config'


export const query = defineStore('query', {
    state: () => ({
        experiments:[],
        loadedExperiments:[],
        experimentsToRender:[],
        table:reactive(expQuery),
        dataType:'',
        organism:'',
    }),
    actions:{
        initExperiments(){
            this.experiments = [...schema[this.organism]]
        },
        loadExperiments(){
            this.loadedExperiments = [...this.experiments.filter(exp => exp.dataType === this.dataType)]
        },
        filterExperiments(){
            const dataTable = this.table[this.organism][this.dataType]
            const filteredExperiments = this.loadedExperiments.filter(exp => {
                const bla = dataTable.map(it => {
                    const key = it.key
                    const selectedValues = it.nodes.filter(node => node.selected)
                    return {key: key, values: selectedValues}
                })
                console.log(bla)
            }
            )
            // .filter(exp => Object.keys(this.query)
            // .filter(key=>this.query[key]).every(key => this.query[key] === exp[key]))
            // this.renderedExps = [...fExps]
        }
    }
})