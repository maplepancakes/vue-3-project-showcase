<template>
  <div>
      <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Calculator App</h1>
      <div class="ml-auto mr-auto">
        <div class="grid grid-cols-4 gap-2 mt-5">
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">7</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">8</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">9</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">/</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">4</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">5</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">6</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">*</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">1</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">2</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">3</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">+</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 col-span-2">0</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">=</button>
            <button :class="defaultButtonHoverStyle()" class="border p-3 w-10">-</button>
        </div>
      </div>
  </div>
</template>

<script>
import defaultButtonHoverStyle from "../mixins/defaultButtonHoverStyle.js";

export default 
{
    mixins: [defaultButtonHoverStyle],
    setup()
    {

    }
}
</script>

<style>

</style>