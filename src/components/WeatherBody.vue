<template>
    <div class="weather-body-container" v-if="weather">
        <h2 class="weather-title">
            📍 {{ weather.location.country }}-{{ weather.location.name }}の天気一覧
        </h2>
        <div class="weather-info">
            <div class="weather-icon">
                <img :src="'https:' + weather.current.condition.icon" alt="weather.img" />
            </div>
            <div class="weather-data">
                <h3>現在の天気</h3>
                <h4>{{ weather.location.localtime }}</h4>
                <hr>
                <div>温度：{{ weather.current.temp_c }}℃</div>
                <div>风速：{{ weather.current.wind_kph }}kph</div>
                <div>
                    气压：{{ weather.current.pressure_mb }}mb
                    <span>{{ parsePressure(weather.current.pressure_mb) }}</span>
                </div>
                <div>体感温度：{{ weather.current.feelslike_c }}℃</div>
            </div>

            <div class="weather-icon">
                <img :src="'https:' + weather.forecast.forecastday[selectedForecastIndex].day.condition.icon"
                    alt="weather.img" />
            </div>
            <div class="weather-data">
                <h3>天気予報</h3>
                <h4>{{ weather.forecast.forecastday[selectedForecastIndex].date }}</h4>
                <hr>
                <div>最高温度：{{ weather.forecast.forecastday[selectedForecastIndex].day.maxtemp_c }}℃</div>
                <div>最低温度：{{ weather.forecast.forecastday[selectedForecastIndex].day.mintemp_c }}℃</div>
                <div>紫外線指数：{{ weather.forecast.forecastday[selectedForecastIndex].day.uv }}
                    <v-icon>{{ parseUVIcon(weather.forecast.forecastday[selectedForecastIndex].day.uv) }}</v-icon>
                </div>
                <div>日出：{{ weather.forecast.forecastday[selectedForecastIndex].astro.sunrise }}
                    <v-icon>mdi-weather-sunset-up</v-icon></div>
                <div>日落：{{ weather.forecast.forecastday[selectedForecastIndex].astro.sunset }}
                    <v-icon>mdi-weather-sunset-down</v-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { weather } from '@/Tsfile/useWeather';
import { selectedForecastIndex } from '@/Tsfile/useWeather';

const parseUVIcon = (uv: number): string => {
    if (uv > 3)
        return "mdi-white-balance-sunny"
    return "";
}
const parsePressure = (pressure_mb: number): string => {
    if (pressure_mb < 1013.25)
        return "(低)"
    return "(高)"
}

</script>

<style scoped>
.weather-body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
}

.weather-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
}

.weather-info {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 24px 32px;
    min-width: 500px;
    min-height: 300px;
}

.weather-icon {
    margin-right: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.weather-icon img {
    width: 100px;
    height: 100px
}

.weather-data {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 1rem;
}
</style>