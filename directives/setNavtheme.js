import { watchDebounced, useElementBounding } from "@vueuse/core"

export const vSetnav = {

    mounted(el, binding, vnode) {
        const { top,bottom } = useElementBounding(el)
        const theme = binding.value
        const dark = useDark()
        watch(top, async () => {
            if (top.value <= 50 && bottom.value>0) {
                dark.value = theme === 'light' ? false : true
            }
            else{
                dark.value=true
            }
        })
    }
}