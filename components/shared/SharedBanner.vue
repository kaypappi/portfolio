<template>
  <div :style="{ opacity }" class=" stick  top-0 z-0 text-white py-20 md:py-32 px-4 md:px-16 xl:px-40 text-left ">
    <h1 v-visible="animate.popInBottom"
      class=" mx-auto banner-text font-aeonik-bold text-5xl md:text-7xl max-w-5xl !leading-normal font-extrabold text-left">
      {{data.banner_title}}</h1>
    <div v-visible="animate.popInBottom"
      class=" hidden md:flex absolute -bottom-14 right-20 bg-white rounded-full w-56 h-56 items-center justify-center">
      <img class=" w-54 mr-6 mb-28" :src="$urlFor(data.banner_image).url()" :alt="data.banner_title">
    </div>
  </div>
</template>

<script setup>
import { vVisible } from "@/directives/vVisible"
const animate = onAnimate()
const sanity= useSanity()
const query = groq`*[_type == "banner"][0]`
const { data, refresh } = await useAsyncData('banner',()=> sanity.fetch(query))
defineProps({
  opacity: {
    type:Number,
    default:1
  },
})

</script>

<style>
.container {
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.container button {
  cursor: pointer;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: green;
}
</style>