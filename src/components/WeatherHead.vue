<template>
  <div class="container">
    <a href="http://localhost:5173/"><h1 class="title">天気予報アプリ 🌤</h1></a>
    <div class="search-bar">
      <input
        type="text"
        v-model="city"
        @keyup.enter="fetchWeather"
        placeholder="都市名を输入 (例: Tokyo)"
        class="search-input"
      />
      <v-btn
        class="search-btn"
        @click="fetchWeather"
        color="transparent"
        height="40"
        min-width="80"
      ><v-icon>mdi-search-web</v-icon></v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
//导入区域
import {fetchWeather,city} from "@/Tsfile/useWeather";
</script>

<style scoped>
a {
  text-decoration: none;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px; /* 距离页面顶部 */
}
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
}
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
}
.search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
  font-size: 1rem;
  outline: none;
}
.search-btn {
  border-radius:0 20px 20px 0;
  font-size: 1rem;
  min-width: 80px;
  padding: 0 16px;
  margin-left: -1px;
}
</style>