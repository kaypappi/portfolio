<template>
    <div class="text-white relative z-10 py-14 md:py-32 px-4 md:px-16 xl:px-40 grid grid-cols-1 lg:grid-cols-2">
        <div>
            <h4 v-visible="animate.popInBottom" class=" text-5xl mb-4 font-aeonik-bold">Skillset</h4>
            <p v-visible="animate.popInBottom" :initial="{ 'transition-delay': '.3s' }"
                class=" text-sm font-aeonik-light max-w-xs leading-relaxed">With over 4+ years of professional
                experience in
                software engineering, I am the perfect person to hire
                when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any
                challenge.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:mt-0 ">
            <template v-for="(skill, index) in skills" :key="skill.icon">
                <div class=" w-full">
                    <div v-visible="animate.popInBottom" :initial="{ 'transition-delay': `.${index * 2}s` }">
                        <nuxt-icon :key="skill.icon" :icon="skill.icon" class=" w-14 h-14 " />
                        <h4 class="text-lg my-2">Problem Solving</h4>
                        <p class=" text-sm leading-relaxed font-aeonik-light">I like to think of problem solving outside
                            the
                            bounds of coding;
                            Learning the techniques for
                            solving problems is more valuable than learning tools, languages and frameworks.</p>
                    </div>

                </div>
                <hr v-if="(index + 1) % 2 === 0 && index < skills.length - 1"
                    class=" col-span-2 bg-white w-full hidden md:block   my-12" />
            </template>
        </div>
    </div>
</template>
<script setup>
import { vVisible } from "@/directives/vVisible"
const animate = onAnimate()
const skills = ref([
    {
        title: "Problem solving",
        desc: `I like to think of problem solving outside the bounds of coding;
         Learning the techniques for solving problems is more valuable than learning tools, languages and frameworks.`,
        icon: "menu"
    },
    {
        title: "Framework Agnostic",
        desc: `I like to think of problem solving outside the bounds of coding;
         Learning the techniques for solving problems is more valuable than learning tools, languages and frameworks.`,
        icon: "cubes"
    },
    {
        title: "Visual Design & Animation",
        desc: `I like to think of problem solving outside the bounds of coding;
         Learning the techniques for solving problems is more valuable than learning tools, languages and frameworks.`,
        icon: "paint"
    },
    {
        title: "Visual Design & Animation",
        desc: `I like to think of problem solving outside the bounds of coding;
         Learning the techniques for solving problems is more valuable than learning tools, languages and frameworks.`,
        icon: "gauge"
    },
])
</script>