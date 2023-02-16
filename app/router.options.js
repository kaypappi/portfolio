

export default {
    async scrollBehavior(to, from, savedPosition) {
        
        const findEl = async (hash, x) => {
            return document.querySelector(hash) ||
                new Promise((resolve, reject) => {
                    if (x > 50) {
                        return resolve()
                    }
                    setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
                })
        }
        if (savedPosition) {
            return savedPosition;
        } if (to.hash) {
            const el = await findEl(to.hash);
            
            return { top: el ? el.offsetTop + 350 : 0, left: 0, behavior: "smooth" };
        }
        return {
            top: 0,
            left: 0,
            behavior: "smooth"
        }

    },
};