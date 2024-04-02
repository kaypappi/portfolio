<template>
    <nav class="fixed fullH top-0 overflow-y-hidden left-0 right-0  bottom-0 z-[200] w-full bg-slate-900 flex">
        <Icon @click="toggleSideNav" name="uil:times" size="32" class=" cursor-pointer text-white absolute right-4 top-4" />
        <ul class="grow flex flex-col w-full gap-12  justify-center items-center  text-slate-500 font-allrox">
            <NuxtLink @click.native="toggleSideNav" to="/#about">ABOUT</NuxtLink>
            <NuxtLink @click.native="toggleSideNav" class="" to="/#works">WORKS</NuxtLink>
            <NuxtLink @click.native="toggleSideNav" to="/#experience">EXPERIENCE</NuxtLink>
            <NuxtLink :to="cv" target="_blank">
                <button
                    class=" max-w-max px-8 py-3 rounded-full bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">Download
                    CV</button>
            </NuxtLink>
        </ul>
    </nav>
</template>
<script setup>
import { useAsyncState, useWindowSize } from '@vueuse/core';

const props = defineProps({
    toggleSideNav: Function
})
const sanity = useSanity()
const cv=useCv()
const query = groq`*[_type == "footer"][0].cv.asset->url`
const { state: footer, refresh,execute } = useAsyncState(() => sanity.fetch(query), null, { immediate: false })

onBeforeMount(async()=>{
    if(!cv.value){
        await execute()
        console.log(footer.value)
        cv.value=`${footer.value}?dl=`
    }
})
</script>