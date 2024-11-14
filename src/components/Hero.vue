<script setup>
import { defineProps } from 'vue';
defineProps({
    title: {
        type: String,
        default: 'Get Your Financial Freedom Today'
    },
    subtitle: {
        type: String,
        default: 'They provide pleasure with desire and in. He sought to escape, as if he were to be accepted as an exercise. In the softening of them, or of repudiating them, and from that only.'
    },
    height: {
        type: String,
        default: 'full',
    }
})
</script>

<template>
    <div :class="['hero', height === 'full' ? 'min-h-screen' : 'min-h-[50vh]']"
        style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">{{ title }}</h1>
                <p class="mb-5">
                    {{ subtitle }}
                </p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
</template>