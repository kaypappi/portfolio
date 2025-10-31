<template>
  <div>
    <div class="slider">
      <div class="slide-track">
        <div class="slide text-xl font-allrox font-bold "> Code is poetry written in logic, where every function tells a story of innovation <span class=" mx-8">💻</span></div>
        <div class="slide text-xl font-allrox font-bold "> The best error message is the one that never appears <span class=" mx-8">🚀</span></div>
        <div class="slide text-xl font-allrox font-bold "> Every great developer you know got there by solving problems they were unqualified to solve <span class=" mx-8">🌟</span></div>
        <div class="slide text-xl font-allrox font-bold "> First, solve the problem. Then, write the code <span class=" mx-8">🎯</span></div>
        <div class="slide text-xl font-allrox font-bold "> The only way to learn a new programming language is by writing programs in it <span class=" mx-8">📚</span></div>
        <div class="slide text-xl font-allrox font-bold "> Simplicity is the ultimate sophistication in software design <span class=" mx-8">✨</span></div>



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
