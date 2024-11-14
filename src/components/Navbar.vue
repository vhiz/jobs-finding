<script setup>
import { ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const isScroll = ref(false);
const route = useRoute();
const home = ref(false);
const links = [{ name: 'Home', link: '/' }, { name: 'Jobs', link: '/jobs' }, { name: 'Add Jobs', link: '/jobs/add' }]
const updateHomeStatus = () => {
    home.value = route.name === 'home';
};

onMounted(() => {
    updateHomeStatus();
    window.addEventListener('scroll', handleScroll);
});

watch(route, () => {
    updateHomeStatus();
});

const handleScroll = () => {
    isScroll.value = window.scrollY > 80;
};

</script>

<template>
    <div
        :class="['navbar', !home && 'bg-base-200 z-50', home && (isScroll ? 'bg-base-200 z-50' : 'bg-transparent'), 'fixed top-0']">
        <div class="flex-1 hidden md:block">
            <RouterLink to="/" class="btn btn-ghost text-xl">Jobs For Dev</RouterLink>
        </div>
        <div class="md:flex-none flex-1 flex justify-center">
            <ul class="menu menu-horizontal">
                <li v-for="(link) in links" :key="link.name">
                    <RouterLink activeClass="active" :to="link.link">{{ link.name }}
                    </RouterLink>
                </li>

            </ul>
        </div>
    </div>
</template>