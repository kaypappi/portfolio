<template>
  <div ref="band" class="bg-black fullH">
    <div class="noisebg  sticky  top-0 z-0">
      <div class="layout relative">
        <shared-banner :opacity="calcOpacity" ref="bannerRef" />
      </div>
    </div>
    <div class="relative bg-black fullH">
      <div class=" noisebg fullH">
        <div class=" layout fullH max-w-full">
          <SharedNav :opacity="calcOpacity" :top="top" id="navRef" ref="navRef" class="z-40 " />
          <HomeExperience />
          <HomePhilosophy v-setnav="'light'" />
          <HomeSkillset />
          <div class=" w-full max-w-full overflow-hidden">
            <HomeFrameworks class=" overflow-hidden" />
          </div>
          <HomeProjects v-setnav="'light'" class=" w-full text-white bg-black" />
          <HomeQuote class=" text-white w-full py-7 bg-[#0f0f0f] border-y border-grey-700 " />
          <div id="about" class=" sticky top-0  py-24 md:py-52 noisebg">
            <HomeAbout class="" />
          </div>


          <SharedFooter class=" sticky top-0  z-10 " />
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { useElementBounding } from '@vueuse/core'
import { vSetnav } from '~~/directives/setNavtheme';
const navRef = ref(null)
const bannerRef=ref(null)
const initialNavPosition = ref(null)

const { top } = useElementBounding(navRef)
const {bottom}=useElementBounding(bannerRef)
const calcOpacity = computed(() => {
  if (top.value === 0) return 0
  if (!top.value || top.value < 0) return 1
  const result=(top.value) / bottom.value
  return result
})


</script>

<style></style>