<template>
  <div id="app">
   <transition name="page" mode="out-in">
      <router-view></router-view>
  </transition>
  </div>
</template>

<style lang="scss">
  body{
    overflow-x:hidden ;
  }
  .page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
