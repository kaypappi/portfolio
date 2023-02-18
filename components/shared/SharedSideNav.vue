<template>
    <nav class="fixed h-[100dvh] top-0 overflow-y-hidden left-0 right-0  bottom-0z-50 w-full bg-slate-900 flex">
        <Icon @click="toggleSideNav" name="uil:times" size="32" class=" cursor-pointer absolute right-4 top-4" />
        <ul  class="grow flex flex-col w-full gap-12  justify-center items-center  text-slate-500 font-aeonik-bold">
            <NuxtLink @click.native="toggleSideNav" to="/#about">ABOUT</NuxtLink>
            <NuxtLink @click.native="toggleSideNav" class="" to="/#works">WORKS</NuxtLink>
            <NuxtLink @click.native="toggleSideNav" to="/#experience">EXPERIENCE</NuxtLink>
            <NuxtLink :to="`${footer.cv}?dl=`" target="_blank">
                <button
                    class=" max-w-max px-8 py-3 rounded-full bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">Download
                    CV</button>
            </NuxtLink>
        </ul>
</nav>
</template>
<script setup>
import { useWindowSize } from '@vueuse/core';

const props = defineProps({
    toggleSideNav: Function
})
const sanity = useSanity()
const maxHeight=ref(500)
const query = groq`*[_type == "footer"][0]{
    ...,
    'cv':cv.asset->url
}`
const { data: footer, refresh } = await useAsyncData('footer', () => sanity.fetch(query))
/* watchEffect(()=>console.log(maxHeight.value))
onBeforeMount(()=>maxHeight.value=document.documentElement.clientHeight) */
</script>