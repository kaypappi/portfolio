<template>
    <div>
        <SharedNav :opacity="0" :top="0" id="navRef" ref="navRef" class="z-40 " />
        <div v-setnav="'light'" class="px-4 md:px-16 xl:px-40 py-40 text-white">
        <masonry-wall :items="masonryItems" :ssr-columns="2" :column-width="columnWidth" :gap="40" rtl>
            <template #default="{ item, index }">
                <div v-if="index === 0" class=" py-4">
                    <h4 class=" text-sm text-slate-400">MY PROJECTS</h4>
                    <h2 class=" text-5xl !leading-tight font-aeonik-bold">Work that I've done over the years</h2>
                </div>
                <div v-else-if="index >= masonryItems.length - 1" class=" w-full flex justify-center my-28">
                    <NuxtLink to="/">
                        <button
                            class=" px-8 py-3  rounded-full bg-transparent ring ring-indigo-300 uppercase text-white hover:bg-indigo-300  hover:text-white transition-all ">Go Back</button>
                    </NuxtLink>
                </div>
                <div v-else>
                    <SharedProjectCard v-visible="animate.popInBottom" :initial="{ 'transition-delay': `.${index * 3}s` }"
                        :project="item" />
                </div>

            </template>
        </masonry-wall>
    </div>
    </div>
</template>
<script setup>
import { vSetnav } from '~~/directives/setNavtheme';
import { vVisible } from "@/directives/vVisible"
import { useWindowSize } from '@vueuse/core'
const animate = onAnimate()
const sanity = useSanity()
const query = groq`*[_type == "projects"][0].projects`
const { data, refresh } = await useAsyncData('allprojects', () => sanity.fetch(query))
const { width, height } = useWindowSize()
const columnWidth=computed(()=>{
    let maxWidth=350
    if(width.value>800) maxWidth=width.value/3
    return maxWidth
})
const masonryItems = computed(() => [' ', ...data.value, ' '])
</script>