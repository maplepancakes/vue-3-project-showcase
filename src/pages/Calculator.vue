<template>
  <div class="flex w-full h-full">
      <div class="z-10 w-64 m-auto">
        <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Calculator App</h1>
        <div class="flex flex-wrap">
            <div class="text-2xl text-gray-300 border shadow w-full px-1 py-2 mt-5 overflow-x-hidden">{{ display }}</div>
        </div>
            <div class="grid grid-cols-4 gap-2 mt-2">
                <button ref="seven" @click="updateDisplay('7')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">7</button>
                <button ref="eight" @click="updateDisplay('8')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">8</button>
                <button ref="nine" @click="updateDisplay('9')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">9</button>
                <button ref="divide" @click="division()" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">/</button>
                <button ref="four" @click="updateDisplay('4')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">4</button>
                <button ref="five" @click="updateDisplay('5')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">5</button>
                <button ref="six" @click="updateDisplay('6')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">6</button>
                <button ref="multiply" @click="multiplication()" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">*</button>
                <button ref="one" @click="updateDisplay('1')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">1</button>
                <button ref="two" @click="updateDisplay('2')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">2</button>
                <button ref="three" @click="updateDisplay('3')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">3</button>
                <button ref="add" @click="addition()" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">+</button>
                <button ref="zero" @click="updateDisplay('0')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">0</button>
                <button ref="equal" @click="equals()" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">=</button>
                <button ref="zero" @click="clear()" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">CLEAR</button>
                <button ref="minus" @click="subtraction()" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">-</button>
            </div>
      </div>
  </div>
</template>

<script>
import defaultButtonHoverStyle from "../mixins/defaultButtonHoverStyle.js";
import { ref } from "vue";

export default 
{
    mixins: [defaultButtonHoverStyle],
    setup()
    {
        const display = ref("0");

        let calculatingValue = 0;
        let totalValue = 0;

        function updateDisplay(value)
        {
            if (display.value.length > 16)
            {
                return;
            }

            if (display.value === "0")
            {
                display.value = "";
            }

            display.value = display.value + value;
        }

        function clear()
        {
            display.value = "0";
            calculatingValue = 0;
            totalValue = 0;
        }

        function addition()
        {
            
        }

        function subtraction()
        {
               
        }

        function multiplication()
        {

        }
        
        function division()
        {

        }

        function equals()
        {
            display.value = totalValue;
        }

        return  {
            display,
            calculatingValue,
            totalValue,
            updateDisplay,
            clear,
            addition,
            subtraction,
            multiplication,
            division,
            equals,
        };
    }
}
</script>

<style>

</style>