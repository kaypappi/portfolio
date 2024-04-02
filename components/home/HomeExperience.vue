<template>
    <div
    id="experience"
        class="experience py-32 px-4 md:px-16 xl:px-40 relative z-10  text-white grid gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-2">
        <div>
            <h4 v-visible="animate.popInBottom" class=" text-sm text-slate-400">EXPERIENCE</h4>
            <h1 v-visible="animate.popInBottom" :initial="{ 'transition-delay': '.3s' }"
                class="text-5xl my-4 font-allrox font-bold max-w-md">{{ data.experience_title }}</h1>
            <h6 v-visible="animate.popInBottom" :initial="{ 'transition-delay': '.6s' }"
                class=" text-xs text-slate-400 font-allrox font-light">{{ data.experience_subtitle }}</h6>
        </div>
        <div>
            <SharedExperience v-visible="animate.popInBottom" :initial="{ 'transition-delay': `.${index * 2}s` }"
                v-for="(experience, index) in data.experiences" :is-last="index >= data.experiences.length - 1"
                :key="experience.company" :experience="experience" :class="['mt-6 md:mt-10']" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { vVisible } from "@/directives/vVisible"
const animate = onAnimate()
const sanity = useSanity()
const query = groq`*[_type == "experience"][0]`
const { data, refresh } = await useAsyncData('experience', () => sanity.fetch(query))
</script>
<style>

</style>