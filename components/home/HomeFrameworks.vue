<template>
    <div :style="{ 'transform': `translateX(${transformValue}px)` }" ref="target" :data-t="transformValue"
        :class="`frame-wrapper w-full overflow-x-hidden  text-white border-grey-700 border grid grid-cols-1 md:grid-cols-4`">
        <div v-for=" item in data" :key="item.name"
            class=" border border-grey-700 flex  items-center justify-center py-8 flex-col">
            <img class=" w-12 h-12" :src="$urlFor(item.icon).url()" alt="framework">
            <h4 class=" text-slate-400 text-sm mt-2">{{ item.title }}</h4>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useElementVisibility, useScroll, useElementBounding } from '@vueuse/core'
import { filename } from 'pathe/utils';

const sanity = useSanity()
const query = groq`*[_type == "frameworks"][0].frameworks`
const { data, refresh } = await useAsyncData('frameworks', () => sanity.fetch(query))
const target = ref(null)
const initialTop = ref(null)
const targetIsVisible = useElementVisibility(target)
const { x, top, right, bottom, left, width, height } = useElementBounding(target)
const { y,directions } = useScroll(window,{behavior:'smooth'})
const transformValue = ref(0)

watchEffect(() => {

    if (targetIsVisible.value) {
        /* if(directions.bottom){
          return  transformValue.value=Math.min((transformValue.value + width.value*0.1),((width.value+width.value/2) -10))
        } */
        if (!initialTop.value) {
            initialTop.value = y.value
        }
        const diff = (y.value - initialTop.value) / 2
        x.value = diff
        const min = Math.min(Math.max(diff, -(width.value + (width.value/2))), (width.value + (width.value/2)- 10))
         Math.min(Math,width.value + (width.value/2))
        return transformValue.value = min
    }
    else {
        // initialTop.value = null
    }
})
</script>
<style >
.frame-wrapper {
    position: relative;
    left: -200px;
    transition: all .1s linear;
}
</style>