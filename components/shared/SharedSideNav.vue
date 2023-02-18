<template>
    <nav :style="{ height: '100svh' }" class=" fixed top-0  left-0 right-0 bottom-0 z-50 w-full bg-slate-900">
        <Icon @click="toggleSideNav" name="uil:times" size="32" class=" cursor-pointer absolute right-4 top-4" />
        <ul class=" h-full flex flex-col w-full gap-12  justify-center items-center  text-slate-500 font-aeonik-bold">
            <NuxtLink @click.native="toggleSideNav" to="/#about">ABOUT</NuxtLink>
            <NuxtLink @click.native="toggleSideNav" class="" to="/#works">WORKS</NuxtLink>
            <NuxtLink @click.native="toggleSideNav" to="/#experience">EXPERIENCE</NuxtLink>
            <NuxtLink :to="`${footer.cv}?dl=`" target="_blank">
                <button
                    class=" max-w-max px-8 py-3 rounded-full bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">Download
                    CV</button>
            </NuxtLink>
        </ul>
</nav>
</template>
<script setup>
const props = defineProps({
    toggleSideNav: Function
})
const sanity = useSanity()
const query = groq`*[_type == "footer"][0]{
    ...,
    'cv':cv.asset->url
}`
const { data: footer, refresh } = await useAsyncData('footer', () => sanity.fetch(query))
</script>