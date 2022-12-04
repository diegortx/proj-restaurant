<template>
  <div class="body">
    <div class="center">
      <div class="name">
        Olá
        <div class="idt">Diego !</div>
      </div>
      <div class="date">
        <div class="day">{{ dayWeek }}</div>
        <div class="hours">{{ dateNow }}</div>
      </div>
    </div>
  </div>
</template>
    
  <script>
import date from "../../helpers/date";
export default {
  name: "TopMenu",
  props: {},
  components: {},
  methods: {},
  data() {
    return {
      dayWeek: "",
      dateNow: "",
    };
  },
  mounted() {
    this.dayWeek = date.weekDay();
    this.dateNow = date.dateNow();
  },
};
</script>
    
<style scoped>
@import "../../scss/topMenu/topMenu.scss";
</style>