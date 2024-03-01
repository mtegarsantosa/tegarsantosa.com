<template>
    <div>
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">
                        {{info.name.toLowerCase().replace( /\s/g, '')}}.
                    </a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><router-link :to="{name: 'home'}" class="nav__link">🏡 home.</router-link></li>
                        <li class="nav__item"><router-link :to="{name: 'about'}" class="nav__link">👦 about.</router-link></li>
                        <!-- <li class="nav__item"><router-link :to="{name: 'project'}" class="nav__link">💻️ projects.</router-link></li> -->
                        <li class="nav__item"><router-link :to="{name: 'experience'}" class="nav__link">💼 experiences.</router-link></li>
                        <li class="nav__item"><router-link :to="{name: 'skill'}" class="nav__link">🤹 skills.</router-link></li>
                        <li class="nav__item"><router-link :to="{name: 'achievement'}" class="nav__link">🏅 achievements.</router-link></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='fa fa-stream'></i>
                </div>
            </nav>
        </header>
        <main class="l-main">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                  <component :is="Component" />
                </transition>
            </router-view>
        </main>
        <footer class="footer">
            <div class="footer__title">{{info.name.toLowerCase().replace( /\s/g, '')}}</div>
            <div class="footer__social">
                <a target="_blank" :href="info.facebook" class="footer__icon"><i class='fab fa-facebook-f' ></i></a>
                <a target="_blank" :href="info.instagram" class="footer__icon"><i class='fab fa-instagram' ></i></a>
                <a  target="_blank" :href="`tel:${info.phone}`" class="footer__icon"><i class='fa fa-phone' ></i></a>
            </div>
            <p class="footer__copy">&#169; {{new Date().getFullYear()}} - Made with ❤️ and 🎧️</p>
        </footer>
    </div>
</template>

<script>
export default {
    methods: {
        showMenu(toggleId, navId) {
            const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

            if(toggle && nav){
                toggle.addEventListener('click', ()=>{
                    nav.classList.toggle('show')
                })
            }
        },
        linkAction(){
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show')
        }
    },
    mounted() {
        this.showMenu('nav-toggle','nav-menu')
        const navLink = document.querySelectorAll('.nav__link')
        navLink.forEach(n => n.addEventListener('click', this.linkAction))
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>