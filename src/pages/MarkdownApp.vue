<template>
    <div>
        <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Markdown App</h1>
        <div class="h-96 flex justify-between m-5">
            <textarea ref="textAreaMarkdown" v-model="textInput" class="w-1/2 border mr-1 p-2 resize-none focus:outline-none" placeholder="Input your markdown text here! (e.g. **This is a bold text**)"></textarea>
            <article ref="output" class="w-1/2 border ml-1 p-2"></article>
        </div>
        <button @click="markTextInput()" :class="defaultButtonHoverStyle()" class="ml-5 w-28 border text-gray-400 p-2">Convert</button>
        <button @click="resetInput()" :class="defaultButtonHoverStyle()" class="ml-5 w-28 border text-gray-400 p-2">Reset</button>
    </div>
</template>

<script>
import marked from "marked";
import defaultButtonHoverStyle from "../mixins/defaultButtonHoverStyle.js";

export default 
{
    mixins: [defaultButtonHoverStyle],
    data()
    {
        return {
            textInput: "",
        }
    },
    methods:
    {
        markTextInput()
        {
            this.$refs.output.innerHTML = marked(this.textInput);
        },
        resetInput()
        {
            this.textInput = "";
            this.$refs.output.innerHTML = "";
        },
    },
    mounted()
    {
        this.$refs.textAreaMarkdown.focus();
    }
}
</script>

<style>

</style>