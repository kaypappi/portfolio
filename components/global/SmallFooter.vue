<template>
    <div
        class="footer-bottom text-white text-sm w-full   py-10 md:py-0 mt-10 md:mt-0   border-t border-t-gray-700 grid grid-cols-12 gap-8">
        <div class=" col-span-12 md:col-span-5 flex flex-wrap w-max justify-center items-center md:justify-end md:py-10">
            <span>REACH ME VIA</span>
            <img class=" mx-4 w-10 md:w-max"
                src="https://uploads-ssl.webflow.com/5eaaff6f2c048cabeb929aa2/62da72be83203627101e610d_img-arrow.svg"
                alt="footer arrow">
            <span>SOCIAL MEDIA</span>
        </div>
        <div
            class=" col-span-12 md:col-span-7 md:border-l w-max mx-auto text-lg border-l-grey-700 flex gap-10 items-center justify-center md:justify-start md:pl-10">
            <NuxtLink v-for="item in footer" :to="item.link" target="_blank">
                <Icon class="" :name="item.icon" />
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const sanity = useSanity()
const query = groq`*[_type == "footer"][0].socials`
const { data: footer, refresh } = await useAsyncData('smallfooter', () => sanity.fetch(query))
</script>