export const onAnimate=()=>{
    const animate = {
        popInBottom: {
            initial: {
                transform: 'scale(0.9) translateY(50px)',
                opacity: 0,
                transition: 'all .5s ease-out'
            },
            enter: {
                transform: 'scale(1) translateY(0px)',
                opacity: 1,
            }
        },
        rotateInRight:{
            initial:{
                transform:'translateY(100px) rotate(45deg)',
                opacity:0,
                transition: 'all .5s ease-out'
            },
            enter:{
                transform:'rotate(0deg) translateY(0px)',
                opacity:1
            }
        }
    }
    return animate
}
