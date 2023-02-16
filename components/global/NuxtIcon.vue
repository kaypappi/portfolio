<template>
    <div ref="NuxtIcon" v-html="iconName" class="svg-container"></div>

</template>
<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
    icon: String
})
const iconName = ref(' ')
const NuxtIcon = ref(null)

watchEffect(async () => {
    try {
        const iconsImport = import.meta.glob('assets/svgs/**/**.svg', {
            as: 'raw',
            eager: true
        })
        const rawIcon = iconsImport[`/assets/svgs/${props.icon}.svg`]
        iconName.value = rawIcon
        if (NuxtIcon.value) {
            console.log(NuxtIcon.value.children)
            NuxtIcon.value.children[0].removeAttribute('height')
            NuxtIcon.value.children[0].removeAttribute('width')
            NuxtIcon.value.children[0]
                .querySelectorAll('g , circle , line, path')
                .forEach((item) => {
                    item.removeAttribute('fill')
                    item.removeAttribute('stroke')
                    item.setAttribute('stroke','currentColor')
                })

            NuxtIcon.value.firstElementChild.classList.add($style.svg)
        }
    } catch {
        console.error(
            `[nuxt-icon] Icon '${props.icon}' doesn't exist in 'assets/icons'`
        )
    }
})
</script>
<style module>
.svg {
    fill: currentColor;
    margin-top: -4px;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    stroke: currentColor;
}
</style>