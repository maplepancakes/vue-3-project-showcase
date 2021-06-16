<template>
    <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Markdown App</h1>
    <div class="h-96 flex justify-between m-5">
        <textarea v-model="textInput" class="w-1/2 border mr-1 p-2 resize-none" placeholder="Input your markdown text here! (e.g. **This is a bold text**)"></textarea>
        <article id="output" class="w-1/2 border ml-1 p-2"></article>
    </div>
    <button @click="markTextInput()" class="ml-5 w-28 border text-gray-400 p-2 focus:outline-none hover:bg-gray-100 transition ease-out duration-500">Convert</button>
    <button @click="resetInput()" class="ml-5 w-28 border text-gray-400 p-2 focus:outline-none hover:bg-gray-100 transition ease-out duration-500">Reset</button>
</template>

<script>
import marked from "marked";
import selectElement from "../mixins/selectElement.js";

export default 
{
    mixins: [selectElement],
    data()
    {
        return {
            textInput: "",
            outputIDAttribute: "#output",
        }
    },
    methods:
    {
        markTextInput()
        {
            this.selectElement(this.outputIDAttribute).innerHTML = marked(this.textInput);
        },
        resetInput()
        {
            this.textInput = "";
            this.selectElement(this.outputIDAttribute).innerHTML = "";
        },
    },
}
</script>

<style>

</style>