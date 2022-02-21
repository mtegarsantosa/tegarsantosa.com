<template>
  <div>
    <section class="project section" id="project">
      <h2 class="section-title">my project.</h2>

      <div class="project__container bd-grid">
        <div v-for="(project, index) in projects" :key="index" class="project__img">
          <div class="project__img_bg" :style="`background: url('${$env.VUE_APP_PROJECT_URL}/${project.thumbnail}'); width: 100%; height:200px; background-size: cover; background-position: center;`">
            <router-link tag="a" :to="{name: 'projectdetail', params: {dir: project.folderName.replaceAll(' ', '-')}}" class="project__link">
                <h3 class="project__link__title">{{project.folderName}}</h3>
            </router-link>
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
      projects: []
    }
  },
  methods: {
    async getProjects() {
      let projects = await this.$axios.get(`${this.$env.VUE_APP_PROJECT_URL}/getFolders`)
      this.projects = projects.data
      console.log(this.projects)
    }
  },
  mounted() {
    this.getProjects()
  }
}
</script>