<template>
    <div class="w-full flex mt-10">
        <div class="m-auto p-10">
            <h1 class="text-3xl text-center font-bold text-gray-400 mt-5 mb-2">Calendar App</h1>
            <div class="flex mb-2 justify-between">
                <button @click="previousMonth">Prev</button>
                <h3 class="font-bold">{{ getMonthName() }} {{ year }}</h3>
                <button @click="nextMonth">Next</button>
            </div>
            <section class="flex border">
                <p class="m-1 text-center" style="width: 14.28%;" v-for="day in days" :key="day">{{ day }}</p>
            </section>
            <section class="flex border flex-wrap" style="max-width: 430px;">
                <p class="text-center mt-1 mb-1" style="width: 14.28%;" v-for="emptyDisplay in getStartDayForMonth()" :key="emptyDisplay"></p>
                <p class="text-center mt-1 mb-1" style="width: 14.28%;" v-for="date in getDateForMonth()" :key="date" :class="highlightCurrentDate(date.toString())">{{ date }}</p>
            </section>
            <p class="text-gray-400 mt-2">Current time: {{ currentHour }}:{{ currentMinute }}:{{ currentSecond }}</p>
        </div>
    </div>
</template>

<script>
export default
{
    data()
    {
        return {
            currentDate: this.getCurrentDate(),
            currentHour: this.getCurrentHour(),
            currentMinute: this.getCurrentMinute(),
            currentSecond: this.getCurrentSecond(),
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        }
    },
    methods:
    {
        isLeapYear()
        {
            if (this.year % 4 !== 0)
            {
                return true;
            }
        },
        getMonthName()
        {
            if (this.month === 0)
            {
                return "January";
            }
            else if (this.month === 1)
            {
                return "February";
            }
            else if (this.month === 2)
            {
                return "March";
            }
            else if (this.month === 3)
            {
                return "April";
            }
            else if (this.month === 4)
            {
                return "May";
            }
            else if (this.month === 5)
            {
                return "June";
            }
            else if (this.month === 6)
            {
                return "July";
            }
            else if (this.month === 7)
            {
                return "August";
            }
            else if (this.month === 8)
            {
                return "September";
            }
            else if (this.month === 9)
            {
                return "October";
            }
            else if (this.month === 10)
            {
                return "November";
            }
            else if (this.month === 11)
            {
                return "December";
            }
        },
        getDateForMonth()
        {
            return new Date(this.year, this.month + 1, 0).getDate();
        },
        getStartDayForMonth()
        {
            return new Date(this.year, this.month, 1).getDay();
        },
        nextMonth()
        {
            this.month++;

            if (this.month > 11)
            {
                this.month = 0;
                this.year++;
            }
        },
        previousMonth()
        {
            this.month--;
            
            if (this.month < 0)
            {
                this.month = 11;
                this.year--;
            }
        },
        getCurrentDate()
        {
            return new Date().getDate().toString().padStart(2, "0");
        },
        getCurrentHour()
        {
            return new Date().getHours().toString().padStart(2, "0");
        },
        getCurrentMinute()
        {
            return new Date().getMinutes().toString().padStart(2, "0");
        },
        getCurrentSecond()
        {
            return new Date().getSeconds().toString().padStart(2, "0");
        },
        highlightCurrentDate(date)
        {
            if (this.currentDate === date && this.month === new Date().getMonth() && this.year === new Date().getFullYear())
            {
                return "text-red-500 font-bold";
            }
        },
    },
    mounted()
    {
        setInterval(() => 
        {
            this.currentDate = this.getCurrentDate();
            this.currentHour = this.getCurrentHour();
            this.currentMinute = this.getCurrentMinute();
            this.currentSecond = this.getCurrentSecond();
        }, 1000);
    },
}
</script>

<style>

</style>