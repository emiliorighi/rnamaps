<template>
<div v-if="total" class="row justify--space-between">
    <div class="flex">
        <va-chip
            flat
            color="#872674"
        >
        <strong>total: {{total}}</strong>
        </va-chip>
    </div>
    <div class="flex">
        <va-pagination
            size="small"
            color="#872674"
            v-model="Exps.index"
            :total="total"
            boundary-numbers
            :page-size="pageSize"
            :visible-pages="5"
            hide-on-single-page
        />
    </div>
</div>
<div class="row">
    <div class="flex lg12">
    <va-list>
        <va-list-label>
            Experiments
        </va-list-label>
            <va-list-item
                v-for="exp in expsToRender"
                :key="exp.labExpId"
                :to="{name:'experiments',params:{id:exp.labExpId}}"
            >
            <va-list-item-section
                class="exp-item"
            >
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
                <va-button size="small" @click.stop.prevent="addTrack(exp)" icon="add" color="#872674"/>
            </va-list-item-section>
        </va-list-item>
    </va-list>
    </div>
</div>

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
    return Exps.renderedExps.slice(Exps.index-1, Exps.index+pageSize.value)
})

const Session = session()

const pageSize=ref(5)


function addTrack(exp){
    if(!Session.tracks.includes(exp.labExpId) ){
        Session.tracks.push(exp.labExpId)
    }
}

</script>
<style scoped>
.exp-item{
    border-radius: 1.25rem;
    padding: 5px;
}
.exp-item:hover{
    border: 2px solid #872674;
}
</style>