<template>
    <div class=" text-white w-full min-h-screen bg-black flex flex-col pt-10 ">
        <div class="footer-top grid grid-cols-1 md:grid-cols-2 gap-10 grow  px-4 md:px-16 xl:px-40">
            <div class=" w-full h-full flex flex-col justify-center ">
                <div class="avatar-wrapper w-52 h-52 rounded-full bg-white flex items-end justify-center">
                    <img class=" w-54 ml-16" :src="$urlFor(footer.banner_image).url()" alt="footer image">
                </div>
                <h2 class=" mt-6 text-3xl  font-aeonik-bold !leading-tight">{{ footer.title }}</h2>
                <p class=" text-base mb-6 mt-2  text-grey-500">{{ footer.subtitle }}</p>
                <NuxtLink :to="`${footer.cv}?dl=`" target="_blank">
                    <button
                        class=" max-w-max px-8 py-3 rounded-full bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">Download
                        CV</button>
                </NuxtLink>
            </div>
            <div class=" w-full flex flex-col justify-center">
                <FormsInput label="Full Name" class="w-full mb-8"/>
                <FormsInput label="Email" type="email" class="w-full mb-8"/>
                <FormsTextArea label="Message" type="textarea" class="w-full mb-8"/>
                <button
                        class=" max-w-sm mt-8 px-8 py-3 rounded-md bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">
                        Submit</button>
            </div>
        </div>
        <div class="footer-bottom text-sm w-full px-4 py-10 md:py-0 mt-10 md:mt-0   border-t border-t-gray-700 grid grid-cols-12 gap-8">
            <div class=" col-span-12 md:col-span-5 flex justify-center items-center md:justify-end md:py-10">
                <span>REACH ME VIA</span>
                <img class=" mx-4 w-10 md:w-max"
                    src="https://uploads-ssl.webflow.com/5eaaff6f2c048cabeb929aa2/62da72be83203627101e610d_img-arrow.svg"
                    alt="footer arrow">
                <span>SOCIAL MEDIA</span>
            </div>
            <div
                class=" col-span-12 md:col-span-7 md:border-l text-lg border-l-grey-700 flex gap-10 items-center justify-center md:justify-start  w-full md:pl-10">
                <Icon class="" v-for="item in footer.socials" :name="item.icon" />
            </div>
        </div>
</div>
</template>
<script setup>
const sanity = useSanity()
const query = groq`*[_type == "footer"][0]{
    ...,
    'cv':cv.asset->url
}`
const { data: footer, refresh } = await useAsyncData('footer', () => sanity.fetch(query))
</script>