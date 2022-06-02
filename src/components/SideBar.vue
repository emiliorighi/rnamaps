<template>
    <va-sidebar gradient color="secondary" textColor="white">
      <va-sidebar-item
        v-for="item in items"
        :key="item.to"
        :active="item.active"
      >
        <va-sidebar-item-content>
            <img width="24" :src="item.path"/>
          <va-sidebar-item-title style="height: 24px;">
            {{ item.title }}
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </va-sidebar>
</template>

<script setup>
    const items = [
        // { title: 'Home', path: 'dashboard' },
        { title: 'Fly', path: 'src/assets/icons8-fly-48.png'},
        { title: 'Human', path: 'src/assets/icons8-human-48.png'},
      ]
</script>

