<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import tracks from './tracks'
import {storeToRefs} from 'pinia'
import {userSession} from '../store'

</script>

<template>
  <NavBar/>
  <div class="layout gutter--md gutter--lg">
    <router-view />
  </div>

</template>

<style>
</style>
