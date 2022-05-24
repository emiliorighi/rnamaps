<template>
    <div class="row">
        <div class="flex">
            <CellSvg/>
        </div>
    </div>
    <div class="row">
        <div class="flex" style="overflow:scroll">
            <va-data-table 
                :items="experiments" 
                :columns="columns"
                :style="{
                    '--va-data-table-scroll-table-color': '#872674',
                }"
                :per-page="perPage"
                :current-page="currentPage"
                @filtered="filtered = $event.items"
            >
                <template #header(actions)/>
                <template #cell(actions)><va-button size="small" color="#872674" icon='add'></va-button></template>
                <template #bodyAppend>
                    <tr>
                        <td colspan="1"/>
                        <td colspan="2">
                            <va-pagination
                                flat
                                color="#872674"
                                v-model="currentPage"
                                :pages="pages"
                                input
                            />
                        </td>
                    </tr>
                </template>
            </va-data-table>
        </div>
    </div>
</template>
<script setup>
import expService from '../services/ExperimentService'
import {ref,computed} from 'vue'
import FieldSelect from '../components/FieldSelect.vue'
import CellSvg from '../components/CellSvg.vue'


const props = defineProps({
  organism: String,
})


var perPage = ref(10)
var currentPage = ref(1)
const experiments = expService.getExperiments({organism:props.organism})
var filtered = [...experiments]
const columns=props.organism === 'human'? ['labExpId','dataType','time','actions'] : ['labExpId','dataType','stage','actions']
const columnDefinitions = Object.keys(experiments[0])
const pages = computed(() => {
  return (perPage && perPage.value !== 0)
        ? Math.ceil(filtered.length / perPage.value)
        : filtered.length
})
</script>