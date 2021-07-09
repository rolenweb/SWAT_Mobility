<template>
  <div>
    <b-table striped hover :items="uniqueListByName" :fields="fields"></b-table>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PokemonList",
  data() {
      return {
        fields: [
          {
            key: 'pokemon_name',
            sortable: true
          },
          {
            key: 'base_attack',
            sortable: false
          },
        ]
      }
  },
  computed: {
      ...mapGetters('pokemon', ['list']),
      uniqueListByName: function () {
        let uniqueArray = [];
        return this.list.filter(function (item) {
          if (!uniqueArray.includes(item.pokemon_name)) {
            uniqueArray.push(item.pokemon_name)
            return true
          }else {
            return false
          }

        })
      }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>

</style>