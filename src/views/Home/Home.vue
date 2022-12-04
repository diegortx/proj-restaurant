<template>
  <div class="main">
    <tables
      v-for="(table, index) in tables"
      :key="index"
      :id="table.id"
      :hour="table.hour"
      :price="table.value"
    />
  </div>
</template>
  
<script>
import Tables from "../../components/tables/Tables.vue";

export default {
  name: "HomeScreen",
  props: {},
  components: {
    Tables,
  },

  data() {
    return {
      tables: [],
    };
  },

  mounted() {
    this.tables = this.$store.state.tables;
  },

  computed: {},

  methods: {},
};
</script>
  
<style lang="scss" scoped>
@import "../../scss/home/home.scss"
</style>