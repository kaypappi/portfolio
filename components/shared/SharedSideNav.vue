<template>
    <nav class=" fixed top-0 left-0 right-0 bottom-0 z-50 w-screen h-screen bg-slate-900">
        <Icon @click="toggleSideNav" name="uil:times" size="32" class=" cursor-pointer absolute right-4 top-4" />
        <ul class=" flex flex-col h-full items-center justify-center text-slate-500 font-aeonik-bold">
            <NuxtLink to="/">ABOUT</NuxtLink>
            <NuxtLink class=" py-12" to="/">WORKS</NuxtLink>
            <NuxtLink to="/">EXPERIENCE</NuxtLink>
        </ul>
    </nav>
</template>
<script setup>

const props= defineProps({
    toggleSideNav:Function
})
</script>