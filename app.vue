<template>
  <div ref="band" class="font-allrox bg-black fullH">
    <SeoKit />
    <OgImageStatic 
      component="CustomBanner"
    />
    <!-- <NuxtLoadingIndicator color="#f04f43" /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>

</script>
<style>
.noisebg{
  background-image: url('./assets/imgs/noisebg6.png');
  background-size: inherit;
}
.menu-open{
  overflow: hidden;
}
</style>
