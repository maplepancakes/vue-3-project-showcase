<template>
    <div>
        <div v-for="(backgroundColour, index) in backgroundColours" :key="backgroundColour">
            <transition name="slide">
                <div v-if="sliderNumber === index" :class="backgroundColour" class="fixed w-full h-screen border" style="z-index: -1;"></div>    
            </transition>
        </div>  
        <div class="flex justify-center">
            <div v-for="(icon, index) in this.getArrayLength(this.backgroundColours)" :key="icon">
                    <div v-if="sliderNumber === index" class="w-2 h-2 bg-white m-1 mt-3 rounded-full shadow-md"></div>
                    <div v-if="sliderNumber !== index" class="w-2 h-2 bg-gray-300 m-1 mt-3 rounded-full shadow-md"></div>
            </div>
        </div>
    </div>
</template>

<script>
import getArrayLength from "../mixins/getArrayLength.js";

export default 
{
    mixins: [getArrayLength],
    data()
    {
        return {
            sliderNumber: 0,
            mountedDisplay: "",
            backgroundColours: ["bg-green-400", "bg-red-400", "bg-blue-400",]
        }
    },
    mounted()
    {
        this.mountedDisplay = setInterval(() =>
        {
            if (this.sliderNumber < this.getArrayLength(this.backgroundColours) - 1)
            {
                this.sliderNumber++;

                return;
            }

            this.sliderNumber = 0;
        }, 3000)
    },
    unmounted()
    {
        clearInterval(this.mountedDisplay);
    },
}
</script>

<style>
    .slide-enter-active,
    .slide-leave-active 
    {
        transition: all 3s ease;
    }
    .slide-enter-from
    {
        transform: translateX(-100%);
    }
    .slide-leave-to 
    {
        transform: translateX(100%);
    }
</style>