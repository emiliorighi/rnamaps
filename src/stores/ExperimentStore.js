import {defineStore} from 'pinia'
import schema from '../assets/schemas/test_metadata.json'
import {reactive,ref } from 'vue'

export const hExperiments = defineStore('hExperiments', {
    state: () => ({
        renderedExps:[],
        query:reactive({
            dataType:null,
            time:null,
            fraction:null,
        }),
        table:reactive({
            dataType: [
                    {label:'Proteomics',value:'Proteomics',active:false, count:1},
                    {label:'RibosomeProfiling',value:'RibosomeProfiling',active:false,count:1}, 
                    {label:'RNAseq',value:'RNAseq',active:false,count:1},
                    {label:'ChIPseq',value:'ChIPseq',active:false,count:1}
                ],
            time: [
                    {label: "Oh",value: "00d00h00m",active:false,count:1},
                    {label: "3h",value: "00d03h00m",active:false,count:1},
                    {label: "6h",value: "00d06h00m",active:false,count:1},
                    {label: "9h",value: "00d09h00m",active:false,count:1},
                    {label: "12h",value: "00d12h00m",active:false,count:1},
                    {label: "18h",value: "00d18h00m",active:false,count:1},
                    {label: "1d",value: "01d00h00m",active:false,count:1},
                    {label: "1d12h",value: "01d12h00m",active:false,count:1},
                    {label: "2d",value: "02d00h00m",active:false,count:1},
                    {label: "3d",value: "03d00h00m",active:false,count:1},
                    {label: "5d",value: "05d00h00m",active:false,count:1},
                    {label: "7d",value: "07d00h00m",active:false,count:1},
                ],
            fraction:[
                    {label:'Whole Cell RNA',value:'Whole Cell RNA',active:false,count:1},
                    {label:'Cytoplasmic RNA',value:'Cytoplasmic RNA',active:false,count:1}, 
                    {label:'Nucleus RNA',value:'Nucleus RNA',active:false,count:1},
                ]
        }),
    }),
    actions:{
        loadExps(){
            const exps = schema.human
            this.renderedExps = [...exps]
        },
        updateQueryInputs(){
            Object.keys(this.table).forEach(key => {
                this.table[key].forEach(opt => {
                    opt.count = this.renderedExps.filter(exp=>exp[key] === opt.value).length
                })
            })
        },
        filterExperiments(){
            const fExps = schema.human
            .filter(exp => Object.keys(this.query)
            .filter(key=>this.query[key]).every(key => this.query[key] === exp[key]))
            this.renderedExps = [...fExps]
        }
    }
  })