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
  <div class="layout gutter--md">
    <router-view />
  </div>

</template>

<style>
.margin-spacer{
  margin:15px 0 15px 0!important;
}
</style>
