<template>
  <router-link :to="to" v-if="isRouterLink" :class="'mode-' + mode">
    <slot></slot>
  </router-link>
  <button :type="buttonType" :class="'mode-' + mode" v-else>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["buttonType", "mode", "to"],
  computed: {
    isRouterLink() {
      return this.buttonType === "router-link";
    },
  },
};
</script>

<style scoped>
a.mode-header {
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: rgba(255, 152, 255, 0.6);
  border: 1px solid transparent;
  font-size: 0.8rem;
}

a.mode-header.active-link {
  color: rgba(255, 152, 255, 1);
  border: 1px solid rgba(255, 152, 255, 1);
}

a.mode-header:hover {
  color: rgba(255, 152, 255, 1);
}

button.mode-secondary,
a.mode-secondary {
  text-decoration: none;
  background: none;
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--primary-color);
  border-radius: 1rem;
  color: var(--primary-color);
  cursor: pointer;
}

button.mode-secondary:hover,
a.mode-secondary:hover {
  background: hsl(300, 100%, 95%);
}

button.mode-primary,
a.mode-primary {
  text-decoration: none;
  background: var(--primary-color);
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--primary-color);
  border-radius: 1rem;
  color: white;
  cursor: pointer;
}

button.mode-primary:hover,
a.mode-primary:hover {
  background: hsl(265, 100%, 25%);
}
</style>
