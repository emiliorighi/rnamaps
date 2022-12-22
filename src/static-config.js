export const organisms = [
    {
        id: 'human',
        title:'Human',
        route:'human-new',
        imagePath:'/transdifferentiation.v2.svg',
        content:'Induced transdifferentiation of human pre-B cells into macrophages'
    },
    {
        id:'fly',
        title:'Fly',
        route:'fly-new',
        imagePath:'/development_labeled3.svg',
        content:'Organ morphogenesis during fly development',
        tissues: true
    }
]

export const dataTypes = ['RNASeq','ChipSeq']
export const timepoints = [
    {
        organism:'fly',
        values:[
            {label:"L3", value:"L3"},
            {label:"LP", value:"LP"},
            {label:"WP", value:"WP"}
        ]
    },
    { 
        organism: 'human',
        values: [
            {label: "Oh",value: "00d00h00m"},
            {label: "3h",value: "00d03h00m"},
            {label: "6h",value: "00d06h00m"},
            {label: "9h",value: "00d09h00m"},
            {label: "12h",value: "00d12h00m"},
            {label: "18h",value: "00d18h00m"},
            {label: "1d",value: "01d00h00m"},
            {label: "1d12h",value: "01d12h00m"},
            {label: "2d",value: "02d00h00m"},
            {label: "3d",value: "03d00h00m"},
            {label: "5d",value: "05d00h00m"},
            {label: "7d",value: "07d00h00m"},
        ]
    }
]

export const tissues = [
    'wing','eye','antenna','leg'
]

const flyOptions = {
    timepoints:  [
        { id:'L3', label: 'Larva (L3)' },
        { id: 'WP', label: 'White Pupa (WP)' },
        { id: 'LP', label: 'Late Pupa (LP)' }
    ],
    tissues: [
        {id:"antenna"},
        {id:"eye"},
        {id:"eye-antenna"},
        {id:"wing"},
        {id:"leg"},
        {id:"genitalia"}   
    ],
    compartments : [
        {id:"whole tissue"},
        {id:"anterior"},
        {id:"dorsal"},
        {id:"posterior"},
        {id:"ventral"}
    ],
    targets: [
        {id:"H3K27ac"},
        {id:"H3K27me3"},
        {id:"H3K36me3"},
        {id:"H3K4me1"},
        {id:"H3K4me2"},
        {id:"H3K4me3"},
        {id:"H3K9ac"},
        {id:"H3K9me3"},
        {id:"H4K20me1"},
        {id:"H3K20me1"}
    ],
    treatment: [
        { id: 'trypsin', label: 'Trypsin' },
        { id: 'no-trypsin', label: 'No Trypsin' }
    ]
}


const humanOptions = {
    timepoints: [
        {label: "Oh",id: "00d00h00m"},
        {label: "3h",id: "00d03h00m"},
        {label: "6h",id: "00d06h00m"},
        {label: "9h",id: "00d09h00m"},
        {label: "12h",id: "00d12h00m"},
        {label: "18h",id: "00d18h00m"},
        {label: "1d",id: "01d00h00m"},
        {label: "1d12h",id: "01d12h00m"},
        {label: "2d",id: "02d00h00m"},
        {label: "3d",id: "03d00h00m"},
        {label: "5d",id: "05d00h00m"},
        {label: "7d",id: "07d00h00m"},
    ],
    targets: [
        {id:"H3K27ac"},
        {id:"H3K27me3"},
        {id:"H3K36me3"},
        {id:"H3K4me1"},
        {id:"H3K4me2"},
        {id:"H3K4me3"},
        {id:"H3K9ac"},
        {id:"H3K9me3"},
        {id:"H4K20me1"},
        {id:"cEBP"}
    ],
    fraction: [
        {id:"Whole Cell RNA"},
        {id:"Cytoplasm RNA"},
        {id:"Nucleus RNA"}
    ]
            
}

export const expQuery = {

    fly : {
        ChIPSeq: [
            {
                label:'Timepoints',
                key:'time',
                nodes: flyOptions.timepoints
            },
            {
                label:'Tissues',
                key:'tissue',
                nodes: flyOptions.tissues
            },
            {
                label:'Targets',
                key:'antibody',
                nodes: flyOptions.targets
            }
        ],
        RNASeq: [
            {
                label:'Timepoints',
                key:'time',
                nodes: flyOptions.timepoints
            },
            {
                label:'Tissues',
                key:'tissue',
                nodes: flyOptions.tissues
            },
            {
                label:'Wing Compartment',
                key:'compartment',
                nodes: flyOptions.compartments
            },
            {
                label:'Treatment',
                id:'treatment',
                nodes: flyOptions.treatment
            },
        ]
    },
    human : {
        ChIPSeq: [
            {
                label:'Targets',
                key:'antibody',
                nodes: humanOptions.targets
            },
            {
                label:'Timepoints',
                key:'time',
                nodes:humanOptions.timepoints
            },
        ],
        RNASeq:[
            {
                label:'Timepoints',
                key:'time',
                nodes:humanOptions.timepoints
            },
            {
                label:'Fractions',
                key:'fraction',
                nodes:humanOptions.fraction
            }
        ],
    }
}
