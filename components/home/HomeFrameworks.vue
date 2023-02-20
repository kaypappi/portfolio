<template>
    <div :style="{ 'transform': `translateX(${transformValue}%)` }" ref="target" :data-t="transformValue"
        :class="`frame-wrapper w-full transition-transform duration-[0] ease-in-out overflow-x-hidden  text-white border-grey-700 border grid grid-cols-1 md:grid-cols-4`">
        <div v-for=" item in data" :key="item.name"
            class=" border border-grey-700 flex  items-center justify-center py-8 flex-col">
            <img class=" w-12 h-12" :src="$urlFor(item.icon).url()" alt="framework">
            <h4 class=" text-slate-400 text-sm mt-2">{{ item.title }}</h4>
        </div>
    </div>
</template>
<script setup>
import { ref} from 'vue'
import { useScroll, useElementBounding} from '@vueuse/core'


const sanity = useSanity()
const query = groq`*[_type == "frameworks"][0].frameworks`
const { data, refresh } = await useAsyncData('frameworks', () => sanity.fetch(query))
const target = ref(null)
const { top,width} = useElementBounding(target)
const transformValue = ref(0)
const handleScroll = () => {
    const ratio=(width.value/y.value * 100)
    const min = (y.value - top.value) * (100 / y.value) - (ratio+20)
    transformValue.value = min
}
const {y} = useScroll(window, { behavior: 'smooth', onScroll: handleScroll })
</script>
<style >
.frame-wrapper {
    position: relative;
    left: -200px;
    transition: all .1s linear;
}
</style>