import {defineStore} from 'pinia'
// import schema from '../assets/schemas/test_metadata.json'
import { mapper,humanAnnTrack } from '../trackConfigs'
import { reactive, ref } from 'vue'


const initSearchForm: Record<string,any> = {}
const initItems: Record<string,any>[] = []

export const session = defineStore('session', {
    state: () => ({
        samples:[...initItems],
        selectedFeatures:[...initItems],
        searchForm:{...initSearchForm},
        tracks:[...initItems],
        assembly:{},
        browserSession:{

        },
        browserTracks:reactive([
            // {
            //     "trackId": "WWP.3.UniqueMultiple.plusRaw.bw",
            //     "name": "WWP.3.UniqueMultiple.plusRaw.bw",
            //     "assemblyNames": ['dm6'],
            //     "type": "QuantitativeTrack",
            //     "adapter": {
            //       "type": "BigWigAdapter",
            //       "bigWigLocation": {
            //         "uri": "/files/cklein/dmel/UCSC_tracks/RNAseq/trypsin/WWP.3.UniqueMultiple.plusRaw.bw",
            //         "locationType": "UriLocation"
            //       }
            //     },
            // },
            // {
            //     "trackId": "WWP.3.UniqueMultiple.minusRaw.bw",
            //     "name": "WWP.3.UniqueMultiple.minusRaw.bw",
            //     "assemblyNames": ['dm6'],
            //     "type": "QuantitativeTrack",
            //     "adapter": {
            //       "type": "BigWigAdapter",
            //       "bigWigLocation": {
            //         "uri": "/files/cklein/dmel/UCSC_tracks/RNAseq/trypsin/WWP.3.UniqueMultiple.minusRaw.bw",
            //         "locationType": "UriLocation"
            //       }
            //     }
            // }
        ]),
    }),
    actions:{
        // removeTracks(){
        //     this.tracks=[]
        // },
        // addTrack(){

        // },

    }
    // other options...
  })