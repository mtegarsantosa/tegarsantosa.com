<template>
  <div class="about">
    <section class="about section" id="about">
      <h2 class="section-title">about me.</h2>

      <div class="about__container bd-grid">
        <div class="about__img">
          <img v-lazy="'/img/about.jpg'" alt="Tegar Santosa" class="lazy-image">
        </div>
        
        <div>
            <h2 class="about__subtitle">Oh, hello again! <br/>I am {{info.name}}</h2>
            <p class="about__text">
              Born and grew as a homosapiens in Indonesia, {{getAge('2002-04-01')}} years ago. 
              Currently on my nomadic era, based around South East Asia 🌊🌼.
            </p>
            <br/>
            <p class="about__text">
              {{getAge('2019')}}+ years professionally in tech, working in various roles from software engineering, product development, to technical writing.
              Passionate about building impactful digital products especially web3 and decentralized app, and sharing knowledge with the community.
            </p>
            <br/>
            <p class="about__text">
              I am an active student at <a href="https://president.ac.id/" target="_blank">President University</a>, Indonesia, also a <a href="https://draperuniversity.com/" target="_blank">Draper University</a> alumni in Silicon Valley, USA.
            </p>
        </div>    
      </div>

      <div class="bd-grid about__desc">
        <h2>Travel Log.</h2>
        <p class="about__text">
            A log of my journey traveling the world. I have been to: 🇮🇩🇯🇵🇳🇱🇸🇬🇫🇷🇮🇳🇺🇸🇻🇳🇱🇦🇹🇭🇧🇪🇪🇸🇲🇾, 20000 km of non-stop riding around 4 islands in Indonesia, and 13 mountain climbs.
        </p>
        <ul>
          <li v-for="(travelImage, index) in travelImages" :key="index" :style="`transform: rotate(${travelImage.rotate}deg)`">
            <img 
              v-lazy="`/img/travels/${travelImage.path}`" 
              width="200" 
              alt="Travel photo"
              class="lazy-image"
            >
            <p>{{ travelImage.name }} #{{ index + 1 }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.lazy-image {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(10px);
  transition: opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease;
}
.lazy-image[data-loaded="true"] {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}
ul {
  margin:0;
  padding: 100px 0;
  font-family: 'Homemade Apple';
  text-align: center;
  background-image: url('@/assets/img/wood.jpg');
}

li {
  text-align:center;
  display:inline-block;
  list-style:none;
  position:relative;
  border:solid 12px #fff;
  background:#fff;
  box-shadow:0 0 2px 0px #555;
  transition:all 1s ease;
  -o-transition:all 1s ease;
  -moz-transition:all 1s ease;
  -webkit-transition:all 1s ease;
  box-shadow:0 0 15px 0px #555;
  top:0;
}


li:hover {
  top:-40px;
}

li p {
  margin: 15px 0 0 0;
}
</style>

<script>
export default {
  directives: {
    lazy: {
      mounted(el, binding) {
        // Set placeholder (optional)
        el.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==';

        const loadImage = () => {
          const img = new Image();
          img.src = binding.value;
          img.onload = () => {
            el.src = binding.value;
            el.dataset.loaded = "true";
          };
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(el);
            }
          });
        });
        observer.observe(el);
      }
    }
  },
  data() {
    return {
      travelImages: []
    };
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.travelImages.push({ path: key })));
      this.travelImages.map((val, index) => {
        let oddEven = index % 2 ? "+15" : "-15";
        this.travelImages[index].name = val['path'].split("./")[1].split(".jpg")[0];
        this.travelImages[index].rotate = Math.floor(Math.random() * parseInt(oddEven));
      });
    },
    getAge(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  },
  mounted() {
    this.importAll(require.context('../../public/img/travels/', true, /\.jpg$/));
  }
};
</script>