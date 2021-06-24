<template>
    <div>
        <div @click="$emit('close-login-screen')" class="fixed z-20 top-0 w-screen h-screen bg-gray-200 opacity-50"></div>
        <div class="absolute top-0 w-screen h-screen">
            <div class="flex ml-auto mr-auto mt-28 w-56 justify-center">
                <div class="z-30 bg-white w-auto shadow border">
                    <div class="p-5 text-sm">
                        <form @submit.prevent="onSubmit" class="mb-2">   
                            <label for="input-user">Email or Username</label>
                            <input v-model="form.user" @keydown.enter="this.submit()" :class="defaultInputStyle()" id="input-user" class="w-96" type="text" placeholder="Enter your email or username">
                        </form>
                        <form @submit.prevent="onSubmit" class="mb-2">
                            <label for="input-password">Password</label>
                            <input v-model="form.password" @keydown.enter="this.submit()" :class="defaultInputStyle()" id="input-password" class="w-96" type="password" placeholder="Enter your password">
                        </form>
                        <button @click="this.submit()" :class="defaultButtonHoverStyle()" id="login-button" class="border p-1 mb-2 w-96" type="submit"></button>
                        <label v-if="invalidInput" class="text-red-400">Invalid email or password!</label>
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
import selectElement from "../mixins/selectElement.js";

export default 
{
    mixins: [defaultButtonHoverStyle, defaultInputStyle, selectElement],
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
        submit()
        {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.form.user, this.form.password)
            .then(() =>
            {
                this.invalidInput = false;

                const loginButton = this.selectElement("#login-button");
                loginButton.textContent = this.loginButtonText[1];

                setTimeout(() =>
                {
                    loginButton.textContent = this.loginButtonText[2];
                }, 3000);

                setTimeout(() =>
                {
                    this.$emit('close-login-screen');
                    this.$emit('login-success');

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

                const inputUser = this.selectElement("#input-user");
                const inputPassword = this.selectElement("#input-password");

                inputUser.classList.add("border-red-400");
                inputPassword.classList.add("border-red-400");

            });
        }
    },
    mounted()
    {
        const loginButton = this.selectElement("#login-button");
        loginButton.textContent = this.loginButtonText[0];
    }
}
</script>

<style>

</style>