<template>
    <div  class=" grid grid-cols-1 md:grid-cols-2">
        <div class=" w-full h-full bg-grey-200 flex flex-col justify-center items-center">
            <div class=" max-w-md px-4 md:px-0 flex py-20 flex-col justify-center ">
                <h1 class="  text-5xl text-black mb-6 font-allrox font-bold">{{data.title}}</h1>
                <p class=" text-md ">{{data.subtitle}}</p>
            </div>
        </div>
        <div class="w-full h-auto">
            <img class="w-full h-full object-cover" :src="$urlFor(data.image).url()" alt="logo">
        </div>
</div>
</template>
<script setup>
const sanity = useSanity()
const query = groq`*[_type == "about"][0]`
const { data, refresh } = await useAsyncData('about', () => sanity.fetch(query))
</script>