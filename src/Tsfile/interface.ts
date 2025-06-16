export interface Weather {
    location: {
        name: string
        country: string
        localtime: string
    }
    current: {
        temp_c: number
        condition: {
            text: string
            icon: string //src="'https:' + weather.current.condition.icon" 如果要调的话这么调
        }
        wind_kph: number //风速
        pressure_mb: number //气压
        precip_mm: number //降水量
        feelslike_c: number //体感温度
        uv: number //紫外线指数
    } //以上都是当前的数据，虽然不一定会用到，但是先定义了


    forecast: {
        forecastday: Array<{
            date: string // 日期（序列号0是今天1是明天）
            day: {
                maxtemp_c: number //最高温
                mintemp_c: number//最低温
                condition: {
                    text: string
                    icon: string
                }
                uv: number
            }
            astro: {
                sunrise: string
                sunset: string
            }

        }>
    }
}