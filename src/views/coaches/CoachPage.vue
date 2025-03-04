<template>
  <coach-title :coach="coach" v-if="coach"></coach-title>
  <coach-contact :coach="coach" v-if="coach"></coach-contact>
  <coach-description :coach="coach" v-if="coach"></coach-description>
  <base-container v-if="!coach">
    <div class="loading-spinner"><span class="loader"></span></div>
  </base-container>
</template>

<script>
import CoachTitle from '../../components/coach/CoachTitle.vue';
import CoachContact from '../../components/coach/CoachContact.vue';
import CoachDescription from '../../components/coach/CoachDescription.vue'
import { useCoachStore } from "../../stores/CoachStore.js";

export default {
  props: ['id'],
  data() {
    return {
      coachStore: useCoachStore()
    }
  },
  computed: {
    coach() {
      return this.coachStore.getCoachByID(this.id)
    }
  },
  components: {
    CoachTitle,
    CoachContact,
    CoachDescription
  },
  mounted() {
    this.coachStore.setCoaches();
  }
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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
