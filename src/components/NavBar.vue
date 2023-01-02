<template>
    <div>
        <va-affix :offset-top="0">
            <div class="row navbar-container secondary-background margin-spacer align-center justify-space-between">
                <div class="flex lg6 md6 sm12 xs12">
                    <div class="row align-center justify-space-between">
                        <div class="flex lg4 md4 sm4 xs4">
                            <router-link :to="{name:'home'}"><h4 style="color:#fffffa" class="va-h6">RNAmaps</h4></router-link>
                        </div>
                    </div>
                </div>
                <div class="flex lg4 md4 sm12 xs12">
                    <div class="row align-center justify-space-between">
                        <div class="flex">
                            <router-link :to="'/human'"><h4 style="color:#fffffa" class="va-h6">Human</h4></router-link>
                        </div>
                        <div class="flex">
                            <router-link :to="'/fly'"><h4 style="color:#fffffa" class="va-h6">Fly</h4></router-link>
                        </div>
                        <div class="flex">
                            <va-badge left color="primary" overlap :text="sessionStore.tracks.length">
                                <va-icon @click="showModal=true" color="#ffffff" name="shopping_bag"></va-icon>
                            </va-badge>
                        </div>
                    </div>
                </div>
            </div>
        </va-affix>
        <va-modal hide-default-actions v-model="showModal">
            <div class="row">
                <div class="flex">
                    <va-icon name="shopping_bag" color="secondary"/>
                </div>
            </div>
            <ul style="max-height:300px;overflow: auto;">
                <li v-for="( track,idx) in sessionStore.tracks" :key="idx" class="margin-spacer">
                    <div class="row align-center justify-space-between">
                        <div class="flex">
                            <a>{{ track }}</a>                                    
                        </div>
                        <div class="flex">
                            <va-button icon="delete" plain />
                        </div>
                    </div>
                    <va-divider/>
                </li>
            </ul>
            <div class="row justify-space-between align-center">
                <div class="flex">
                    <va-button color="secondary" icon="download">Download</va-button>
                </div>
                <div class="flex">
                    <va-file-upload single v-model="sessionFile" file-types="json">
                        <va-button color="secondary" icon="wysiwyg">Genome Browser</va-button>
                    </va-file-upload>
                </div>
            </div>
        </va-modal>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { session } from '../stores/session';

const sessionStore = session()
const showModal = ref(false)
const sessionFile = ref([''])
</script>

<style>
    .navbar-container{
        max-height: 150px;
    }



</style>