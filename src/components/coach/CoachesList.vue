<template>
  <base-container>
    <base-button buttonType="button" mode="secondary">Refresh</base-button>
    <ul>
      <coach-item v-for="coach in coachStore.coaches" :key="coach.id" :coach="coach"></coach-item>
    </ul>
  </base-container>
</template>

<script>
import { useCoachStore } from "../../stores/CoachStore.js";
import CoachItem from "./CoachItem.vue";

export default {
  components: {
    CoachItem,
  },
  data() {
    return {
      coachStore: useCoachStore(),
    };
  },
  mounted() {
    this.coachStore.setCoaches();
  },
};
</script>

<style></style>
