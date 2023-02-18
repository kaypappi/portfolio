<template>
    <button class=" flex btn font-sans">
        <icon v-if="prefix" :name="!custom ? prefix : `NuxtIcon`" :icon="prefix" class=" fill-blue-500 text-black" />
        <slot></slot>
        <icon v-if="surfix" :name="!custom ? surfix : `NuxtIcon`" :icon="surfix" class=" fill-blue-500 text-black" />
    </button>
</template>
<script setup lang="ts">
defineProps({
    prefix: {
        type: String,
        default: ''
    },
    surfix: {
        type: String,
        default: ''
    },
    custom: {
        type: Boolean,
        default: false
    }

})
</script>