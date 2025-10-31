<template>
  <div ref="band" class="bg-black fullH">
    <div class="noisebg  sticky  top-0 z-0">
      <div class="layout relative">
        <lazy-shared-banner :opacity="calcOpacity()" ref="bannerRef" />
      </div>
    </div>
    <div class="relative bg-black fullH">
      <div class=" noisebg fullH">
        <div class=" layout fullH max-w-full">
          <LazySharedNav :opacity="calcOpacity()" :top="top" id="navRef" ref="navRef" class="z-40 " />
          <LazyHomeExperience />
          <LazyHomePhilosophy v-setnav="'light'" />
          <LazyHomeSkillset />
          <div class=" w-full max-w-full overflow-hidden">
            <LazyHomeFrameworks class=" overflow-hidden" />
          </div>
          <LazyHomeProjects id="projects" v-setnav="'light'" class=" w-full text-white bg-black" />
          <LazyHomeQuote class=" text-white w-full py-7 bg-[#0f0f0f] border-y border-grey-700 " />
          <div id="about" class=" sticky top-0  py-24 md:py-52 noisebg">
            <LazyHomeAbout class="" />
          </div>


          <LazySharedFooter class=" sticky top-0  z-10 " />
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { useElementBounding, useTemplateRefsList, } from '@vueuse/core'
import { vSetnav } from '~~/directives/setNavtheme';
const navRef = ref(null)
const bannerRef=ref(null)
const initialNavPosition = ref(null)

const { top } = useElementBounding(navRef)
const { bottom } = useElementBounding(bannerRef)


const calcOpacity =() => {
  if (top.value === 0) return 0
  if (!top.value || top.value < 0) return 1
  if (!bottom.value || bottom.value === 0) return 1
  const result = (top.value) / bottom.value
  return Math.min(Math.max(result, 0), 1) // Clamp between 0 and 1
}

</script>

<style></style>
