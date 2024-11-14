<script setup>
import Listing from '@/components/Listing.vue'
import { RouterLink } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
const { isPending, isError, data } = useQuery({
    queryKey: ['jobs'],
    queryFn: () => fetch('/api/jobs').then(res => res.json()),
})

defineProps({
    limit: {
        type: Number,
    },
    showButton: {
        type: Boolean,
        default: false
    }

})
</script>

<template>
    <div class="my-7 p-4 bg-base-200">
        <h2 class="text-3xl text-center font-semibold text-primary">Browse Jobs</h2>
        <div class="w-full flex items-center flex-wrap justify-center lg:justify-normal gap-4 my-4">
            <div v-if="isPending" class="loading"></div>
            <div v-else-if="isError" class="text-center">Something went Wrong</div>
            <Listing v-else v-for="(job) in data.slice(0, limit)" :key="job.id" :job="job" />
        </div>
        <div v-if="showButton && !isError && !isPending" class="w-full items-center mt-4 justify-center flex">
            <RouterLink to="/jobs" class="btn btn-sm bg-black min-w-[50vw] hover:bg-black/65">View All</RouterLink>
        </div>
    </div>
</template>