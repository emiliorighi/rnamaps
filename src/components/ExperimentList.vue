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
      v-if="total"
      size="small"
      v-model="index"
      :total="total"
      boundary-numbers
      :page-size="pageSize"
      :visible-pages="5"
    />
</template>
<script setup>
import { ref,computed } from 'vue'
import {session} from '../stores/session'
import {experiments} from '../stores/experiments'

const Exps = experiments()
const total = computed(() => {
    return Exps.renderedExps.length
})

const expsToRender = computed(() => {
    return Exps.renderedExps.slice(index.value-1, index.value+pageSize.value)
})

const Session = session()

const pageSize=ref(5)
var index = ref(1)


function addTrack(label){
    if(!Session.tracks.includes(label)){
        Session.tracks.push(label)
    }
}

</script>