<template>
  <NavigationBar/>
  <ListApp/>
</template>

<script>
import NavigationBar from "./components/AppHeader.vue";
import ListApp from "./components/ListApp.vue";

export default
{
  components:
  {
    NavigationBar,
    ListApp,
  }
}
</script>
