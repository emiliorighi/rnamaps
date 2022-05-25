<template>
    <va-list>
        <va-list-label>
            Experiments
        </va-list-label>
            <va-list-item
                v-for="exp in expsToRender"
                :key="exp.labExpId"
        >
            <va-list-item-section>
                <va-list-item-label>
                    {{ exp.labExpId }}
                </va-list-item-label>
                <va-list-item-label caption>
                    fraction: {{ exp.fraction }}
                </va-list-item-label>
                <va-list-item-label caption>
                    platform: {{ exp.platform }}
                </va-list-item-label>
            </va-list-item-section>
            <va-list-item-section icon>
                <va-button @click="addTrack(exp.labExpId)" icon="add" color="#872674"/>
            </va-list-item-section>
        </va-list-item>
    </va-list>
    <va-pagination
      v-if="expsToRender.length"
      size="small"
      v-model="index"
      :total="experiments.length"
      boundary-numbers
      :page-size="pageSize"
      :visible-pages="4"
    />
</template>
<script setup>
import { ref,computed } from 'vue'
import {session} from '../stores/session'

const props = defineProps({
    experiments:Array
})
const Session = session()

const pageSize=ref(5)
var index = ref(1)

const expsToRender = computed(() => {
    return props.experiments.slice(index.value-1, index.value+pageSize.value)
})

function addTrack(label){
    if(!Session.tracks.includes(label)){
        Session.tracks.push(label)
    }
}

</script>