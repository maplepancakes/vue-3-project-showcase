<template>
  <AppHeader @open-login-screen="isLoginScreen = true" @logout="logout()" :isLoggedIn="isLoggedIn"/>
  <transition name="fade">
    <LoginForm v-if="isLoginScreen" @close-login-screen="isLoginScreen = false"/>
  </transition>
  <transition name="fade">
    <router-view :isLoggedIn="isLoggedIn"></router-view>
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
      isLoggedIn: false,
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
  },
  beforeMount()
  {
    this.isLoggedIn = false;
  },
  mounted()
  {
    /*
    firebase.auth().getRedirectResult()
    .then((result) =>
    {
      const pushToFirebaseUser = firebase.auth.GoogleAuthProvider.credential(result.idToken);

      firebase.auth().signInWithCredential(pushToFirebaseUser);
    })
    .catch((error) =>
    {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
    });
    */

    firebase.auth().onAuthStateChanged((user) =>
    {
      if (user)
      {
        this.isLoggedIn = true;

        return;
      }
    });
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