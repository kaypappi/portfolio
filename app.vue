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
  background:
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 4px 4px;
  background-color: #000;
}
.menu-open{
  overflow: hidden;
}
</style>
