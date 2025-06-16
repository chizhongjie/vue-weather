import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

// 引入mdi图标库
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'




const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light', // 默认白天模式
    themes: {
      light: { // 白天模式配色
        colors: {
          primary: '#1976D2',
          background: '#FFFFFF',
        }
      },
      dark: { // 夜间模式配色
        colors: {
          primary: '#2196F3',
          background: '#121212',
        }
      }
    }
  }
})




createApp(App).use(vuetify).mount('#app')

