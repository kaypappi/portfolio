<template>
    <div class="">
        <SharedCarousel :items="items" class=" hidden lg:block"/>
        <div   v-for="item in items" :key="item" class="px-4 md:px-16 xl:px-40 lg:hidden py-8">
            <div :class="`left-carousel `">
                    <div class="w-full h-52 md:h-96 bg-slate-500">

                    </div>
                </div>
                <div :class="`right-carousel flex flex-col justify-center my-8`">
                    <div>
                        <h4 class=" text-sm">EXPERIENCE</h4>
                        <h1 class="text-5xl my-4 font-aeonik-bold max-w-md">Companies I have worked with in the past
                        </h1>
                        <h6 class=" text-xs text-gray-400">Always passionate about building useful products</h6>
                    </div>
                    <div class="flex gap-4 my-8 flex-wrap">
                        <div class=" rounded-full border border-white py-2 px-8 w-max">ReactJs</div>
                        <div class=" rounded-full border border-white py-2 px-8 w-max">ReactJs</div>
                        <div class=" rounded-full border border-white py-2 px-8 w-max">ReactJs</div>
                        <div class=" rounded-full border border-white py-2 px-8 w-max">ReactJs</div>
                    </div>
                    <p class=" max-w-md text-xs leading-relaxed">Lorem ipsum dolor sit amet consectetur. Sed consectetur
                        malesuada lectus eu tristique dolor
                        metus. Quisque sed ultrices quam nullam id. Dictumst proin fusce quis egestas. At pulvinar quis
                        erat tincidunt vitae et. Lorem ipsum dolor sit amet consectetur. </p>
                </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(['A', 'B', 'C'])
</script>