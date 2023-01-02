<template>
    <va-card>
        <va-card-content>
            <div class="row justify-space-between align-center">
                <div class="flex">
                    <div class="row align-center justify-space-around">
                        <div class="flex">
                            <va-checkbox @update:model-value="toggle" color="secondary" v-model="isAllSelected"></va-checkbox>
                        </div>
                        <div class="flex metadata">
                            <div class="row">
                                <div class="flex">
                                    <h6 class="va-h6" style="color:var(--va-secondary)">{{ exp.labExpId }}</h6>
                                </div>
                            </div>
                            <div class="row">
                                <div class="flex">
                                    <span class="va-text-secondary">{{ `replicate: #${exp.replicate}` }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="row margin-spacer">
                        <div v-for="attr in attributes" :key="attr.key" class="flex">
                            <va-chip @click="$emit('chipToggled',[attr.key, exp[attr.key]])"  color="secondary" :icon="attr.icon">{{ exp[attr.key] }}</va-chip>
                        </div>
                    </div>
                </div>
            </div>
        </va-card-content>
        <va-divider/>
        <va-card-content>
            <div style="max-height:150px;overflow:auto" class="row justify-space-between">
                <div v-for="(k, index) in Object.keys(exp).filter(k => k !== 'files')" :key="index" class="flex metadata lg4 md4 sm4 xs4">
                    <div class="row">
                        <div class="flex">
                            {{ k }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="flex">
                            <strong>{{ exp[k] }}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </va-card-content>
        <va-divider/>
        <va-card-content v-if="exp.files">
            <div v-for="file in exp.files" :key="file.name" class="row align-center justify-space-between">
                <div class="flex">
                    <va-checkbox :array-value="file.name" color="secondary" v-model="storeSession.tracks" :label="file.name"></va-checkbox>
                </div>
            </div>
        </va-card-content>
        <!-- <va-card-actions align="between">
            <va-button :disabled="!tracks.length" color="secondary" icon="download">{{ `Download (${tracks.length})` }}</va-button>
            <va-button :disabled="!tracks.length" color="secondary" icon="add_box">{{ `Add (${tracks.length})` }}</va-button>
        </va-card-actions> -->
    </va-card>
</template>
<script setup>
import { computed, watch, ref } from 'vue';
import { session } from '../stores/session';

const props = defineProps({
    exp:Object,
    attributes:Array
})

const storeSession = session()

watch(storeSession.tracks, ()=>{
    console.log('hellooo')
    isAllSelected.value = props.exp.files && props.exp.files.every(f => storeSession.tracks.includes(f.name))
})

const isAllSelected = ref(false)

const emits = defineEmits(['chipToggled'])

function toggle(value){
        //add
        if(value){
            props.exp.files.filter(file => !storeSession.tracks.includes(file.name))
                .forEach(file => {
                    storeSession.tracks.push(file.name)
                })
            return
        }
        props.exp.files.forEach(file => {
            const index = storeSession.tracks.findIndex(t => t === file.name)
            storeSession.tracks.splice(index,1)
        })
}
</script>
<style>
    .metadata{
        padding: 8px;
    }
</style>