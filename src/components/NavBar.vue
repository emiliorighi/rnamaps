<template>
    <va-navbar text-color="white" color="#872674">
        <template #left>
            <va-navbar-item>RNAmaps</va-navbar-item>
            <va-navbar-item 
                v-for="item in items"
                :key="item.to"
                :active="item.active"
            >
                <img width="50" :src="item.path"/>
            </va-navbar-item>
        </template>
        <template #right>
            <va-navbar-item><va-icon name="shopping_bag"/></va-navbar-item>
        </template>
    </va-navbar>
</template>
<script setup>
    const items = [
        // { title: 'Home', path: 'dashboard' },
        { title: 'Fly', path: 'src/assets/fly_icon.svg'},
        { title: 'Human', path: 'src/assets/women_icon.svg'},
      ]
</script>