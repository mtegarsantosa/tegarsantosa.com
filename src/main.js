import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const info = {
    name: 'Tegar Santosa',
    role: 'Devops Engineer',
    email: 'hello@tegarsantosa.com',
    linkedin: 'https://linkedin.com/in/mtegarsantosa',
    github: 'https://github.com/mtegarsantosa',
    spotify: 'https://open.spotify.com/user/31lpymooffywngbnxyyfa2flzqmm?si=b22a0a03c20446b6',
    facebook: 'https://facebook.com/mtegarsantosa',
    instagram: 'https://instagram.com/mtegarsantosa',
    phone: '+6281379947983',
    currentWork: {
        field: '⛓️ Blockchain',
        at: {
            name: 'Open Food Chain',
            link: 'https://openfoodchain.com/'
        }
    }
}

const app = createApp(App)
app.config.globalProperties.info = info
app.config.globalProperties.$axios = axios
app.config.globalProperties.$env = process.env
app.use(router).mount('#app')
