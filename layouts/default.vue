<template>
  <transition name="fade" mode="out-in">
      <div v-if="loading" class="page-loader  flex items-center relative justify-center ">
        <svg class=" absolute top-[50%] left-[50%]" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
          <!-- <circle cx="100" cy="100" r="80" pathLength="1"></circle> -->
          <path id="path1" stroke-linejoin="round" fill="none" stroke-linecap="round"
            d="m97.99999,26.00002l59.75599,38.75l0,77.49999l-59.75599,38.75l-59.75599,-38.75l0,-77.49999l59.75599,-38.75z"
            stroke-width="5" pathLength="1" />

        </svg>
        <img class=" loader w-10 h-10 opacity-0 -ml-24 hover:rotate-180 hover:mb-0 hover:mt-2 transition-all"
          src="../assets/imgs/winkbit.png" alt="logo" width="40" height="40" />
      </div>



    <div v-else class="min-h-screen w-screen bg-black relative">
      <NuxtLoadingIndicator color="#8a4af3" :height="5" />
      <transition name="slide">
            <SharedSideNav v-if="showSideNav" :toggleSideNav="toggleSideNav" />
        </transition>
      <ToastsWrapper/>
      <slot></slot>
      <SmallFooter/>
    </div>
</transition>
</template>
<script setup>
import { ref } from 'vue'
const showSideNav = useSideNav()
const toggleSideNav = () => {
    showSideNav.value = !showSideNav.value
}

const loading = ref(true)

onMounted(() => {
  // Simple loading animation - show for 2 seconds
  setTimeout(() => {
    loading.value = false
  }, 2000)
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
  stroke: #8a4af3;
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

.slide-enter-active {
    transition: all 0.5s ease-out;

}

.slide-leave-active {

    transition: all 0.5s ease-out;
}

.slide-enter-from {
    transform: translateX(500px);
}

.slide-leave-to {
    transform: translateX(500px);
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
