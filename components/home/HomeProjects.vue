<template>
    <div id="works" class="px-4 md:px-16 xl:px-40 py-40">
        <masonry-wall :items="masonryItems" :ssr-columns="2" :column-width="500"  :gap="20" rtl>
            <template #default="{ item, index }">
                <div v-if="index===0" class=" py-4">
                    <h4 class=" text-sm">MY PROJECTS</h4> 
                    <h2 class=" text-5xl !leading-tight font-aeonik-bold">Work that I've done over the years</h2>
                </div>
                <div v-else-if="index >= masonryItems.length-1" class=" w-full flex justify-center my-28">
                    <button class=" px-8 py-3  rounded-full bg-transparent ring ring-indigo-300 uppercase text-white hover:bg-indigo-300  hover:text-white transition-all ">View All Projects</button>
                </div>
                <div v-else>
                    <SharedProjectCard v-visible="animate.popInBottom" :initial="{ 'transition-delay': `.${index * 3}s` }" :project="item"/>
                </div>
                
            </template>
        </masonry-wall>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { vVisible } from "@/directives/vVisible"
const animate = onAnimate()
const sanity = useSanity()
const query = groq`*[_type == "projects"][0].projects[0...5]`
const { data, refresh } = await useAsyncData('projects', () => sanity.fetch(query))
const items = ref(['A', 'B', 'C'])
const masonryItems=computed(()=>[' ',...data.value,' '])
</script>