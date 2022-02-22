<template>
  <div>
    <div class="home">
      <section class="home bd-grid" id="home">
      <div class="home__data">
        <h1 class="home__title">Hi, 👋🧑‍💻<br>I'am <span class="home__title-color">{{info.name}}</span><br> Software Engineer</h1>
        <p><i>who is also interested in #Music, #Traveling, #Astronomy.</i></p>
        <br/>
        <p>
          currently working on <a href="javascript:">{{info.currentWork.field}}</a> at 
          <a target="_blank" :href="info.currentWork.at.link">{{info.currentWork.at.name}}</a>.
        </p>

        <div class="home__button">
          <router-link :to="{name: 'about'}" class="button button-tertiary">About me</router-link>
          <a href="/CV-Tegar-Santosa.pdf" download="/CV-Tegar-Santosa.pdf" class="button button-link"><i class='bx bxl-cloud-download'></i>Download CV</a>
        </div>
      </div>

      <div class="home__social">
        <a target="_blank" :href="`mailto:${info.email}`" class="home__social-icon"><i class='fa fa-envelope'></i></a>
        <a target="_blank" :href="`${info.linkedin}`" class="home__social-icon"><i class='fab fa-linkedin'></i></a>
        <a target="_blank" :href="`${info.github}`" class="home__social-icon"><i class='fab fa-github'></i></a>
      </div>

      <div class="home__img">
        <lottie :options="lottieHomeOptions" style="width:100%"/>
      </div>
    </section>
    </div>

    <section class="blog">
      <div class="blog__title">Writings.</div>
        <div class="blog__container bd-grid">
          <div class="blog__link">
            <div class="blog__platform">
              <h2>Blogger</h2>
              <b>Indonesian Technology Blog</b>
            </div>
            <ul>
              <li v-if="bloggerPosts.length == 0">
                Loading...
              </li>
              <li v-else v-for="(bloggerPost, index) in bloggerPosts" :key="index">
                <a target="_blank" :href="bloggerPost.url">
                  {{bloggerPost.title}}
                </a>
                <br>
                <small><i>{{formatMDY(bloggerPost.published)}}</i></small>
              </li>
              <b><a href="https://teziger.blogspot.com">view more...</a></b>
            </ul>
          </div>
          <div class="blog__link">
            <div class="blog__platform">
              <h2>Dev.to</h2>
              <b>Community Blog for Devs</b>
            </div>
            <ul>
              <li v-if="devtoPosts.length == 0">
                Loading...
              </li>
              <li v-else v-for="(devtoPost, index) in devtoPosts" :key="index">
                <a target="_blank" :href="devtoPost.url">{{devtoPost.title}}</a>
                <br>
                <small><i>{{formatMDY(devtoPost.published_at)}}</i></small>
              </li>
              <b><a href="https://dev.to/mtegarsantosa">view more...</a></b>
            </ul>
          </div>
          <div class="blog__link">
            <div class="blog__platform">
              <h2>Medium</h2>
              <b>Personal Blockchain Writings</b>
            </div>
            <ul>
              <li>
                <i>SOON!</i>
              </li>
            </ul>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
  import lottie from 'vue-lottie'
  import lottieHome from '@/assets/lottie/lottie-home.json'

  export default {
    name: 'Home',
    components: {
      lottie,
    },
    data() {
      return {
        lottieHomeOptions: {animationData: lottieHome},
        bloggerPosts: [],
        devtoPosts: []
      }
    },
    methods: {
      formatMDY(d) {
        d = new Date(d) || new Date();
        return ('0' + (d.getMonth() + 1)).slice(-2) + '/' +
              ('0' + d.getDate()).slice(-2) + '/' +
              ('000' + d.getFullYear()).slice(-4);
      },
      async getBloggerPosts() {
        let response = await this.$axios.get('https://www.googleapis.com/blogger/v3/blogs/185798562776123304/posts', {
          params: {
            key: 'AIzaSyCfOAU8-ilDdx6rp9dziIMJLoOTgS3s_Qc',
            fetchBodies: false,
            fetchImages: true,
            maxResults: 4
          }
        })
        this.bloggerPosts = response.data.items
      },
      async getDevtoPosts() {
        let response = await this.$axios.get('https://dev.to/api/articles', {
          params: {
            username: 'mtegarsantosa',
            per_page: 4
          }
        })
        this.devtoPosts = response.data
      }
    },
    mounted() {
      this.getBloggerPosts()
      this.getDevtoPosts()
    }
  }
</script>