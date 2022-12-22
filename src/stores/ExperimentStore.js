import {defineStore} from 'pinia'
import schema from '../assets/metadata.json'
import {reactive } from 'vue'



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
            const targets = [...new Set(schema.human.filter(exp => exp.dataType === 'ChIPseq').map(exp => exp.antibody))]
            console.log(targets)
            const expIds = schema.human.map(exp => exp.expId)
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
            const abs = [...new Set(schema.human.map(exp => exp.antibody))]
            console.log(abs)
            const fExps = schema.human
            .filter(exp => Object.keys(this.query)
            .filter(key=>this.query[key]).every(key => this.query[key] === exp[key]))
            this.renderedExps = [...fExps]
        }
    }
})

export const fExperiments = defineStore('fExperiments', {
    state: () => ({
        renderedExps:[],
        query:reactive({
            dataType:null,
            time:null,
            fraction:null,
            tissue:null,
            compartment:null,
            antibody:null
        }),
        table:reactive({
            dataType: [
                {label:'RNAseq',value:'RNAseq',active:false,count:1},
                {label:'ChIPseq',value:'ChIPseq',active:false,count:1}
            ],
            time: [
                {label:"L3", value:"L3",active:false,count:1},
                {label:"LP", value:"LP",active:false,count:1},
                {label:"WP", value:"WP",active:false,count:1},
            ],
            tissue:[
                {label:'wing',value:'wing',active:false,count:1},
                {label:'eye',value:'eye',active:false,count:1},
                {label:'antenna',value:'antenna',active:false,count:1},
                {label:'leg',value:'eye-antenna',active:false,count:1},
                {label:'genitalia',value:'genitalina',active:false,count:1},
            ],
            compartment:[
                {label:'whole tissue',value:'whole tissue',active:false,count:1},
                {label:'anterior',value:'anterior',active:false,count:1},
                {label:'dorsal',value:'dorsal',active:false,count:1},
                {label:'posterior',value:'posterior',active:false,count:1},
                {label:'ventral',value:'ventral',active:false,count:1},
            ],
            // antibody:[
            //     {label:}

            // ]

        }),
    }),
    actions:{
        loadExps(){
            const exps = schema.fly
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
            const abs = [...new Set(schema.fly.map(exp => exp.antibody))]
            console.log(abs)
            const fExps = schema.fly
            .filter(exp => Object.keys(this.query)
            .filter(key=>this.query[key]).every(key => this.query[key] === exp[key]))
            this.renderedExps = [...fExps]
        }
    }
})

export const expDetails = defineStore('expDetails', {
    state: () => ({
        expId:'',
        expObject:'',
        organism:'',
        assemblyName:''
    }),
    actions:{
        getExperiment(){
            Object.keys(schema).forEach(organism => {
                const filteredExp = schema[organism].filter(exp => exp.labExpId === this.expId)
                if(filteredExp.length){
                    this.organism = organism
                    this.expObject = filteredExp[0]
                }

            })
            this.assemblyName = this.organism === 'fly' ? 'dm6': 'GRCh38'
        }
    }
})