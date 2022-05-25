import {defineStore} from 'pinia'

export const experiments = defineStore('experiments', {
    state: () => ({
        renderedExps:[],
        currentPage:1,
        pageSize:5,
        table:{},
    }),
    getters:{
        getTracks: (state) => state.tracks
    },
    actions:{
        activateTable(){

        },
        removeTracks(){
            this.tracks=[]
        }
    }
    // other options...
  })