<template>
  <div>
    <div class="slider">
      <div class="slide-track">
        <div class="slide text-xl font-allrox font-bold "> I never stop learning, I always seek ways to improve my craft. It
          drives everything i do <span class=" mx-8">🌸</span></div>
        <div class="slide text-xl font-allrox font-bold "> I never stop learning, I always seek ways to improve my craft. It
          drives everything i do <span class=" mx-8">🌸</span></div>
        <div class="slide text-xl font-allrox font-bold "> I never stop learning, I always seek ways to improve my craft. It
          drives everything i do <span class=" mx-8">🌸</span></div>
        <div class="slide text-xl font-allrox font-bold "> I never stop learning, I always seek ways to improve my craft. It
          drives everything i do <span class=" mx-8">🌸</span></div>
        <div class="slide text-xl font-allrox font-bold "> I never stop learning, I always seek ways to improve my craft. It
          drives everything i do <span class=" mx-8">🌸</span></div>
        <div class="slide text-xl font-allrox font-bold "> I never stop learning, I always seek ways to improve my craft. It
          drives everything i do <span class=" mx-8">🌸</span></div>



      </div>
    </div>
  </div>
</template>
<style scoped>
.slider {
  position: relative;
  width: 100%;

  display: grid;
  place-items: center;
  overflow: hidden;
}



/*  IMPORTANT CODE BELOW */

.slide-track {
  width: 100%;
  display: flex;
  animation: scroll 20s linear infinite;
  justify-content: space-between;
}

.slide {
  width: max-content;
  display: flex;
  place-items: center;
  transition: 0.5s;
  cursor: pointer;
}


@keyframes scroll {
  0% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(calc(-150px * 10));
  }
}

@keyframes scroll2 {
  0% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(calc(-150px * 5));
  }
}
</style>