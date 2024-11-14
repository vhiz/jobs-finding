<script setup lang="ts">
import Card from '@/components/Card.vue';
import Hero from '@/components/Hero.vue';
import JobListings from '@/components/JobListings.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <Hero />
    <section class="p-4 flex items-center flex-wrap justify-around gap-4">
        <Card>
            <div className="card-body p-4">
                <h2 className="font-semibold">For Developers</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                    <RouterLink to="/jobs" className="btn btn-sm btn-accent rounded-sm">Browse jobs</RouterLink>
                </div>
            </div>
        </Card>
        <Card bg="bg-base-300">
            <div className="card-body p-4">
                <h2 className="font-bold">For Employers</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                    <RouterLink to="/jobs/add" className="btn btn-sm btn-primary rounded-sm">Add a job</RouterLink>
                </div>
            </div>
        </Card>
    </section>
    <JobListings :limit="4" :show-button="true" />
</template>