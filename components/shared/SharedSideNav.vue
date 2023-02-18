<template>
    <nav :style="{height:'100svh'}"  class=" fixed top-0  left-0 right-0 bottom-0 z-50 w-full bg-slate-900">
        <Icon @click="toggleSideNav" name="uil:times" size="32" class=" cursor-pointer absolute right-4 top-4" />
        <ul  class=" h-full flex flex-col w-full  justify-center items-center  text-slate-500 font-aeonik-bold">
            <NuxtLink @click.native="toggleSideNav" to="/#about">ABOUT</NuxtLink>
            <NuxtLink @click.native="toggleSideNav" class=" py-12" to="/#works">WORKS</NuxtLink>
            <NuxtLink @click.native="toggleSideNav" to="/#experience">EXPERIENCE</NuxtLink>
        </ul>
    </nav>
</template>
<script setup>
const props= defineProps({
    toggleSideNav:Function
})
</script>