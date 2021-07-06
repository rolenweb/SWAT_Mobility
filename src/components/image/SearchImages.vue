<template>
  <div class="container images">
    <h1 class="title">SWAT Unsplash Take Home</h1>
    <div class="search">
      <b-form-input v-model="search" placeholder="Type something to search for image"></b-form-input>
    </div>
    <b-overlay :show="loading" rounded="sm">
      <div class="list row mt-3">
        <div v-for="image in images" :key="image.id" class="col-xl-3 col-sm-6 mt-2">
          <b-link :href="image.urls.full" target="_blank">
            <b-img :src="image.urls.small" fluid alt="Responsive image"></b-img>
          </b-link>

        </div>
      </div>
      <div class="mt-3" v-if="images.length > 0">
        <b-pagination
            v-model="page"
            :total-rows="totalRows"
            :per-page="16"
            align="center">

        </b-pagination>
      </div>
    </b-overlay>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SearchImages",
  data() {
    return {
      search: this.$route.query.query,
      page: this.$route.query.page ? this.$route.query.page : 1
    }
  },
  computed: {
    ...mapGetters("image",['images', 'loading', 'totalRows'])
  },
  methods: {
    ...mapActions('image', ['fetchImages']),
    updateListImages() {
      let query = {
        query: this.search,
        page: this.page
      }

      this.$router.push(`${this.$router.history.current.path}?${new URLSearchParams(query).toString()}`)

      this.fetchImages(query)
    }
  },
  mounted() {
    this.fetchImages(this.$route.query)
  },
  watch: {
    search: function () {
      this.updateListImages()
    },
    page: function () {
      this.updateListImages()
    }
  }
}
</script>

<style scoped lang="scss">
  .images {
    .title {
      text-transform: uppercase;
      text-align: center;
    }
  }
</style>