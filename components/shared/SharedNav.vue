<template>
    <nav ref="mainNav"
        :class="['sticky top-0 py-2 xl:py-4 !leading-tight transition-[background-color] flex text-white duration-500 text-sm px-4 md:px-16 xl:px-40', { '  border-t border-b border-grey-700': top >= 1 }, { ' bg-white/10 border-0 backdrop-blur  shadow-xs shadow-white ': top < 1 }, { 'bg-black/40': !dark && top < 1 }]">
        <div class="nav-right flex items-center">

            <img class=" w-10 mr-2 hover:rotate-[360deg] duration-500 transition-all" src="../../assets/imgs/winkbit.png" alt="logo">

            <NuxtLink to="/">
                <h4 class=" font-allrox font-bold">WESLEY <br /> UKADIKE</h4>
            </NuxtLink>

        </div>
        <template class=" hidden lg:flex ml-auto items-center font-extralight  font-allrox">
            <transition name="slide-fade" mode="out-in">
                <div key="detRef" ref="detRef" v-if="opacity > 0.0051 && !showMenu"
                    class="nav-description ml-auto flex items-center">
                    <h4>BASED IN ONTARIO <br /> CANADA, CA</h4>
                    <h4 class="mx-8 md:ml-12 md:mr-24">CURRENTLY LEAD SOFTWARE ENGINEER <br /> FALCONAERO</h4>
                    <div v-element-hover="onHover" class="py-2 px-6 cursor-pointer">
                        <nuxt-icon v-element-hover="onHover" icon="menu" class=" cursor-pointer w-6 h-max text-white" />
                    </div>

                </div>
                <div v-element-hover="onHover" key="menuRef" ref="menuRef" v-else
                    class="nav-main ml-auto flex items-center">
                    <ul>
                        <NuxtLink to="/#about" class=" hover:text-indigo-300">ABOUT</NuxtLink>
                        <NuxtLink class="mx-8 md:mx-12 hover:text-indigo-300" to="/#projects">WORKS</NuxtLink>
                        <NuxtLink to="/#experience" class="hover:text-indigo-300">EXPERIENCE</NuxtLink>
                    </ul>
                    <NuxtLink to="/#footer">
                        <button
                            class=" ml-8 md:ml-12 px-8 py-3 rounded-full bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">Get
                            in touch</button>
                    </NuxtLink>
                </div>
            </transition>
        </template>
        <div class="py-2 px-6 cursor-pointer flex items-center lg:hidden ml-auto ">
            <nuxt-icon @click="toggleSideNav" icon="menu" class=" cursor-pointer w-6 h-max" />
        </div>
    </nav>
</template>

<script  setup lang="ts">
import { defineProps, withDefaults, ref } from 'vue'
import { vElementHover } from '@vueuse/components'

const props = withDefaults(defineProps<{
    opacity: number,
    top: number
}>(), {
    opacity: 1,
    top: 0
})
const dark = useDark()
const detRef = ref(null)
const menuRef = ref(null)
const showMenu = ref(false)
const showSideNav = useSideNav()

useHead(() => ({
    bodyAttrs: {
        class: showSideNav.value ? 'menu-open' : undefined
    }
}))



const onHover = (state) => {
    if (state) {
        return showMenu.value = true
    }
    return showMenu.value = false
}

const toggleSideNav = () => {
    showSideNav.value = !showSideNav.value
}
</script>
<style scoped>
/* .sticky-nav{
    background-image: url('../../assets/imgs/noisebg.png');
    background-size: contain;
} */

.rot

.slide-fade-enter-active {
    transition: all 0.3s ease-out;

}

.slide-fade-leave-active {

    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);

    opacity: 0;
}
</style>
