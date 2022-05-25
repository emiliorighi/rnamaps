import {defineStore} from 'pinia'

export const session = defineStore('session', {
    state: () => ({
        tracks:[],
        assembly:[],
    }),
    getters:{
        getTracks: (state) => state.tracks
    },
    actions:{
        removeTracks(){
            this.tracks=[]
        },
        addTrack(){

        }
    }
    // other options...
  })