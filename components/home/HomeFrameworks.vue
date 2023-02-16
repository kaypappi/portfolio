<template>
    <div :style="{ 'transform': `translateX(${transformValue}px)` }" ref="target" :data-t="transformValue"
        :class="`frame-wrapper  text-white border-grey-700 border grid grid-cols-1 md:grid-cols-4`">
        <div v-for=" item in frameworks" :key="item.name"
            class=" border border-grey-700 flex  items-center justify-center py-8 flex-col">
            <img class=" w-12 h-12" :src="images[item.logo]" alt="framework">
            <h4>{{ item.name }}</h4>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useElementVisibility, useWindowScroll, useElementBounding } from '@vueuse/core'
import { filename } from 'pathe/utils';


const target = ref(null)
const initialTop = ref(null)
const targetIsVisible = useElementVisibility(target)
const { x, top, right, bottom, left, width, height } = useElementBounding(target)
const { y } = useWindowScroll()
const transformValue = ref(0)

watchEffect(() => {

    if (targetIsVisible.value) {
        if (!initialTop.value) {
            initialTop.value = y.value
        }
        const diff = (y.value - initialTop.value) / 2
        x.value = diff
        const min = Math.min(Math.max(diff, -(width.value + (width.value/2))), width.value + (width.value/2))
         Math.min(Math,width.value + (width.value/2))
        return transformValue.value = min
    }
    else {
        // initialTop.value = null
    }
})


const glob = import.meta.glob('~/assets/imgs/*.svg', { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);



const frameworks = ref([{
    name: "Javascript",
    logo: "js",
}, {
    name: "Typescript",
    logo: "ts",
}, {
    name: "React",
    logo: "react",
}, {
    name: "Vue",
    logo: "vue",
},])
</script>
<style >
.frame-wrapper {
    position: relative;
    left: -200px;
    transition: all 0s linear;
}
</style>