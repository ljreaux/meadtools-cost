<script lang="ts" setup>
import { computed, reactive } from "vue";

const props = defineProps<{
  costs: Array<{ name: string; cost: number; period: string }>;
}>();
const costs = reactive(props.costs);

function handleEvent(event: Event, i: number) {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
  costs[i].name = target.value;
}

const total = computed(() => {
  const costArr = costs.map((cost) => {
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
  <div>
    <ul>
      <li>
        <p>Name</p>
        <p>Cost</p>
        <p>Period</p>
      </li>
      <li v-for="(cost, i) in costs" :key="i">
        <input
          type="text"
          :value="cost.name"
          @input="(e) => handleEvent(e, i)"
          disabled
        />
        <span>
          $
          <input
            type="number"
            :value="cost.cost"
            @input="(e) => {
            costs[i].cost = Number((e.target as HTMLInputElement).value);
            
          }"
            disabled
        /></span>
        <select
          name="period"
          id="period"
          :value="cost.period"
          @change="(e)=> {
          costs[i].period = (e.target as HTMLSelectElement).value;
        }"
          disabled
        >
          <option value="yr">Yearly</option>
          <option value="mo">Monthly</option>
          <option value="once">One Time</option>
        </select>
      </li>
      <li>
        <p class="total">
          {{ $route.name }} Total: {{ USDollar.format(total) }}
        </p>
      </li>
    </ul>
  </div>
</template>
<style scoped>
li {
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.total {
  place-self: start;
  font-weight: bold;
}
</style>
