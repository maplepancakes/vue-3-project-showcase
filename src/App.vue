<template>
  <AppHeader @open-login-screen="isLoginScreen = true" @logout="logout()" :loginState="loginState"/>
  <transition name="fade">
    <LoginForm v-if="isLoginScreen" @close-login-screen="isLoginScreen = false" @login-success="loginState = true"/>
  </transition>
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <AppFooter/>
</template>

<script>
import firebase from "./firebase/firebase.js";

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
      loginState: false,
    }
  },
  methods:
  {
    logout()
    {
      firebase
      .auth()
      .signOut()
      .then(() =>
      {
        window.location.reload();
      })
      .catch((error) =>
      {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log("Sign Out Error Code: ", errorCode);
        console.log("Sign Out Error Message: ", errorMessage);
      });
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