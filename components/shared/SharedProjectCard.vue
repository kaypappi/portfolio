<template>
    <div>
        <NuxtLink class="w-full" :to="project.url || ''" target="_blank">
            <div class=" rounded-2xl overflow-hidden group  cursor-pointer">

                <div class=" project-top relative w-full aspect-video overflow-hidden">
                    <img v-if="project.mobile"
                        :class="['w-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0 blur-[2px]']"
                        :src="$urlFor(project.image).url()" alt="logo" />
                    <div class="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-30"></div>
                    <img :class="['w-full h-full z-20 relative', { 'object-contain object-center py-2': project.mobile }]"
                        :src="$urlFor(project.image).url()" alt="logo" />
                </div>
                <div class="w-full py-8 px-6 pb-12 bg-slate-900 relative">
                    <h4
                        class=" text-lg font-allrox group-hover:translate-x-4 transition-all group-hover:text-indigo-300">
                        {{
                            project.title }}</h4>
                    <p class=" text-sm text-slate-400 font-allrox mt-2">{{ project.decs }}</p>
                    <div
                        class="p-2 bg-indigo-300 w-max absolute -right-10 -bottom-10 group-hover:right-0 group-hover:bottom-0 transition-all">
                        <Icon name="ph:arrow-up-right" />
                    </div>
                </div>

            </div>
        </NuxtLink>
    </div>
</template>
<script setup>
const props = defineProps({
    project: Object
})
</script>