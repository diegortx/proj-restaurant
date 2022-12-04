<template>
  <div class="main">
    <div class="body-card">
      <div class="title-card">Novo Pedido</div>
      <div v-for="(order, index) in table.order" :key="index" class="menu">
        <div class="menu-1-0">
          <div>Produtos</div>
          <div>+</div>
        </div>
        <hr />
        <table>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Qnt</th>
          </tr>
          <tr v-for="(product, index) in order" :key="index">
            <td>{{ product.name }}</td>
            <td>R${{ product.price }},00</td>
            <td>
              <div class="menu-1-1-3">
                <button
                  class="menu-1-1-3-sum"
                  @click="product.count++ | sum(product.price)"
                >
                  +
                </button>
                <div class="menu-1-1-3-num">{{ product.count }}</div>
                <button
                  class="menu-1-1-3-sub"
                  :disabled="product.count == 0"
                  @click="product.count-- | sub(product.price)"
                >
                  -
                </button>
              </div>
            </td>
          </tr>
        </table>
        <hr />
      </div>
      <div class="menu-footer">
        <div class="table">Mesa {{ table.id }}</div>
        <div class="account">Total: R$ {{ value }}</div>
      </div>

      <div class="buttom">
        <button class="cancel" @click="toHome">Cancelar</button>
        <button class="apply" @click="apply">Confirmar</button>
      </div>
    </div>
  </div>
</template>
    
<script>
import date from "../../helpers/date";
export default {
  name: "OrderScreen",
  props: {},
  components: {},
  data() {
    return {
      table: [],
      value: 0,
    };
  },

  mounted() {
    this.table = this.$store.state.tables.find(
      (table) => table.id == this.$route.params.id
    );
    this.value = this.table.value;
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
      });
    },
    apply() {
      this.$store.commit("setCount", {
        id: this.$route.params.id,
        value: this.value,
        hour: date.dateHourNow(),
      });

      this.toHome();
    },
    sum(price) {
      this.value = this.value + price;
    },
    sub(price) {
      this.value = this.value - price;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../scss/order/order.scss";
</style>