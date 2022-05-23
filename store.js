import {defineStore} from 'pinia'

export const userSession = defineStore('main', {
    state: () => ({
        tracks:[]
    }),
    getters:{
        getTracks: (state) => state.tracks
    },
    actions:{
        removeTracks(){
            this.tracks=[]
        }
    }
    // other options...
  })