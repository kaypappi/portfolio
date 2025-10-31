<template>
    <div id="works" class="px-4 md:px-16 xl:px-40 py-40">
        <masonry-wall :items="masonryItems" :ssr-columns="2" :column-width="columnWidth" :gap="40" rtl>
            <template #default="{ item, index }">
                <div v-if="index === 0" class=" py-4">
                    <h4 class=" text-sm text-slate-400">MY PROJECTS</h4>
                    <h2 class=" text-5xl !leading-tight font-allrox font-bold">Work I've done over the years</h2>
                </div>
                <div v-else-if="index >= masonryItems.length - 1" class=" w-full flex justify-center my-28">
                    <NuxtLink to="/projects">
                        <button
                            class=" px-8 py-3  rounded-full bg-transparent ring ring-indigo-300 uppercase text-white hover:bg-indigo-300  hover:text-white transition-all ">View
                            All Projects</button>
                    </NuxtLink>
                </div>
                <div v-else>
                    <SharedProjectCard v-visible.always="animate.popInBottom"
                        :project="item" />
                </div>

            </template>
        </masonry-wall>
    </div>
</template>

<script setup>

import { vVisible } from "@/directives/vVisible"
import { useWindowSize } from '@vueuse/core'
const animate = onAnimate()
const sanity = useSanity()
const query = groq`*[_type == "projects"][0].projects[0...5]`
const { data, refresh } = useLazyAsyncData('projects', () => sanity.fetch(query))
const { width, height } = useWindowSize()
const columnWidth=computed(()=>{
    let maxWidth=350
    if(width.value>800) maxWidth=width.value/3
    return maxWidth
})
const masonryItems = computed(() => [' ', ...(data.value || []), ' '])
</script>
