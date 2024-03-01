<template>
    <div>
        <section class="section">
            <h2 class="section-title">page not found.</h2>
            <div class="bd-grid lottie">
                <lottie :options="lottie404Options"/>
            </div>
        </section>
    </div>
</template>
<script>
import lottie from 'vue-lottie'
import lottie404 from '@/assets/lottie/not-found.json'

export default {
components: {
    lottie,
  },
  data() {
    return {
      lottie404Options: {animationData: lottie404}
    }
  },
}
</script>

<style scoped>
.lottie {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>