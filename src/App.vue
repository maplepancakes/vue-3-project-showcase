<template>
  <NavigationBar/>
  <router-view></router-view>
</template>

<script>
import NavigationBar from "./components/AppHeader.vue";
export default
{
  components:
  {
    NavigationBar,
  }
}
</script>