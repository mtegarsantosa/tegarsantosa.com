import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const info = {
    name: 'Tegar Santosa',
    role: 'Software Engineer',
    email: 'hello@tegarsantosa.com',
    linkedin: 'https://linkedin.com/in/mtegarsantosa',
    github: 'https://github.com/mtegarsantosa',
    facebook: 'https://facebook.com/mtegarsantosa',
    instagram: 'https://instagram.com/mtegarsantosa',
    phone: '+6281379947983',
    currentWork: {
        field: '🧊 Blockchain Technology',
        at: {
            name: '🏝️ Itsavirus',
            link: 'https://itsavirus.com'
        }
    }
}

const app = createApp(App)
app.config.globalProperties.info = info
app.config.globalProperties.$axios = axios
app.config.globalProperties.$env = process.env
app.use(router).mount('#app')
