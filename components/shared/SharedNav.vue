<template>
    <nav ref="mainNav"
        :class="['sticky top-0 py-0 !leading-tight transition-[background-color] flex text-white duration-500 text-sm px-4 md:px-16 xl:px-40', { '  border-t border-b border-grey-700': opacity > 0.1 }, { ' bg-white/30 backdrop-blur-md border-0  shadow-xs shadow-white ': opacity <= 0.003 },{'bg-black/40':!dark && opacity<=0.003}]">
        <div class="nav-right flex items-center">

            <img class=" w-16 mb-2 hover:rotate-180 hover:mb-0 hover:mt-2 transition-all" src="../../assets/imgs/winkbit.png" alt="logo">

            <h4 class=" font-bold font-aeonik-bold">WESLEY <br /> UKADIKE</h4>

        </div>
        <template class=" hidden lg:flex ml-auto items-center font-extralight  font-aeonik-light">
            <transition name="slide-fade" mode="out-in">
                <div key="detRef" ref="detRef" v-if="opacity > 0.0051 && !showMenu"
                    class="nav-description ml-auto flex items-center">
                    <h4>BASED IN LAGOS <br /> NIGERIA, NG</h4>
                    <h4 class="mx-8 md:ml-12 md:mr-24">CURRENTLY SOFTWARE ENGINEER <br /> BLACKCOPPER</h4>
                    <div v-element-hover="onHover" class="py-2 px-6 cursor-pointer">
                        <nuxt-icon v-element-hover="onHover" icon="menu"  class=" cursor-pointer w-6 h-max text-white" />
                    </div>

                </div>
                <div v-element-hover="onHover" key="menuRef" ref="menuRef" v-else
                    class="nav-main ml-auto flex items-center">
                    <ul>
                        <NuxtLink to="/#about" class=" hover:text-indigo-300">ABOUT</NuxtLink>
                        <NuxtLink class="mx-8 md:mx-12 hover:text-indigo-300" to="/#works">WORKS</NuxtLink>
                        <NuxtLink to="/#experience" class="hover:text-indigo-300">EXPERIENCE</NuxtLink>
                    </ul>
                    <button class=" ml-8 md:ml-12 px-8 py-3 rounded-full bg-white ring ring-white  text-gray-800 hover:bg-transparent hover:text-white">Get in touch</button>
                </div>
            </transition>
        </template>
        <div class="py-2 px-6 cursor-pointer flex items-center lg:hidden ml-auto ">
            <nuxt-icon @click="toggleSideNav" icon="menu" class=" cursor-pointer w-6 h-max" />
        </div>
        <transition name="slide">
            <SharedSideNav v-if="showSideNav" :toggleSideNav="toggleSideNav" />
        </transition>
    </nav>
</template>

<script  setup>
import { vElementHover } from '@vueuse/components'

defineProps({
    opacity: {
        type:Number,
        default:1
    }
})
const dark=useDark()
const detRef = ref(null)
const menuRef = ref(null)
const showMenu = ref(false)
const showSideNav = ref(false)

const onHover = (state) => {
    if (state) {
        return showMenu.value = true
    }
    return showMenu.value = false
}

const toggleSideNav = () => {
    showSideNav.value = !showSideNav.value
}

watchEffect(() => {

if (showSideNav.value) {
    return document.body.classList.add('menu-open')
} else {
    document.body.classList.remove('menu-open')
}
})




</script>
<style scoped>
/* .sticky-nav{
    background-image: url('../../assets/imgs/noisebg.png');
    background-size: contain;
} */

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
.slide-enter-active {
    transition: all 0.5s ease-out;

}

.slide-leave-active {

    transition: all 0.5s ease-out;
}

.slide-enter-from {
    transform: translateX(500px);
}

.slide-leave-to{
    transform: translateX(500px);
}
</style>