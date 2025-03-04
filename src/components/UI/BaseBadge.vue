<template>
  <div class="coach-badge" :class="badge">
    {{ badge }}
  </div>
</template>

<script>
export default {
  props: ["badge"],
};
</script>

<style scoped>
div.coach-badge {
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  display: inline-block;
  color: white;
  text-transform: uppercase;
}

div.coach-badge.frontend {
  background: rebeccapurple;
}

div.coach-badge.backend {
  background: darkviolet;
}

div.coach-badge.career {
  background: violet;
}
</style>
