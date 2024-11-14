<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


defineProps({
    job: {
        type: Object
    }
})

const showFullDesc = ref(false)

function truncateDescription() {
    showFullDesc.value = !showFullDesc.value
}
</script>

<template>
    <div class="flex-1 rounded-md min-w-72 max-w-96 p-4 shadow-2xl hover:scale-105 cursor-pointer transition-all">
        <span class="text-sm opacity-70 font-semibold">{{ job.type }}</span>
        <h3 class="text-lg font-bold">{{ job.title }}</h3>
        <div class="my-4">
            <p :class="['text-sm transition-all', !showFullDesc ? 'line-clamp-3' : '']">{{ job.description }}</p>
            <span @click="truncateDescription" class="text-sm link link-hover link-primary">
                {{ showFullDesc ? 'less' : 'show more' }}
            </span>
        </div>
        <span class="text-sm text-primary/70">{{ job.salary }}</span>
        <div class="mt-4 flex items-center gap-2">
            <i class="pi pi-map-marker text-xs font-semibold text-red-400"></i>
            <span class="text-sm font-semibold">{{ job.location }}</span>
        </div>
        <RouterLink :to="`/jobs/` + job.id" class="btn mt-2 btn-sm w-full btn-accent">Read More</RouterLink>
    </div>
</template>