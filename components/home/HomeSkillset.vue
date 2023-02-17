<template>
    <div class="text-white relative z-10 py-14 md:py-32 px-4 md:px-16 xl:px-40 grid grid-cols-1 lg:grid-cols-2">
        <div>
            <h4 v-visible="animate.popInBottom" class=" text-5xl mb-4 font-aeonik-bold">{{data.title}}</h4>
            <p v-visible="animate.popInBottom" :initial="{ 'transition-delay': '.3s' }"
                class=" text-sm font-aeonik-light max-w-xs leading-relaxed">{{data.subtitle}}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:mt-0 ">
            <template v-for="(skill, index) in data.skills" :key="skill.icon">
                <div class=" w-full">
                    <div v-visible="animate.popInBottom" :initial="{ 'transition-delay': `.${index * 2}s` }">
                        <img class="w-20 h-20" :src="$urlFor(skill.icon).url()" alt="logo">
                        <h4 class="text-lg my-2">{{skill.title}}</h4>
                        <p class=" text-sm leading-relaxed font-aeonik-light">{{ skill.desc}}</p>
                    </div>

                </div>
                <hr v-if="(index + 1) % 2 === 0 && index < data.skills.length - 1"
                    class=" col-span-2 bg-white w-full hidden md:block   my-12" />
            </template>
        </div>
    </div>
</template>
<script setup>
import { vVisible } from "@/directives/vVisible"
const animate = onAnimate()
const sanity = useSanity()
const query = groq`*[_type == "skillset"][0]`
const { data, refresh } = await useAsyncData('skillset', () => sanity.fetch(query))
</script>