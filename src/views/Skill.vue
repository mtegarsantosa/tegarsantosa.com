<template>
  <div>
    <section class="skills section" id="skills">
      <h2 class="section-title">skills.</h2>

      <div class="skills__container bd-grid">
        <div v-for="(skill, index) in skills" :key="index">
          <h2 class="skills__subtitle">{{skill.emoji}} ~ {{skill.title}}</h2>

          <div class="skills__data" v-for="(list, index) in skills[index].lists" :key="index">
            <div class="skills__names">
              <i :class='`${list.icon} skills__icon`'></i>
              <span class="skills__name">{{list.name}}</span>
            </div>
            <div class="skills__bar"></div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        skills: [{
          title: 'Cloud Computing',
          emoji: '☁️',
          lists: [
          {
            name: 'Google Cloud',
            icon: 'fab fa-google'
          },
          {
            name: 'Docker',
            icon: 'fab fa-docker'
          },
          {
            name: 'Kubernetes',
            icon: 'fa fa-asterisk'
          },
          {
            name: 'Terraform',
            icon: 'fa fa-cubes'
          }]
        },
        {
          title: 'Blockchain',
          emoji: '💽',
          lists: [{
            name: 'Komodo',
            icon: 'fa fa-cubes'
          },
          {
            name: 'Solidity',
            icon: 'fab fa-ethereum'
          },
          {
            name: 'NFT',
            icon: 'fa fa-photo-video'
          },
          {
            name: 'Cryptocurrency',
            icon: 'fab fa-btc'
          }]
        },
        {
          title: 'Native',
          emoji: '⚒️',
          lists: [{
            name: 'Javascript',
            icon: 'fab fa-js-square'
          },
          {
            name: 'Python',
            icon: 'fab fa-python'
          },
          {
            name: 'PHP',
            icon: 'fab fa-php'
          }]
        },
        {
          title: 'Web Framework',
          emoji: '🗃️',
          lists: [{
            name: 'Laravel',
            icon: 'fab fa-laravel'
          },
          {
            name: 'Express Js',
            icon: 'fa fa-shipping-fast'
          },
          {
            name: 'Vue Js',
            icon: 'fab fa-vuejs'
          }]
        },
        {
          title: 'Virtual Tech',
          emoji: '🪗',
          lists: [{
            name: 'Node Js',
            icon: 'fab fa-node-js'
          },
          {
            name: 'Tensorflow',
            icon: 'fa fa-brain'
          },
          {
            name: 'AR Js',
            icon: 'fa fa-vr-cardboard'
          }]
        },
        {
          title: 'Writing',
          emoji: '📝',
          lists: [{
            name: 'Blogger',
            icon: 'fab fa-blogger'
          },
          {
            name: 'SEO',
            icon: 'fa fa-search'
          },
          {
            name: 'Adsense',
            icon: 'fa fa-ad'
          }]
        }]
      }
    },
    mounted() {
    }
  }
</script>