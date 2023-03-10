<template>
  <div class="w-full h-full bg-indigo-300 flex text-indigo-900">
    <div class=" w-1/4 h-full flex flex-col relative items-center justify-center bg-indigo-900">
      <div :style="{transform:'translateX(50%)'}" class="avatar-wrapper w-72 h-72 translate-x-1/2 shadow-2xl  rounded-full bg-white flex items-end justify-center">
        <img class=" w-64 h-auto ml-6" src="../../assets/imgs/winkbit.png" alt="footer image">
      </div>
    </div>
    <div :style="{transform:'translateX(25%)'}" class=" w-3/4 h-full justify-center flex flex-col  translate-x-1/4">
      <h1 class=" text-6xl mb-4">Wesley Ukadike</h1>
      <h3 class=" text-3xl">Frontend Specialist</h3>
    </div>
  </div>
</template>


<script setup >
const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  backgroundColor: String,
});
</script>

<style scoped></style>
