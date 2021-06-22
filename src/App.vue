<template>
  <AppHeader @open-login-screen="isLoginScreen = true"/>
  <transition name="fade">
    <LoginForm v-if="isLoginScreen" :getLoginScreenBoolean="isLoginScreen" @close-login-screen="isLoginScreen = false"/>
  </transition>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <AppFooter/>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import LoginForm from "./components/LoginForm.vue";
export default
{
  components:
  {
    AppHeader,
    AppFooter,
    LoginForm,
  },
  data()
  {
    return {
      isLoginScreen: false,
    }
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