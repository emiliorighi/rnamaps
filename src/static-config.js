const flyOptions = {
    timepoints:  [
        { id:'L3', label: 'Larva (L3)', selected:false },
        { id: 'WP', label: 'White Pupa (WP)', selected:false },
        { id: 'LP', label: 'Late Pupa (LP)' , selected:false}
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
                disabled:false,
                nodes: flyOptions.timepoints
            },
            {
                label:'Tissue',
                key:'tissue',
                disabled:false,
                nodes: flyOptions.tissues
            },
            {
                label:'Target',
                key:'antibody',
                disabled:false,
                nodes: flyOptions.targets
            }
        ],
        RNAseq: [
            {
                label:'Timepoint',
                key:'time',
                disabled:false,
                nodes: flyOptions.timepoints
            },
            {
                label:'Tissue',
                key:'tissue',
                disabled:false,
                nodes: flyOptions.tissues
            },
            {
                label:'Wing Compartment',
                key:'compartment',
                disabled:false,
                nodes: flyOptions.compartments
            },
            {
                label:'Treatment',
                id:'treatment',
                disabled:false,
                nodes: flyOptions.treatment
            },
        ]
    },
    human : {
        ChIPseq: [
            {
                label:'Target',
                key:'antibody',
                disabled:false,
                nodes: humanOptions.targets
            },
            {
                label:'Timepoint',
                key:'time',
                disabled:false,
                nodes:humanOptions.timepoints
            },
        ],
        RNAseq:[
            {
                label:'Timepoint',
                key:'time',
                disabled:false,
                nodes:humanOptions.timepoints
            },
            {
                label:'Fraction',
                key:'fraction',
                disabled:false,
                nodes:humanOptions.fraction
            }
        ],
    }
}
