<script setup>
import { useQuery } from '@tanstack/vue-query';
import { useRoute } from 'vue-router';


const route = useRoute()
const id = route.params.id
const { isPending, isError, data } = useQuery({
    queryKey: ['jobs', id],
    queryFn: () => fetch(`/api/jobs/${id}`).then(res => res.json()),
})

</script>
<template>
    <div v-if="isError" class="h-[calc(100vh-4rem)] flex items-center justify-center flex-col">
        <h2 class="font-bold text-lg">Error</h2>
        <p>Something went wrong while fetching the job details. Please try again later.</p>
    </div>
    <div v-else-if="isPending" class="h-[calc(100vh-4rem)] flex items-center justify-center flex-col">
        <div class="loading"></div>
    </div>
    <div v-else class="flex flex-col md:flex-row mt-[5rem] p-4 gap-4">
        <div class="flex flex-col flex-[2] gap-3">
            <div class="w-full shadow-xl p-3 rounded-md flex flex-col gap-3">
                <span class="text-sm opacity-75 font-semibold">{{ data.type }}</span>
                <h2 class="text-2xl font-bold">{{ data.title }}</h2>
                <span class="text-sm opacity-70 font-semibold">{{ data.location }}</span>
            </div>
            <div class="w-full shadow-xl p-3 flex flex-col gap-2">
                <h4 class="text-sm font-bold text-primary">Job Description</h4>
                <p class="text-sm mt-1">{{ data.description }}</p>
                <h4 class="text-sm font-bold text-primary">Salary</h4>
                <p class="text-sm opacity-70">{{ data.salary }}</p>
            </div>
        </div>
        <div class="flex-1 flex flex-col gap-3">
            <div class="w-full p-4 shadow-xl">
                <h2 class="font-bold text-lg">Company Info</h2>
                <h3 class="mt-3 text-2xl">{{ data.company.name }}</h3>
                <p class="mt-1 text-sm text-left opacity-80">{{ data.company.description }}</p>
                <div class="mt-3 flex flex-col gap-2">
                    <h2 class="text-lg">Contact Email:</h2>
                    <span class="badge badge-neutral p-3 rounded-none w-full">{{ data.company.contactEmail }}</span>
                </div>
                <div class="mt-3 flex flex-col gap-2">
                    <h2 class="text-lg">Contact Phone:</h2>
                    <span class="badge badge-neutral p-3 rounded-none w-full">{{ data.company.contactPhone }}</span>
                </div>

            </div>

            <div class="shadow-xl p-3 flex flex-col gap-3">
                <h2 class="font-bold">Manage Job</h2>
                <button class="btn w-full btn-sm btn-info">Edit Job</button>
                <button class="btn w-full btn-sm btn-error">Delete Job</button>
            </div>
        </div>
    </div>
</template>