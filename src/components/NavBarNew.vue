<template>
    <div>
        <va-affix :offset-top="0">
            <div class="row navbar-container secondary-background margin-spacer align-center justify-space-between">
                <div class="flex lg6 md6 sm12 xs12">
                    <div class="row align-center justify-space-between">
                        <div class="flex lg4 md4 sm4 xs4">
                            <router-link :to="{name:'home'}"><h4 style="color:#fffffa" class="va-h6">RNAmaps</h4></router-link>
                        </div>
                        <div class="flex lg8 md8 sm12 xs12">
                            <!-- <va-input
                                v-model="geneid"
                                label="Search"
                                :placeholder="organism === 'fly'? 'Ex: FBgn0000036':'Ex: HumanGeneId'"
                                type="search"
                                clearable
                            >
                                <template #prependInner>
                                    <va-switch
                                        v-model="organism"
                                        color="#5123a1"
                                        off-color="#ffd300"
                                        true-value="fly" false-value="human"
                                        style="--va-switch-checker-background-color: #252723;"
                                    >
                                        <template #innerLabel>
                                            <div class="va-text-center">
                                                {{ organism }}
                                            </div>
                                        </template>
                                        <template #append>
                                            <va-icon
                                                name="search"
                                                color="secondary"
                                            />
                                        </template>
                                    </va-switch>
                                </template>
                            </va-input> -->
                        </div>
                    </div>
                </div>
                <div class="flex lg4 md4 sm12 xs12">
                    <div class="row align-center justify-space-between">
                        <div class="flex">
                            <router-link :to="{name:'human-new'}"><h4 style="color:#fffffa" class="va-h6">Human</h4></router-link>
                        </div>
                        <div class="flex">
                            <router-link :to="{name:'fly-new'}"><h4 style="color:#fffffa" class="va-h6">Fly</h4></router-link>
                        </div>
                        <div class="flex">
                            <va-icon color="#ffffff" name="shopping_bag"></va-icon>
                        </div>
                    </div>
                </div>
                <!-- <div class="flex">
                    <div class="row">
                        <div class="flex">

                        </div>
                        <div class="flex">
                            <va-button-dropdown>
                                <template #label>
                                    <va-icon name="shopping_bag" size="small" />
                                </template>
                            </va-button-dropdown>
                        </div>
                    </div>
                </div> -->
            </div>
        </va-affix>
    </div>
</template>
<script setup>
import { ref } from 'vue';


const geneid = ref('')
const organism = ref('fly')

const navLeft = [
]

const navRight = [

]


</script>
<style>
.navbar-container{
    max-height: 150px;
}

</style>