<template>
    <nav class="border-b p-2 flex justify-evenly flex-wrap">
        <router-link class="hover:text-gray-400 transition ease-out duration-500" v-for="router in routerList" :key="router.to" :to="router.to">{{ router.title }}</router-link>
    </nav>
</template>

<script>
export default 
{
    data()
    {
        return {
            routerList:
            [
                {to: "/listApp", title: "List App"},
                {to: "/calendarApp", title: "Calendar App"},
                {to: "/markdownApp", title: "Markdown App"},
            ]
        }
    }
}
</script>