<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import tracks from './tracks'


</script>

<template>
  <NavBar/>
  <div class="margin-spacer">
    <router-view v-slot="{ Component, route }">
        <Transition name="fade">
          <component :is="Component" :key="route.path" />
        </Transition>
    </router-view>
  </div>

</template>

<style>
.margin-spacer{
  padding:15px;
}
body{
  font-family: 'Ubuntu', sans-serif;
  background-color: var(--va-secondary)!important;
  color: var(--va-primary);
}

.fade-enter-active{
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.secondary-background{
  background-color: var(--va-secondary);
}
</style>
