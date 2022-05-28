<template>
    <va-navbar text-color="white" color="#872674">
        <template #left>
            <va-navbar-item>RNAmaps</va-navbar-item>
            <va-navbar-item 
                v-for="item in items"
                :key="item.route"
                :active="item.active"
            >
                <va-button @click="toPage(item.route)" color="#872674"><va-image contain style="width:50px" :src="item.path"/></va-button>
            </va-navbar-item>
        </template>
        <template #right>
            <va-navbar-item>
                <va-badge color="info" overlap :text="Session.tracks.length">
                    <va-button-dropdown color="#872674" class="ml-2">
                        <template #label>
                            <va-icon name="shopping_bag" size="small" />
                        </template>
                        <va-card>
                            <va-card-content>
                                <va-list>
                                    <va-list-label>
                                        Human:
                                    </va-list-label>
                                    <va-list-item
                                        v-for="track in Session.tracks"
                                        :key="track"
                                    >
                                    <va-list-item-section>
                                        <va-list-item-label>
                                        {{ track }}
                                        </va-list-item-label>
                                    </va-list-item-section>
                                    <va-list-item-section icon>
                                        <va-icon
                                            name="delete"
                                            color="danger"
                                            @click="Session.tracks.splice(Session.tracks.indexOf(track),1)"
                                        />
                                    </va-list-item-section>
                                    </va-list-item>
                                </va-list>
                            </va-card-content>
                            <va-card-actions align="between">
                                <va-button @click="loadTracks()">Load tracks</va-button>
                                <va-button>Remove tracks</va-button>
                            </va-card-actions>
                        </va-card>
                    </va-button-dropdown>
                </va-badge>
            </va-navbar-item>
        </template>
    </va-navbar>
</template>
<script setup>
import {session} from '../stores/session'
import {experiments} from '../stores/experiments'
import {flyGenome} from '../assemblies/fly'
import {humanGenome} from '../assemblies/human'
import { useRouter } from 'vue-router'


const router = useRouter()
const Session = session()
const Exps = experiments()

const items = [
    // { title: 'Home', path: 'dashboard' },
    { title: 'Fly', path: 'src/assets/fly_icon.svg', route:'fly'},
    { title: 'Human', path: 'src/assets/women_icon2.svg', route:'human'},
]

function loadTracks(){
    //create assembly
    if (Exps.currentOrganism === 'fly'){
        Session.assembly = [...[flyGenome]]
    }else {
        Session.assembly = [...[humanGenome]]
    }
    Session.createSession()
}

function toPage(route){
    Exps.currentOrganism = route
    Exps.createMatrix()
    router.push({
        name: route
    })    
}

</script>