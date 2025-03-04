<template>
  <base-container>
    <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
    <p>${{ coach.fee }}/hour</p>
  </base-container>
</template>

<script>
// import { useCoachStore } from "../../stores/CoachStore.js";

export default {
  props: ['coach'],
};
</script>

<style></style>
