

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
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(savedPosition)
                }, 1000)
            })
        } if (to.hash) {
            const el = await findEl(to.hash);

            return { top: el ? el.offsetTop + 500 : 0, left: 0, behavior: "smooth" };
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            }, 1000)
        })
    },
};