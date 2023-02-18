<template>
  <div ref="band" class="bg-black">
    <div class="noisebg  sticky  top-0 z-0">
      <div class="layout relative">
        <shared-banner :opacity="calcOpacity" ref="bannerRef" />
      </div>
    </div>
    <div class="relative bg-black">
      <div class=" noisebg ">
        <div class=" layout">
          <SharedNav :opacity="calcOpacity" id="navRef" ref="navRef" class="z-40 " />
          
            <HomeExperience />
            <HomePhilosophy />
            <HomeSkillset />
            <HomeFrameworks />
            <HomeProjects class=" w-full text-white bg-black" />
            <HomeQuote class=" text-white w-full py-7 bg-[#0f0f0f] border-y border-grey-700 " />
            <div id="about" class=" sticky top-0  py-24 md:py-52 noisebg">
              <HomeAbout class=""/>
            </div>
         
          
          <SharedFooter class=" sticky top-0  z-10 "/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useElementBounding } from '@vueuse/core'
const navRef = ref(null)
const initialNavPosition = ref(null)

const { top } = useElementBounding(navRef)
const calcOpacity = computed(() => {
  if (top.value === 0) return 0
  if (!top.value || top.value < 0) return 1
  return (top.value) / initialNavPosition.value
})
onMounted(() => {
  if (!initialNavPosition.value) {
    initialNavPosition.value = top.value
  }
})
</script>

<style>

</style>