<template>
            <va-card
                v-for="exp in expsToRender"
                :key="exp.labExpId"
                stripe
                class="exp-item">
                <va-card-content class="exp-title-wrapper">
                    <a class="exp-title title" :href="'/experiments/'+exp.labExpId">{{exp.labExpId}}</a>
                    <va-popover message="Add tracks to genome browser session">
                        <va-button icon="add" outline color="#872674"/>
                    </va-popover>
                </va-card-content>
                <va-card-content>
                    <blockquote>
                        <p class="text--secondary" v-for="att in ['dataType','time','fraction', 'platform','replicate']"
                            :key="att">
                            {{att}}: {{exp[att]}}
                        </p>
                    </blockquote>
                </va-card-content>
            </va-card>
        <va-button
            :disabled="true"
            color="#872674"
        >
        <strong>total: {{total}}</strong>
        </va-button>
        <va-pagination
            color="#872674"
            input
            v-model="Exps.index"
            :total="total"
            boundary-numbers
            :page-size="pageSize"
            hide-on-single-page
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
    return Exps.renderedExps.slice(Exps.index-1, Exps.index+pageSize.value)
})

const Session = session()

const pageSize=ref(4)


function addTrack(exp){
    if(!Session.tracks.includes(exp.labExpId) ){
        Session.tracks.push(exp.labExpId)
    }
}

</script>
<style scoped>
.exp-title-wrapper{

    padding: 0 0 0 5px;
    display:flex;
    justify-content:space-between
}
.metadata-container{
    max-height: 100px;
    overflow: auto;
    width: min-content;
}
.attr-wrapper{
    width: min-content;
}
.exp-item{
    border: 2px solid transparent;
    /* border-radius: 1.25rem; */
    padding: 5px;
}
.exp-item:hover{
    border: 2px solid #872674;
}
a.exp-title{
    font-size: 1rem;
    color:#4c95e5!important;
}
a.exp-title:hover {
    text-decoration: underline;
}

</style>