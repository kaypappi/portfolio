<template>
    <div id="footer" class=" text-white w-full min-h-screen bg-black flex flex-col pt-20 ">
        <div class="footer-top grid grid-cols-1 md:grid-cols-2 gap-10 grow  px-4 md:px-16 xl:px-40">
            <div class=" w-full h-full flex flex-col items-center md:items-start justify-center ">
                <div class="avatar-wrapper w-52 h-52 rounded-full bg-white flex items-end justify-center">
                    <img class=" w-54 ml-16" :src="$urlFor(footer.banner_image).url()" alt="footer image">
                </div>
                <h2 class=" mt-6 text-3xl text-center md:text-start  font-aeonik-bold !leading-tight">{{ footer.title }}
                </h2>
                <p class=" text-sm mb-6 mt-2 text-center md:text-start  text-slate-400">{{ footer.subtitle }}</p>
                <NuxtLink :to="`${footer.cv}?dl=`" target="_blank">
                    <button
                        class=" max-w-max px-8 py-3 rounded-full bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">Download
                        CV</button>
                </NuxtLink>
            </div>
            <div class=" w-full flex flex-col justify-center">
                <form @submit.prevent="onSubmit()">
                    <FormsInput required v-model="form.name" label="Full Name" class="w-full mb-8" />
                    <FormsInput required v-model="form.email" label="Email" type="email" class="w-full mb-8" />
                    <FormsTextArea required v-model="form.message" label="Message" type="textarea" class="w-full mb-8" />
                    <button :disabled="isLoading" type="submit"
                        class=" w-full max-w-sm mt-8 px-8 py-3 rounded-md bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">
                        <span v-if="!isLoading">Submit</span>
                        <Icon v-if="isLoading" name="ri:loader-5-fill" size="20" class="animate-spin " />
                    </button>
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useAsyncState } from "@vueuse/core";
import { useReCaptcha } from 'vue-recaptcha-v3';
import emailjs from '@emailjs/browser';
const form = ref({
    name: '',
    email: '',
    message: '',
})
const toast = useToast()
const recaptchaInstance = useReCaptcha();
const recaptcha = async () => {
    // optional you can await for the reCaptcha load
    await recaptchaInstance?.recaptchaLoaded();

    // get the token, a custom action could be added as argument to the method
    const token = await recaptchaInstance?.executeRecaptcha('login');

    return token;
};

const sanity = useSanity()
const query = groq`*[_type == "footer"][0]{
    ...,
    'cv':cv.asset->url
}`
const { data: footer, refresh } = await useAsyncData('footer', () => sanity.fetch(query))

const { state: sendForm, refresh: refreshForm, execute: onSubmit, isLoading, error } = useAsyncState(async () => {
    const newToken = await recaptcha()
    return emailjs.send(
        'portfolio',
        'template_bwsn7xv',
        { ...form.value, 'g-recaptcha-response': newToken },
        'user_r7wrbpO9ex9nAJs8ooX79',
    )
}, null,
    {
        immediate: false,
        onError: (e) => {

            toast.createNotification({
                title: `Sorry Couldn't reach out`,
                message: e.text,
                type: "error"
            })
        },
        onSuccess: (data) => {
            form.value = {}
            toast.createNotification({
                title: `Thanks for reaching out`,
                message: 'Looking forward to making magic',
                type: "success"
            })
        }
    })





</script>