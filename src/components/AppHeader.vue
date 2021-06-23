<template>
    <div class="flex w-full">
        <nav class="border-b border-r p-2 flex justify-evenly flex-wrap w-11/12">
            <router-link class="hover:text-gray-400 transition ease-out duration-500" v-for="router in routerList" :key="router.to" :to="router.to">{{ router.title }}</router-link>
        </nav>
        <button v-if="!loginState" @click="$emit('open-login-screen')" class="text-gray-400 border-b p-2 w-1/12 focus:outline-none hover:bg-gray-100 transition ease-out duration-500">Login</button>
        <button v-if="loginState" @click="$emit('logout')" class="text-gray-400 border-b p-2 w-1/12 focus:outline-none hover:bg-gray-100 transition ease-out duration-500">Logout</button>
    </div>
</template>

<script>
export default 
{
    props:
    {
        loginState:
        {
            type: Boolean,
        }
    },
    data()
    {
        return {
            routerList:
            [
                {to: "/listApp", title: "List App"},
                {to: "/calendarApp", title: "Calendar App"},
                {to: "/markdownApp", title: "Markdown App"},
                {to: "/sliderApp", title: "Slider App"},
            ]
        }
    },
}
</script>