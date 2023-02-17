<template>
    <div class=" w-full grid grid-cols-1 md:grid-cols-2 ">
        <div class="w-full h-auto">
            <img class="w-full h-full object-cover" :src="$urlFor(data.image).url()" alt="logo">
        </div>
        <div class=" py-16 md:py-36 px-4 md:px-12 bg-stone-200">
            <h3 class=" text-3xl md:text-5xl font-aeonik-bold mb-4">{{ data.philosophy_title }}</h3>
            <p class=" max-w-xs text-sm font-thin">{{ data.philosophy_subtitle }}</p>
        </div>
</div>
</template>
<script setup>
const sanity = useSanity()
const query = groq`*[_type == "philosophy"][0]`
const { data, refresh } = await useAsyncData('philosophy', () => sanity.fetch(query))
</script>