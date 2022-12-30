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
                <div v-for="(attr, index) in attributes" :key="index" class="row left-padding">
                    <div v-if="exp[attr]" class="flex">
                       <strong>{{ attr }}</strong>: {{ exp[attr]}}
                    </div>
                </div>
                <div class="row left-padding">
                    <div class="flex">
                        <strong>replicate: </strong>: {{ exp.replicate}}
                    </div>
                </div>
            </div>
            <div class="flex">
                <va-button-dropdown color="secondary"  label="files" :close-on-content-click="false">
                    <div style="overflow:scroll" v-for="(file , index) in exp.files" :key="index" class="row">
                        <div class="flex">
                            {{  }}
                        </div>
                        <div class="flex">

                        </div>
                    </div>
                </va-button-dropdown>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    experiments:Array,
    attributes:Array // experiment attribute keys
})


</script>
<style>
.left-padding{
    padding-left: 16px;
}
</style>