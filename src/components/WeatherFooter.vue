<template>
    <div class="d-flex justify-center al" style="margin-top: 25px;">
        <v-slide-group v-model="selectedForecastIndex" class="pa-2" show-arrows center-active>
            <v-slide-group-item v-if="selectedForecastIndex >= 0 && weather"
                v-for="(_forecast, index) in weather.forecast.forecastday" :key="index" :value="index">
                <v-btn :color="selectedForecastIndex === index ? 'deep-purple-lighten-2' : 'deep-purple-lighten-5'"
                    @click="assignIndex(index)" class="mx-2" style="min-width: 120px;" elevation="2">
                    <v-icon left>mdi-history</v-icon>
                    {{ weather.forecast.forecastday[index].date }}
                </v-btn>
            </v-slide-group-item>
        </v-slide-group>
    </div>
</template>

<script setup lang="ts">
import { weather, selectedForecastIndex } from '@/Tsfile/useWeather';

const assignIndex = (i: number) => {
    selectedForecastIndex.value = i;
}
</script>