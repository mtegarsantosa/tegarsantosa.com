import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const info = {
    name: 'Tegar Santosa',
    role: 'Software Engineer',
    email: 'hello@tegarsantosa.com',
    linkedin: 'https://linkedin.com/in/tegarsantosa',
    github: 'https://github.com/tegarsantosa',
    spotify: 'https://open.spotify.com/user/31lpymooffywngbnxyyfa2flzqmm?si=b22a0a03c20446b6',
    facebook: 'https://facebook.com/mtegarsantosa',
    instagram: 'https://instagram.com/mtegarsantosa',
    phone: '+6281379947983',
    currentWork: {
        field: 'Software & Cloud',
        at: {
            name: '',
            link: '#'
        }
    }
}

const app = createApp(App)
app.config.globalProperties.info = info
app.config.globalProperties.$axios = axios
app.config.globalProperties.$env = process.env
app.use(router).mount('#app')
