<script setup lang="ts">
import { computed, ref } from "vue";

import webArr from "./assets/Web.json";
import mobileArr from "./assets/Mobile.json";
import desktopArr from "./assets/Desktop.json";

const costs = ref<{ name: string; cost: number; period: string }[]>([
  ...webArr,
  ...mobileArr,
  ...desktopArr,
]);

const total = computed(() => {
  const costArr = costs.value.map((cost) => {
    if (cost.period === "mo") return cost.cost * 12;
    else return cost.cost;
  });
  return costArr.reduce((acc, cur) => acc + cur, 0);
});
const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">Web Costs</RouterLink>
    <RouterLink to="/mobile">Mobile Costs</RouterLink>
    <RouterLink to="/desktop">Desktop Costs</RouterLink>
  </nav>
  <main>
    <RouterView />
    <p>Overall Total: {{ USDollar.format(total) }}</p>
  </main>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  width: 90%;
  border-radius: 0.5rem;
}
main {
  width: 100%;
}
p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  width: fit-content;
  border-radius: 0.5rem;
  margin: 2rem auto;
  font-size: 1.5rem;
  font-weight: bolder;
}
</style>
