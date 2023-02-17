<template>
    <div class=" w-full">
        <div ref="shw" class="grid grid-cols-12 items-center shw w-full">
            <img class="col-span-1" :src="$urlFor(experience.logo).url()" alt="logo">
            <h4 class=" col-span-10 md:col-span-7 ml-2 mr-4 md:ml-4 md:mr-12 text-xl ">
                {{ experience.role }}
                <div class=" col-span-3  md:hidden">
                    <h5 class=" text-base ">{{ experience.company }}</h5>
                    <h6 class="text-xs ">{{ experience.start }} - {{ experience.end }}</h6>
                </div>
            </h4>
            <div class=" col-span-3 hidden md:block">
                <h5 class=" text-base uppercase">{{ experience.company }}</h5>
                <h6 class="text-xs font-aeonik-light ">{{ experience.start }} - {{ experience.end }}</h6>
            </div>
        </div>
        <hr v-if="!isLast" class=" border-grey-700 mt-10"/>
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