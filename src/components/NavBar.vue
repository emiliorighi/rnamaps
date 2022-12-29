<template>
    <div>
        <va-affix :offset-top="0">
            <div class="row navbar-container secondary-background margin-spacer align-center justify-space-between">
                <div class="flex lg6 md6 sm12 xs12">
                    <div class="row align-center justify-space-between">
                        <div class="flex lg4 md4 sm4 xs4">
                            <router-link :to="{name:'home'}"><h4 style="color:#fffffa" class="va-h6">RNAmaps</h4></router-link>
                        </div>
                    </div>
                </div>
                <div class="flex lg4 md4 sm12 xs12">
                    <div class="row align-center justify-space-between">
                        <div class="flex">
                            <router-link :to="'/human'"><h4 style="color:#fffffa" class="va-h6">Human</h4></router-link>
                        </div>
                        <div class="flex">
                            <router-link :to="'/fly'"><h4 style="color:#fffffa" class="va-h6">Fly</h4></router-link>
                        </div>
                        <div class="flex">
                            <va-icon color="#ffffff" name="shopping_bag"></va-icon>
                        </div>
                    </div>
                </div>
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