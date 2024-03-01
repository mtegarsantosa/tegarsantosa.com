<template>
  <div>
    <div class="home">
      <section class="home bd-grid" id="home">
      <div class="home__data">
        <h1 class="home__title">Hi, 👋🧑‍💻<br>I'am <span class="home__title-color">{{info.name}}</span><br> {{info.role}}</h1>
        <p><i>who is also interested in #Music, #Traveling, #Astronomy.</i></p>
        <br/>
        <p>
          currently working on <a href="javascript:">{{info.currentWork.field}}</a> at 
          <a target="_blank" :href="info.currentWork.at.link">{{info.currentWork.at.name}}</a>.
        </p>

        <div class="home__button">
          <router-link :to="{name: 'about'}" class="button button-tertiary">About me</router-link>
          <a href="https://www.canva.com/design/DAEe0FFkFkc/2agFIleJDZY0-F8K1WJkEQ/view" class="button button-link"><i class='bx bxl-cloud-download'></i>Download CV</a>
        </div>
      </div>

      <div class="home__social">
        <a target="_blank" :href="`mailto:${info.email}`" class="home__social-icon"><i class='fa fa-envelope'></i></a>
        <a target="_blank" :href="`${info.linkedin}`" class="home__social-icon"><i class='fab fa-linkedin'></i></a>
        <a target="_blank" :href="`${info.github}`" class="home__social-icon"><i class='fab fa-github'></i></a>
        <a target="_blank" :href="`${info.spotify}`" class="home__social-icon"><i class='fab fa-spotify'></i></a>
      </div>

      <div class="home__img">
        <lottie :options="lottieHomeOptions" style="width:100%"/>
      </div>
    </section>
    </div>

    <!-- <section class="blog">
      <div class="blog__title">being on an adventure keeps us alive. <a href="#">Explore my scrapebook.</a></div>
    </section> -->
  </div>
</template>

<script>
  import lottie from 'vue-lottie'
  import lottieHome from '@/assets/lottie/lottie-home.json'

  export default {
    name: 'HomePage',
    components: {
      lottie,
    },
    data() {
      return {
        lottieHomeOptions: {animationData: lottieHome}
      }
    },
    methods: {
      formatMDY(d) {
        d = new Date(d) || new Date();
        return ('0' + (d.getMonth() + 1)).slice(-2) + '/' +
              ('0' + d.getDate()).slice(-2) + '/' +
              ('000' + d.getFullYear()).slice(-4);
      }
    },
    mounted() {
    }
  }
</script>