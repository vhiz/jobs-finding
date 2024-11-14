<script setup></script>

<template>
    <div class="h-screen flex flex-col items-center justify-center">
        <i class="pi pi-exclamation-triangle text-6xl text-error"></i>
        <h1 class="mt-4 text-2xl font-bold">Page Not Found</h1>
        <p class="mt-2 text-lg">Sorry, the page you are looking for does not exist.</p>
        <RouterLink to="/" class="mt-4 btn btn-primary">Go to Home</RouterLink>
    </div>
</template>