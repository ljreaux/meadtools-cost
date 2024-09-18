<script lang="ts" setup>
import webArr from "../assets/Web.json";
import CostCard from "../CostCard.vue";
</script>

<template>
  <CostCard :costs="webArr"></CostCard>
</template>
