<template>
    <va-navbar text-color="white" color="secondary">
        <template #left>
            <va-navbar-item 
                v-for="item in items"
                :key="item.route"
                :disabled="item.active"
            >
                <va-button size="small" :to="{name:item.route}" color="secondary"><va-image contain style="width:50px" :src="item.path"/></va-button>
            </va-navbar-item>
        </template>
        <template #right>
            <va-navbar-item>
                <va-badge color="primary" overlap :text="Session.browserTracks.length">
                    <va-button-dropdown :disabled="!Session.browserTracks.length" size="small"  color="secondary" class="ml-2">
                        <template #label>
                            <va-icon name="shopping_bag" size="small" />
                        </template>
                        <div style="padding:10px!important;max-heigth:150px;overflow:auto">
                            <p class="title">{{Session.currentOrganism}}</p>
                            <ul>
                                <li 
                                    class="track-element"
                                    v-for="track in Session.browserTracks"
                                    :key="track"
                                >
                                    <p class="text--secondary">{{track.name}}</p>
                                    <va-icon
                                        name="close"
                                        @click="Session.browserTracks.splice(Session.browserTracks.indexOf(track),1)"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div style="display:flex;justify-content:space-between">
                            <va-button size="small" @click="loadTracks()">Genome Browser</va-button>
                            <va-button size="small" @click="clearSession()">Clear session</va-button>
                        </div>
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
const items = [
    // { title: 'Home', path: 'dashboard' },
    { title: 'Fly', path: '/fly_icon.svg', route:'fly'},
    { title: 'Human', path: '/women_icon2.svg', route:'human'},
]

function loadTracks(){
    //create assembly
    // Session.createSession()
    router.push({name: 'jbrowse2'})
}
function clearSession(){
    Session.currentOrganism=''
    Session.browserTracks=[]
}


</script>
<style scoped>
.track-element{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5px;
}
</style>