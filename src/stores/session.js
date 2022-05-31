import {defineStore} from 'pinia'
import { experiments } from './experiments' 
import schema from '../assets/schemas/test_metadata.json'
import { mapper,humanAnnTrack } from '../trackConfigs'
import { reactive, ref } from 'vue'

export const session = defineStore('session', {
    state: () => ({
        tracks:[],
        assembly:{},
        browserSession:{
        },
        browserTracks:reactive([
            {
                "trackId": "WWP.3.UniqueMultiple.plusRaw.bw",
                "name": "WWP.3.UniqueMultiple.plusRaw.bw",
                "assemblyNames": ['dm6'],
                "type": "QuantitativeTrack",
                "adapter": {
                  "type": "BigWigAdapter",
                  "bigWigLocation": {
                    "uri": "/files/cklein/dmel/UCSC_tracks/RNAseq/trypsin/WWP.3.UniqueMultiple.plusRaw.bw",
                    "locationType": "UriLocation"
                  }
                },
            },
            {
                "trackId": "WWP.3.UniqueMultiple.minusRaw.bw",
                "name": "WWP.3.UniqueMultiple.minusRaw.bw",
                "assemblyNames": ['dm6'],
                "type": "QuantitativeTrack",
                "adapter": {
                  "type": "BigWigAdapter",
                  "bigWigLocation": {
                    "uri": "/files/cklein/dmel/UCSC_tracks/RNAseq/trypsin/WWP.3.UniqueMultiple.minusRaw.bw",
                    "locationType": "UriLocation"
                  }
                }
            }
        ]),
        organism:ref(''),
    }),
    getters:{
        getTracks: (state) => state.tracks
    },
    actions:{
        removeTracks(){
            this.tracks=[]
        },
        addTrack(){

        },
        createSession(){
            const tracksToLoad =[]
            schema[this.organism]
            .forEach(exp => {

                if(this.tracks.includes(exp.labExpId)){
                exp.files.forEach(file => {
                    const trackToLoad = {...mapper[file.type]}
                    const name = file.url.split('/')[file.url.split('/').length-1]
                    trackToLoad.trackId = name
                    trackToLoad.name = name
                    trackToLoad.assemblyNames=[this.assembly.name]
                    if(trackToLoad.adapter.bigBedLocation){
                        trackToLoad.adapter.bigBedLocation.uri = file.url
                    }else{
                        trackToLoad.adapter.bigWigLocation.uri = file.url
                    }
                    console.log(trackToLoad.trackId)
                    tracksToLoad.push(trackToLoad)
                })}
            })
            if(this.organism === 'human'){
                tracksToLoad.push(humanAnnTrack)
            }else{

            }
            this.browserTracks = [...tracksToLoad]

        }
    }
    // other options...
  })