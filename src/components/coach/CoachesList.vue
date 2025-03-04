<template>
  <base-container>
    <div class="buttons-container">
      <base-button buttonType="button" mode="secondary" @click="refreshList">Refresh</base-button>
      <base-button buttonType='router-link' :to="{ name: 'registration' }" mode="primary">Register as
        Coach</base-button>
    </div>
    <div class="loading-spinner" v-if="coachStore.isLoading"><span class="loader"></span></div>
    <ul v-else>
      <coach-item v-for="coach in coachStore.getFilteredCoaches" :key="coach.id" :coach="coach" e></coach-item>
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
  methods: {
    refreshList() {
      this.coachStore.setCoaches();
    }
  }
};
</script>

<style>
.buttons-container {
  display: flex;
  justify-content: space-between;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.loader {
  color: var(--primary-color);
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {

  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em,
      2em -2em 0 0em, 3em 0 0 -1em,
      2em 2em 0 -1em, 0 3em 0 -1em,
      -2em 2em 0 -1em, -3em 0 0 -1em,
      -2em -2em 0 0;
  }

  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em,
      3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em,
      -2em 2em 0 -1em, -3em 0 0 -1em,
      -2em -2em 0 -1em;
  }

  25% {
    box-shadow: 0 -3em 0 -0.5em,
      2em -2em 0 0, 3em 0 0 0.2em,
      2em 2em 0 0, 0 3em 0 -1em,
      -2em 2em 0 -1em, -3em 0 0 -1em,
      -2em -2em 0 -1em;
  }

  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em,
      -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }

  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em,
      -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }

  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0,
      -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }

  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em,
      3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
      -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }

  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
      -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>
