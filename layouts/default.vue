<template>
  <transition name="fade" mode="out-in">
      <div v-if="loading" class="page-loader  flex items-center relative justify-center ">
        <svg class=" absolute top-[50%] left-[50%]" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <!-- <circle cx="100" cy="100" r="80" pathLength="1"></circle> -->
          <path id="path1" stroke-linejoin="round" fill="none" stroke-linecap="round"
            d="m97.99999,26.00002l59.75599,38.75l0,77.49999l-59.75599,38.75l-59.75599,-38.75l0,-77.49999l59.75599,-38.75z"
            stroke-width="5" pathLength="1" />

        </svg>
        <img class=" loader w-16 mb-2 opacity-0 -ml-24 hover:rotate-180 hover:mb-0 hover:mt-2 transition-all"
          src="../assets/imgs/winkbit.png" alt="logo" />
      </div>



    <div v-else class=" min-h-screen ">
      <slot></slot>
    </div>
</transition>
</template>
<script setup>
import { ref } from 'vue'
import { timeline, animate } from "motion"
import { useWindowSize } from '@vueuse/core';
const {height}= useWindowSize()
const draw = (progress) => ({
  // This property makes the line "draw" in when animated
  strokeDashoffset: 1 - progress,

  // Each line will be hidden until it starts drawing
  // to fix a bug in Safari where the line can be
  // partially visible even when progress is at 0
  visibility: "visible",
})


const loading = ref(true)


onMounted(() => {
  timeline([
    ["#path1", draw(1), { duration: 0.8, delay: 1 }],
    [".loader", animate('.loader', { opacity: [0, 1, 1, 0] }, { duration: 2, delay: 2 })],
  ])
  setTimeout(() => {
    loading.value = false
  }, 4000)
})

</script>
<style >
.layout {
  background-color: rgba(0, 0, 0, 0.3);
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

.page-loader{
  min-height: 100vh;
  background: black;
}

.page-loader circle,
.page-loader path {
  fill: transparent;
  stroke: #57EB64;
  stroke-width: 6px;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.page-loader circle {
  transform-origin: 100px 100px;
  transform: rotate(-90deg);
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
