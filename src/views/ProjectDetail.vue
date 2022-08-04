<template>
    <div>
        <section class="section" id="projectdetail">
            <h2 class="section-title">{{$route.params.dir.replaceAll("-", " ")}}.</h2>
            <div class="projectdetail__container bd-grid">
                <p v-html="files.description"></p>
            </div>
            <div class="projectdetail__container bd-grid">
                <b>Stack:</b>
                <div v-html="files.stack"></div>
            </div>
            <div class="projectdetail__container bd-grid">
                <b>My Involvement:</b>
                <div v-html="files.involvement"></div>
            </div>
            <div class="projectdetail__container bd-grid">
                <div class="projectdetail__file" v-for="(file, index) in files.files" :key="index">
                    <img
                        v-if="
                            file.extension === '.png' ||
                            file.extension === '.PNG' ||
                            file.extension === '.jpg' ||
                            file.extension === '.JPG' ||
                            file.extension === '.jpeg' ||
                            file.extension === '.JPEG'
                        "
                        :src="`${$env.VUE_APP_PROJECT_URL}/${file.fileName}`"
                    >
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                files: []
            }
        },
        methods: {
            async getFiles() {
                let files  = await this.$axios.get(`${this.$env.VUE_APP_PROJECT_URL}/getFiles`, {
                    params: {
                        dir: this.$route.params.dir
                    }
                })
                this.files = files.data
            }
        },
        mounted() {
            this.getFiles()
        }
    }
</script>