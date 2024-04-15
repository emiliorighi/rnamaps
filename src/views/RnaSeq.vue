<template>
    <div>
        <div class="row">
            <div class="flex">
                <FiltersSideBar :filters="filters" :options="query" @item-toggled="updateQuery" />
            </div>
            <div class=flex>
                <div class="row align-center justify-space-between margin-spacer">
                    <div class="flex">
                        <va-chip style="margin:8px" shadow v-for="(k, index) in Object.keys(filters)" :key="index"
                            :icon="query.find(opt => opt.key === k).icon" color="info"
                            outline @click="removeFilter(k)">{{ filters[k] }}</va-chip>
                    </div>
                    <div class="flex">
                        <Pagination :total="total" />
                    </div>
                </div>
                <div class="row">
                    <div class="flex lg12 md12 sm12 xs12">
                        <va-data-table :items="samples" />

                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script setup lang="ts">
import { organisms, expQuery } from '../static-config';
import { computed, onMounted, ref,  watch } from 'vue'
import schema from '../assets/metadata.json'
import { session } from '../stores/session';
import FiltersSideBar from '../components/FiltersSideBar.vue';
import Pagination from '../components/Pagination.vue';


const props = defineProps<{
    columns: string[]
    items: Record<string,any>[]
}>()

const storeSession = session()
const samples = ref<Record<string, any>[]>([])
const filters = ref<Record<string, any>>({})
const total = ref(0)

onMounted(async () => {

})

async function getSamplesFromTSVFile(query, pagination) {
    try {
        const response = await fetch('../../metadata.tsv');
        const tsvData = await response.text();

        // Split the TSV data into rows
        const rows = tsvData.split('\n');

        // Get headers from the first row
        const headers = rows.shift()?.split('\t') ?? [];
        const dataTypeIndex = headers.findIndex(h => h === 'dataType')
        rows.filter(r => r[dataTypeIndex] === 'RNAseq')
        // Parse the TSV data into objects
        const parsedData = rows.map(row => {
            const cells = row.split('\t');
            const rowData: Record<string, any> = {};

            // Create an object with headers as keys and corresponding cells as values
            headers.forEach((header, index) => {
                rowData[header] = cells[index];
            });

            // Create an ID by combining labExpId and replicate
            rowData.id = rowData.labExpId + '_' + rowData.replicate;

            return rowData;
        });

        // Update component data
        data.value = parsedData;
    } catch (error) {
        console.error('Error loading TSV file:', error);
    }
}

const tabs = [
    { title: 'RNA-Seq', id: 'RNAseq' },
    { title: 'ChIP-Seq', id: 'ChIPseq' },
    { icon: 'search', title: 'Gene Expression', id: 'GeneSearch' },
    { title: 'Genome Browser', id: 'JBrowse' },
]

const tabTitle = computed(() => {
    return tabs.find(t => t.id === tabValue.value).title
})

const size = 10

const tabValue = ref('RNAseq')
const selectedOrganism = ref({})
const filters = ref({})
const index = ref(0)
const pageSize = ref(size)
const query = expQuery.fly.RNAseq
const experiments = ref([])

const props = defineProps<{
    organism: string
}>({})

const isDataType = computed(() => {
    return tabValue.value === 'RNAseq' || tabValue.value === 'ChIPseq'
})

const paginatedExps = computed(() => {
    return experiments.value.slice(index.value, index.value + pageSize.value)
})

const experimentKeys = computed(() => {
    return expQuery[props.organism][tabValue.value]
})

watch(tabValue, () => {
    //keys to remove
    if (!isDataType) return
    const keys = Object.keys(filters.value)
        .filter(key => !reactiveQuery[props.organism][tabValue.value]
            .map(opt => opt.key)
            .includes(key))
    if (keys.length) {
        keys.forEach(k => removeFilter(k))
        return
    }
    experiments.value = filterExperiments()
    resetPagination()
})

function resetPagination() {
    index.value = 0
    pageSize.value = size
}

function updateQuery(payload, isActive) {
    if (isActive) {
        removeFilter(payload[0])
    } else {
        filters.value[payload[0]] = payload[1]
    }
    experiments.value = filterExperiments()
    resetPagination()
}

function removeFilter(key) {
    delete filters.value[key]
    experiments.value = filterExperiments()
}

function filterExperiments() {
    return [...schema[props.organism].filter(exp => exp.dataType === tabValue.value).filter(exp => {
        if (Object.keys(filters.value).every(key => filters.value[key] === exp[key])) {
            return true
        }
        return false
    })]
}

onMounted(() => {
    experiments.value.push(...schema[props.organism].filter(exp => exp.dataType === tabValue.value))
    selectedOrganism.value = organisms.find(org => org.id === props.organism)
})
</script>