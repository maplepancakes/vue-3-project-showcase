<template>
    <div>
        <div @click="$emit('close-login-screen')" class="fixed z-20 top-0 w-screen h-screen bg-gray-200 opacity-50"></div>
        <div class="absolute top-0 w-screen h-screen">
            <div class="flex ml-auto mr-auto mt-28 w-56 justify-center">
                <div class="z-30 bg-white w-auto shadow border">
                    <div class="p-5 text-sm">
                        <form @submit.prevent="onSubmit" class="mb-2">   
                            <label for="inputUser">Email or Username</label>
                            <input ref="inputUser" v-model="form.user" @keydown.enter="this.login()" :class="defaultInputStyle()" class="w-96" type="text" placeholder="Enter your email or username">
                        </form>
                        <form @submit.prevent="onSubmit" class="mb-2">
                            <label for="inputPassword">Password</label>
                            <input ref="inputPassword" v-model="form.password" @keydown.enter="this.login()" :class="defaultInputStyle()" class="w-96" type="password" placeholder="Enter your password">
                        </form>
                        <button ref="loginButton" @click="this.login()" :class="defaultButtonHoverStyle()" class="border p-1 mb-2 w-96" type="submit"></button>
                        <label v-if="invalidInput" class="text-red-400">Invalid email or password!</label>
                        <div class="mt-5">
                            <button ref="loginButtonGoogle" @click="loginWithGoogle()" :class="defaultButtonHoverStyle()" class="border p-1 mb-2 w-96" type="submit">
                                Login with 
                                <span class="text-blue-400">G</span>
                                <span class="text-red-400">o</span>
                                <span class="text-yellow-400">o</span>
                                <span class="text-blue-400">g</span>
                                <span class="text-green-400">l</span>
                                <span class="text-red-400">e</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "../firebase/firebase.js";

import defaultButtonHoverStyle from "../mixins/defaultButtonHoverStyle.js";
import defaultInputStyle from "../mixins/defaultInputStyle.js";

export default 
{
    mixins: [defaultButtonHoverStyle, defaultInputStyle],
    data()
    {
        return {
            form:
            {
                user: "",
                password: "",
            },
            loginButtonText: ["Login", "Signing in...", "Login Success!"],
            invalidInput: false,
        }
    },
    methods:
    {
        login()
        {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.form.user, this.form.password)
            .then(() =>
            {
                this.invalidInput = false;

                const loginButton = this.$refs.loginButton;
                loginButton.textContent = this.loginButtonText[1];

                setTimeout(() =>
                {
                    loginButton.textContent = this.loginButtonText[2];
                }, 3000);

                setTimeout(() =>
                {
                    this.$emit('close-login-screen');

                    this.form.user = "";
                    this.form.password = ""; 
                }, 4000);   
            })
            .catch((error) => 
            {
                let errorCode = error.code;
                let errorMessage = error.message;

                console.log("Sign In Error Code: ", errorCode);
                console.log("Sign In Error Message: ", errorMessage);

                this.invalidInput = true;

                const inputUser = this.$refs.inputUser;
                const inputPassword = this.$refs.inputPassword;

                inputUser.classList.add("border-red-400");
                inputPassword.classList.add("border-red-400");

            });
        },
        loginWithGoogle()
        {
            let googleProvider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithRedirect(googleProvider);
        }
    },
    mounted()
    {
        this.$refs.inputUser.focus();
        this.$refs.loginButton.textContent = this.loginButtonText[0];
    }
}
</script>

<style>

</style>