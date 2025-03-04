<template>
  <base-container>
    <div class="coach-badges">
      <base-badge v-for="badge in coach.badges" :key="badge" :badge="badge" />
    </div>
    <p class="coach-description">
      {{ coach.description }}
    </p>
  </base-container>
</template>

<script>
export default {
  props: ['coach']
};
</script>

<style></style>
