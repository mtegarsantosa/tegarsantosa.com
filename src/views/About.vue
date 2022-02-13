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
                  I'm just an ordinary person who loves technology, music, and traveling.
                </p>
            </div>                  
        </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
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
  }
}
</script>
