const flyOptions = {
    timepoints:  [
        { id:'L3', label: 'Larva', selected:false },
        { id: 'WP', label: 'White Pupa', selected:false },
        { id: 'LP', label: 'Late Pupa' , selected:false}
    ],
    tissues: [
        {id:"antenna", selected:false},
        {id:"eye", selected:false},
        {id:"eye-antenna", selected:false},
        {id:"wing", selected:false},
        {id:"leg", selected:false},
        {id:"genitalia", selected:false}   
    ],
    compartments : [
        {id:"whole tissue", selected:false},
        {id:"anterior", selected:false},
        {id:"dorsal", selected:false},
        {id:"posterior", selected:false},
        {id:"ventral", selected:false}
    ],
    targets: [
        {id:"H3K27ac", selected:false},
        {id:"H3K27me3", selected:false},
        {id:"H3K36me3", selected:false},
        {id:"H3K4me1", selected:false},
        {id:"H3K4me2", selected:false},
        {id:"H3K4me3", selected:false},
        {id:"H3K9ac", selected:false},
        {id:"H3K9me3", selected:false},
        {id:"H4K20me1", selected:false},
        {id:"H3K20me1", selected:false}
    ],
    treatment: [
        { id: 'trypsin', label: 'Trypsin', selected:false },
        { id: 'no-trypsin', label: 'No Trypsin', selected:false }
    ]
}


const humanOptions = {
    timepoints: [
        {label: "Oh",id: "00d00h00m", selected:false},
        {label: "3h",id: "00d03h00m", selected:false},
        {label: "6h",id: "00d06h00m", selected:false},
        {label: "9h",id: "00d09h00m", selected:false},
        {label: "12h",id: "00d12h00m", selected:false},
        {label: "18h",id: "00d18h00m", selected:false},
        {label: "1d",id: "01d00h00m", selected:false},
        {label: "1d12h",id: "01d12h00m", selected:false},
        {label: "2d",id: "02d00h00m", selected:false},
        {label: "3d",id: "03d00h00m", selected:false},
        {label: "5d",id: "05d00h00m", selected:false},
        {label: "7d",id: "07d00h00m", selected:false},
    ],
    targets: [
        {id:"H3K27ac", selected:false},
        {id:"H3K27me3", selected:false},
        {id:"H3K36me3", selected:false},
        {id:"H3K4me1", selected:false},
        {id:"H3K4me2", selected:false},
        {id:"H3K4me3", selected:false},
        {id:"H3K9ac", selected:false},
        {id:"H3K9me3", selected:false},
        {id:"H4K20me1", selected:false},
        {id:"cEBP", selected:false}
    ],
    fraction: [
        {id:"Whole Cell RNA", selected:false},
        {id:"Cytoplasm RNA", selected:false},
        {id:"Nucleus RNA", selected:false}
    ]
            
}

export const flyTissues = [
    {id:'antenna',color:'#c5ff9e'},
    {id:'eye',color:'#0c866d'},
    {id:'leg',color:'#f01919'},
    {id:'wing',color:'#2a7fff'}

]

export const organisms = [
    {
        id: 'human',
        title:'Human',
        path:'/human',
        imagePath:'/transdifferentiation.v2.svg',
        content:'Induced transdifferentiation of human pre-B cells into macrophages',
        timepoints: humanOptions.timepoints
    },
    {
        id:'fly',
        title:'Fly',
        path:'/fly',
        imagePath:'/development_labeled3.svg',
        content:'Organ morphogenesis during fly development',
        timepoints: flyOptions.timepoints

    }
]
export const expQuery = {

    fly : {
        ChIPseq: [
            {
                label:'Timepoint',
                key:'time',
                icon:'schedule',
                open:false,
                nodes: flyOptions.timepoints
            },
            {
                label:'Tissue',
                key:'tissue',
                icon: 'extension',
                open:false,
                nodes: flyOptions.tissues
            },
            {
                label:'Target',
                key:'antibody',
                icon:'bolt',
                open:false,
                nodes: flyOptions.targets
            }
        ],
        RNAseq: [
            {
                label:'Timepoint',
                key:'time',
                icon:'schedule',
                open:false,
                nodes: flyOptions.timepoints
            },
            {
                label:'Tissue',
                key:'tissue',
                icon: 'extension',
                open:false,
                nodes: flyOptions.tissues
            },
            {
                label:'Wing Compartment',
                key:'compartment',
                icon: 'extension',
                open:false,
                nodes: flyOptions.compartments
            },
            // {
            //     label:'Treatment',
            //     id:'treatment',
            //     open:false,
            //     nodes: flyOptions.treatment
            // },
        ]
    },
    human : {
        ChIPseq: [
            {
                label:'Timepoint',
                key:'time',
                icon:'schedule',
                open:false,
                nodes:humanOptions.timepoints
            },
            {
                label:'Target',
                key:'antibody',
                icon:'bolt',
                open:false,
                nodes: humanOptions.targets
            }
        ],
        RNAseq:[
            {
                label:'Timepoint',
                key:'time',
                icon:'schedule',
                open:false,
                nodes:humanOptions.timepoints
            },
            {
                label:'Fraction',
                key:'fraction',
                icon:'bubble_chart',
                open:false,
                nodes:humanOptions.fraction
            }
        ],
    }
}
