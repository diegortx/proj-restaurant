<template>
  <div id="app">
    <top-menu />
    <hr />
    <div class="container-router">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopMenu from "./components/topMenu/TopMenu.vue";
export default {
  name: "App",
  components: {
    TopMenu,
  },
};
</script>

<style>
.container-router {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
