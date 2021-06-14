<template>
  <NavigationBar/>
  <CalendarApp/>
</template>

<script>
import NavigationBar from "./components/AppHeader.vue";
// import ListApp from "./components/ListApp.vue";
import CalendarApp from "./components/CalendarApp.vue";

export default
{
  components:
  {
    NavigationBar,
    // ListApp,
    CalendarApp,
  }
}
</script>
