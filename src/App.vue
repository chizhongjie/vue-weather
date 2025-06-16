<template>
 <!-- <v-btn
    class="theme-toggle"
    @click="toggleTheme"
    color="primary"
    style="position: fixed; top: 24px; right: 24px; z-index: 1000;"
  >
    {{ theme.global.current.value.dark ? '切换白天' : '切换夜晚' }}
  </v-btn> -->
    <WeatherHead />
    <WeatherBody />
    <WeatherFooter />

</template>


<script setup lang="ts">
// import SideBar from "@/components/Sidebar.vue";
// import { useTheme } from 'vuetify'
import WeatherHead from '@/components/WeatherHead.vue';
import WeatherBody from '@/components/WeatherBody.vue';
import WeatherFooter from '@/components/WeatherFooter.vue';

// const theme = useTheme()

// function toggleTheme() {
//   theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
// }
</script>



<style scoped>
body {
  font-family: "Helvetica Neue", sans-serif;
  background: #f0f4f8;
}
</style>
