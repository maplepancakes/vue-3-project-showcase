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
                <button ref="divide" @click="operate('/')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">/</button>
                <button ref="four" @click="updateDisplay('4')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">4</button>
                <button ref="five" @click="updateDisplay('5')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">5</button>
                <button ref="six" @click="updateDisplay('6')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">6</button>
                <button ref="multiply" @click="operate('*')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">*</button>
                <button ref="one" @click="updateDisplay('1')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">1</button>
                <button ref="two" @click="updateDisplay('2')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">2</button>
                <button ref="three" @click="updateDisplay('3')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">3</button>
                <button ref="add" @click="operate('+')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">+</button>
                <button ref="zero" @click="updateDisplay('0')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">0</button>
                <button ref="equal" @click="equals()" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">=</button>
                <button ref="zero" @click="clear()" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">CLEAR</button>
                <button ref="minus" @click="operate('-')" :class="defaultButtonHoverStyle()" class="border shadow w-full h-12">-</button>
            </div>
      </div>
  </div>
</template>7

<script>
import defaultButtonHoverStyle from "../mixins/defaultButtonHoverStyle.js";
import { ref } from "vue";

export default 
{
    mixins: [defaultButtonHoverStyle],
    setup()
    {
        const display = ref("0");

        let storedValue = 0;
        let operator = "";
        let operatorInUse = false;

        function updateDisplay(value)
        {
            if (display.value.length > 16)
            {
                return;
            }

            if (display.value === "0" || operatorInUse)
            {
                display.value = "";
                operatorInUse = false;
            }

            display.value = display.value + value;
        }

        function calculate()
        {       1
            if (operator === "")
            {
                return;
            }
            else if (operator === "+")
            {
                display.value = storedValue + parseInt(display.value); // add
            }
            else if (operator === "-")
            {
                display.value = storedValue - parseInt(display.value); // subtract
            }
            else if (operator === "*")
            {
                display.value = storedValue * parseInt(display.value); // multiply
            }
            else if (operator === "/")
            {
                display.value = storedValue / parseInt(display.value); // divide
            }

            if (Number.isNaN(parseInt(display.value)))
            {
                display.value = "0";
            }
        }

        function operate(value)
        {
            if (parseInt(display.value) === storedValue && operatorInUse)
            {
                return;
            }

            operatorInUse = true;
            
            if (storedValue === 0)
            {
                storedValue = parseInt(display.value);
                operator = value;

                return;
            }

            calculate();

            storedValue = parseInt(display.value);
            operator = value;
        }

        function equals()
        {
            if (parseInt(display.value) === storedValue && operatorInUse)
            {
                return;
            }
            
            calculate();

            storedValue = 0;
            operator = "";
        }

        function clear()
        {
            display.value = "0";
            storedValue = 0;
            operatorInUse = false;
            operator = "";
        }

        return  {
            display,
            storedValue,
            operatorInUse,
            operator,
            calculate,
            operate,
            updateDisplay,
            clear,
            equals,
        };
    }
}
</script>

<style>

</style>