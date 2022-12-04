<template>
  <div class="body" :class="price ? 'background' : ''">
    <div class="center">
      <div v-if="hour != '00:00'" class="hours">
        <span>{{ hour }}</span>
      </div>
      <div v-if="price" class="price">
        <span>R$ {{ price }},00</span>
      </div>
      <div class="table" :style="price ? '' : 'font-size:18px;'">
        <span>Mesa {{ id }}</span>
      </div>
    </div>
    <div class="add" @click="addProduct(id)">+</div>
    <div v-if="price" class="pay" @click="checkout(id)">$</div>
  </div>
</template>
    
  <script>
export default {
  name: "TableUnit",
  props: {
    hour: String,
    price: Number,
    id: Number,
  },
  data() {
    return {};
  },
  methods: {
    addProduct(id) {
      this.$router.push({
        name: "Order",
        params: {
          id: id,
        },
      });
    },
    checkout(id) {
      this.$router.push({
        name: "Checkout",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>
    
  <style lang="scss" scoped>
@import "../../scss/table/table.scss";
@import "../../scss/colors";

.background {
  background-color: $background_color;
}
</style>