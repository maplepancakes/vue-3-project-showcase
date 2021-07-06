<template>
    <div>
        <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Random Colours App</h1>
        <div class="m-auto mt-5 h-96 w-96 flex flex-wrap justify-center">
            <div v-for="block in numberOfBlocks" :key="block">
                <Modal>
                    <div class="colour w-full h-full"></div> 
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";

import Modal from "../components/TinyContainers.vue";
import RandomColour from "../composition/RandomColour.js";

export default 
{
    components: 
    {
        Modal,
    },
    setup()
    {
        const numberOfBlocks = 135;
        const refreshRate = 500;

        function setBlockColour()
        {
            const colourBlocks = document.querySelectorAll(".colour");

            for (let i = 0; i < colourBlocks.length; i++)
            {
                colourBlocks[i].style.backgroundColor = RandomColour();
            }
        }

        const refresh = setInterval(() =>
        {
            setBlockColour();
        }, refreshRate);

        onMounted(() =>
        {
            setBlockColour();
            refresh;
        });

        onUnmounted(() =>
        {
            clearInterval(refresh);
        });
        
        return {
            numberOfBlocks,
            refreshRate,
            setBlockColour,
            refresh,
        }
    }
}
</script>

<style>

</style>