<template>
  <coach-filter></coach-filter>
  <coaches-list></coaches-list>
  <register-coach-card></register-coach-card>
</template>

<script>
import CoachesList from "../../components/coach/CoachesList.vue";
import CoachFilter from "../../components/coach/CoachFilter.vue";
import RegisterCoachCard from "../../components/coach/RegisterCoachCard.vue"
export default {
  components: {
    CoachFilter,
    CoachesList,
    RegisterCoachCard
  },
};
</script>

<style></style>
