<template>
  <div class="about">
    <section class="about section" id="about">
        <h2 class="section-title">about me.</h2>

        <div class="about__container bd-grid">
            <div class="about__img">
                <img src="/img/about.jpg" alt="Tegar Santosa">
            </div>
            
            <div>
                <h2 class="about__subtitle">Oh, hello again! <br/> I'am {{info.name}}</h2>
                <p class="about__text">
                  Born and grew as a homosapiens in Lampung ⛰️, part of Indonesia 🇮🇩, {{getAge('2002-04-01')}} years ago. 
                  Currently living in Island of God, Bali, Indonesia 🌊🌼.
                  <br/><br/>
                  I'm just an ordinary person who loves technology, music, writing, and traveling. 
                  I am very excited to learn and have a chat with other people. Even though sometimes I prefer to be a listener.
                </p>
            </div>                  
        </div>
        <div class="bd-grid about__desc">
          <div>
              <h2>Travel Log.</h2>
              <p class="about__text">
              </p>
          </div>
          <ul>
            <li v-for="(travelImage, index) in travelImages" :key="index" :style="`transform: rotate(${travelImage.rotate}deg)`">
              <img :src="`/img/travels/${travelImage.path}`" width="200">
              <p>{{travelImage.name}} #{{index+1}}</p>
            </li>
          </ul>
        </div>
    </section>
  </div>
</template>

<style scoped>
ul {
  margin:0;
  padding: 100px 0;
  font-family: 'Homemade Apple';
  text-align: center;
  background-image: url('/img/wood.jpg');
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
  data() {
    return {
      travelImages: []
    }
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.travelImages.push({ path: key })));
      this.travelImages.map((val, index) => {
        let oddEven = index % 2 ? "+15" : "-15"
        this.travelImages[index].name = val['path'].split("./")[1].split(".jpg")[0]
        this.travelImages[index].rotate =  Math.floor(Math.random() * parseInt(oddEven))
      })
    },
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
    }
  },
  mounted() {
    this.importAll(require.context('../../public/img/travels/', true, /\.jpg$/))
  }
}
</script>