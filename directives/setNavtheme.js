import { watchDebounced, useElementBounding, useElementVisibility } from "@vueuse/core"

export const vSetnav = {

    mounted(el, binding, vnode) {
        const targetIsVisible = useElementVisibility(el)

        const { top, bottom } = useElementBounding(el)
        const theme = binding.value
        const dark = useDark()
        watch([top, targetIsVisible], async () => {

            if (targetIsVisible.value) {
                if (top.value <= 50 && bottom.value > 50) {
                    dark.value = theme === 'light' ? false : true

                }
                else {
                    dark.value = true
                }
            }
        })

    }
}