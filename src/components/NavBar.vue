<template>
    <va-navbar text-color="white" color="#872674">
        <template #left>
            <va-navbar-item>RNAmaps</va-navbar-item>
            <va-navbar-item 
                v-for="item in items"
                :key="item.to"
                :active="item.active"
            >
                <va-button :href="item.route" color="#872674"><va-image contain style="width:50px" :src="item.path"/></va-button>
            </va-navbar-item>
        </template>
        <template #right>
            <va-navbar-item>
                <va-badge color="info" overlap :text="Session.tracks.length">
                    <va-icon name="shopping_bag"/>
                </va-badge>
            </va-navbar-item>
        </template>
    </va-navbar>
</template>
<script setup>
import {session} from '../stores/session'

const Session = session()
    const items = [
        // { title: 'Home', path: 'dashboard' },
        { title: 'Fly', path: 'src/assets/fly_icon.svg', route:'fly'},
        { title: 'Human', path: 'src/assets/women_icon2.svg', route:'human'},
      ]
</script>