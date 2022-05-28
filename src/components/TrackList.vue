<template>
    <va-card>
        <va-card-content>
        <va-list>
            <va-list-label>
                Human:
            </va-list-label>
            <va-list-item
                v-for="track in Session.tracks"
                :key="track"
            >
            <va-list-item-section>
                <va-list-item-label>
                {{ track }}
                </va-list-item-label>
            </va-list-item-section>
            <va-list-item-section icon>
                <va-icon
                    name="delete"
                    color="danger"
                    @click="Session.tracks.splice(Session.tracks.indexOf(track),1)"
                />
            </va-list-item-section>
            </va-list-item>
        </va-list>
        </va-card-content>
        <va-card-actions align="between">
          <va-button>Load tracks</va-button>
          <va-button>Remove tracks</va-button>
        </va-card-actions>
    </va-card>
</template>

<script setup>

const props = defineProps({
    title: String,
})
</script>