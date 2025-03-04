<template>
  <coach-filter></coach-filter>
  <coaches-list></coaches-list>
</template>

<script>
import CoachesList from "../../components/coach/CoachesList.vue";
import CoachFilter from "../../components/coach/CoachFilter.vue";
export default {
  components: {
    CoachFilter,
    CoachesList,
  },
};
</script>

<style></style>
