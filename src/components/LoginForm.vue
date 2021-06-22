<template>
    <div>
        <div @click="$emit('close-login-screen')" class="fixed z-20 top-0 w-screen h-screen bg-gray-200 opacity-50"></div>
        <div class="absolute top-0 w-screen h-screen">
            <div class="flex ml-auto mr-auto mt-28 w-56 justify-center">
                <div class="z-30 bg-white w-auto shadow border">
                    <div class="p-5 text-sm">
                        <form class="mb-2">   
                            <label>Email or Username</label>
                            <input v-model="form.user" :class="defaultInputStyle()" class="w-96" type="text" placeholder="Enter your email or username">
                        </form>
                        <form class="mb-2">
                            <label>Password</label>
                            <input v-model="form.password" :class="defaultInputStyle()" class="w-96" type="password" placeholder="Enter your password">
                        </form>
                        <button @click="this.submit()" :class="defaultButtonHoverStyle()" class="border p-1 w-96" type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            }
        }
    },
    methods:
    {
        submit()
        {
            // code for submitting form
        }
    }
}
</script>

<style>

</style>