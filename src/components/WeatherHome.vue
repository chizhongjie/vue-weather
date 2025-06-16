<template>
    <div class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-orange-1000">
    <h1 class="text-xl font-bold mb-4">天気予報アプリ 🌤</h1>

    <div class="mb-4">
      <input v-model="city" @keyup.enter="fetchWeather" type="text" placeholder="都市名を入力 (例: Tokyo)"
        class="w-full p-2 border rounded" />
        <button @click="fetchWeather">查询</button>
    </div>

    <div v-if="weather">
      <h2 class="text-lg font-semibold">📍 {{ weather.location.country }}-{{ weather.location.name }}</h2>
      <p>現在: {{ weather.current.temp_c }}°C / {{ weather.current.condition.text }}</p>
      <img :src="'https:' + weather.current.condition.icon" alt="天気アイコン" />

      <div class="mt-4">
        <h3 class="font-semibold">明日の予報:</h3>
        <p>🌡 最高: {{ weather.forecast.forecastday[1].day.maxtemp_c }}°C</p>
        <p>🌡 最低: {{ weather.forecast.forecastday[1].day.mintemp_c }}°C</p>
        <p>🌤 状況: {{ weather.forecast.forecastday[1].day.condition.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import SideBar from "@/components/Sidebar.vue";

import { ref } from 'vue'
import axios from 'axios'
import { type Weather } from '@/Tsfile/interface'

const apiKey = '521afb1e658040ab90e03258251206'
const city = ref('')
// 型定義


const weather = ref < Weather | null > (null)

const fetchWeather = async () => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city.value}&days=-1&lang=zh`
  try {
    const res = await axios.get<Weather>(url)
    weather.value = res.data
  } catch (error) {
    console.error('天気情報取得エラー:', error)
    alert('都市名が正しいか確認してください')
  }
}

// 初期ロード時に東京の天気を表示
fetchWeather()
</script>

<style scoped>
body {
  font-family: "Helvetica Neue", sans-serif;
  background: #f0f4f8;
}
</style>