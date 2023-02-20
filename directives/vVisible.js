

const cssTextToObject = (cssText) => {
    var cssProperties = {};
    var properties = cssText.match(/[\w-]+\s*:\s*.+?(;|$)/g);
    if (properties) {
        properties.forEach(function (property) {
            var parts = property.split(':');
            var name = parts[0].trim();
            var value = parts[1].trim();
            cssProperties[name] = value;
        });
    }
    return cssProperties;
}

const cssObjectTotext = (obj) => {
    return Object.entries(obj)
        .map(([key, value]) => `${key}: ${value};`)
        .join('')
}
export const vVisible = {
    created(el, binding,vnode) {
      
        const { initial:bindinInitial, enter:bindingEnter} = binding.value
        const initial={...bindinInitial,...vnode.props?.initial}
        const enter={...bindingEnter,...vnode.props?.enter}
        el.style.cssText = cssObjectTotext({ ...cssTextToObject(el.style.cssText), ...initial })
    },
    mounted(el, binding,vnode) {
        const { initial:bindinInitial, enter:bindingEnter} = binding.value
        const initial={...bindinInitial,...vnode.props?.initial}
        const enter={...bindingEnter,...vnode.props?.enter}
        const {always}=binding.modifiers
        onIntersect(el, () => {
            el.style.cssText = cssObjectTotext({ ...cssTextToObject(el.style.cssText), ...enter })

        }, () => {

            el.style.cssText = cssObjectTotext({ ...cssTextToObject(el.style.cssText), ...initial })

        },!always,)
    }


}