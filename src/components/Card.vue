<script setup>

defineProps({
    bg: {
        type: String,
        default: 'bg-base-200'
    }
})
</script>

<template>
    <div :class="['card rounded-md', bg, 'flex-1 min-w-72 shadow-xl']">
        <slot></slot>
    </div>
</template>