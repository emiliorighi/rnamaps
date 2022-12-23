<template>
    <div v-for="(exp,index) in experiments" :key="index">
        <va-divider/>
        <div class="row justify-space-between align-top">
            <div class="flex">
                <div class="row">
                    <div class="flex">
                        <h1 style="color:var(--va-secondary);" class="va-h6 title">
                            {{ exp.labExpId }}
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="flex">
                        {{ `Platform: ${exp.platform}` }}
                    </div>
                </div>
                <div class="row">
                    <div class="flex">
                        {{ `Time: ${exp.time}` }}
                    </div>
                </div>
                <div v-if="exp.description" class="row">
                    <div class="flex">
                        {{ `Description: ${exp.description}` }}
                    </div>
                </div>
            </div>
            <div class="flex">
                <va-dropdown>
                    <template #anchor>
                    <va-button round color="secondary">
                        files
                    </va-button>
                    </template>

                    <va-dropdown-content>
                        <div v-for="(file , index) in exp.files" :key="index" class="row">
                            <div class="flex">
                                {{ file }}
                            </div>
                            <div class="flex">

                            </div>
                        </div>
                    </va-dropdown-content>
                </va-dropdown>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    experiments:Array
})

</script>