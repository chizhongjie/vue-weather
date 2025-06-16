import { ref, type Ref } from "vue";
import { type Weather } from "@/Tsfile/interface";
import axios from 'axios'


export const fetchWeather = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city.value}&days=7&lang=zh`
    try {
        const res = await axios.get(url)
        weather.value = res.data as Weather;
        selectedForecastIndex.value = 0;
    } catch (error) {
        console.error('天気情報取得エラー:', error)
        alert('都市名が正しいか確認してください')
    }
}
export const city = ref('')
export const apiKey = '521afb1e658040ab90e03258251206'
export const weather: Ref<Weather | null> = ref(null);
export const selectedForecastIndex: Ref<number> = ref(-1);
