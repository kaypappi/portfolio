<template>
    <div class=" w-full">
        <div ref="shw" class="grid gap-4 grid-cols-12 items-center shw w-full">
            <img class="col-span-3 md:col-span-2" :src="$urlFor(experience.logo).url()" alt="logo">
            <div class=" col-span-9 md:col-span-7 ml-2 mr-4 md:ml-4 md:mr-12  ">
                <h4 class=" text-lg"> {{ experience.role }}</h4>
                <div class=" col-span-3  md:hidden">
                    <h5 class=" text-sm ">{{ experience.company }}</h5>
                    <h6 class=" text-xs text-slate-400 ">{{ experience.start }} - {{ experience.end }}</h6>
                </div>
            </div>
            <div class=" col-span-3 hidden md:block">
                <h5 class=" text-sm uppercase">{{ experience.company }}</h5>
                <h6 class="text-xs text-slate-400 font-aeonik-light ">{{ experience.start }} - {{ experience.end }}</h6>
            </div>
        </div>
        <hr v-if="!isLast" class=" border-grey-700 mt-6 md:mt-10"/>
    </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { filename } from 'pathe/utils';
const props = defineProps({
    experience: Object,
    isLast:Boolean
})
</script>