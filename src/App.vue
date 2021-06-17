<template>
  <AppHeader/>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <AppFooter/>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default
{
  components:
  {
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active 
  {
    transition: all 0.5s ease-out;
  }

  .fade-enter-from,
  .fade-leave-to 
  {
    opacity: 0;
  }
</style>