<template>
  <div class="main">
    <div class="body-card">
      <div class="title-card">Novo Pagamento</div>
      <div class="checkout">
        <table class="ch-1">
          <tr>
            <th>PEDIDO</th>
            <th>QTD.</th>
            <th>HORÁRIO</th>
            <th>UND</th>
            <th>VALOR</th>
          </tr>
          <tr v-for="(order, index) in table.order.products" :key="index">
            <td v-show="order.count != 0">{{ order.name }}</td>
            <td v-show="order.count != 0">{{ order.count }}</td>
            <td v-show="order.count != 0">{{ table.hour }}</td>
            <td v-show="order.count != 0">R${{ order.price }},00</td>
            <td v-show="order.count != 0">
              R$ {{ order.price * order.count }},00
            </td>
          </tr>
        </table>
      </div>
      <hr />
      <div class="ch-2">
        <div>Total Parcial</div>
        <div>R${{ table.value }},00</div>
      </div>

      <div
        v-show="table.payment != []"
        v-for="(payment, index) in table.payment"
        :key="index"
        class="ch-3"
      >
        <div class="ch-3-1">
          <div>Data</div>
          <div>{{ payment.date }}</div>
        </div>
        <div class="ch-3-2">
          <div>Pagamento</div>
          <div>- R${{ payment.value }},00</div>
        </div>
      </div>
      <hr />

      <div class="ch-2">
        <div>Total Restante</div>
        <div>R$ {{ table.value }},00</div>
      </div>
      <hr />
      <div v-if="!loadConvert" class="ch-convert">
        <div>USD  $ {{ payValueDol.toFixed(2) }}</div>
        <div>EUR  € {{ payValueEur.toFixed(2) }}</div>
      </div>
      <div v-if="loadConvert" class="ch-convert">
        <img src="../../assets/loadc.gif" width="100px"/>
      </div>
      <div class="checkout-footer">
        <div class="table">Mesa {{ table.id }}</div>
        <div v-if="table.value > 0" class="account">
          R$
          <input
            type="number"
            @keyup.enter="pay(table.value)"
            v-model="payValue"
            class="ch-pay"
          />
        </div>
        <div v-if="table.value < 0" class="account">
          Necessário troco R$ {{ table.value }},00
        </div>
      </div>

      <div class="buttom">
        <div class="cancel" @click="toHome">Cancelar</div>
        <div
          v-if="table.value > 0 && payValue > 0"
          class="pay"
          @click="pay(table.value)"
        >
          Pagar
        </div>
        <div v-if="table.value <= 0" class="close" @click="close">
          Fechar Mesa
        </div>
      </div>
    </div>
  </div>
</template>
    
  <script>
import date from "../../helpers/date";
import { convert } from "../../helpers/convert";
export default {
  name: "CheckoutScreen",
  props: {},
  components: {},
  data() {
    return {
      table: [],
      payValue: "",
      payValueDol: "",
      payValueEur: "",
      loadConvert: false,
    };
  },
  async created() {
    this.table = this.$store.state.tables.find(
      (table) => table.id == this.$route.params.id
    );
    this.value = this.table.value;

    this.loadConvert = true;
    const convertDol = await convert("BRL", "USD", this.value);
    this.payValueDol = convertDol;

    const convertEur = await convert("BRL", "EUR", this.value);
    this.payValueEur = convertEur;
    this.loadConvert = false;
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
      });
    },
    async pay(value) {
      this.$store.commit("setPayments", {
        id: this.$route.params.id,
        value: this.payValue,
        date: date.dateNow(),
      });
      value = value - this.payValue;

      if (value > 0) {
        this.loadConvert = true;
        const convertDol = await convert("BRL", "USD", value);
        this.payValueDol = convertDol;

        const convertEur = await convert("BRL", "EUR", value);
        this.payValueEur = convertEur;
        this.loadConvert = false;
      } else {
        this.payValueDol = 0;
        this.payValueEur = 0;
      }

      this.payValue = "";
    },

    close() {
      this.$store.commit("closeTable", {
        id: this.$route.params.id,
      });

      this.toHome();
    },
  },
};
</script>
    
  <style lang="scss" scoped>
@import "../../scss/checkout/checkout.scss";
</style>