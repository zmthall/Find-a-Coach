<template>
  <base-container>
    <h2>Requests Received</h2>
    <div class="loading-spinner" v-if="isLoading"><span class="loader"></span></div>
    <ul v-else>
      <request-item v-for="request in requests" :key="request.coachID" :request="request"></request-item>
    </ul>
  </base-container>
</template>

<script>
import RequestItem from '../../components/request/RequestItem.vue'
import { useRequestStore } from "../../stores/RequestStore.js"
export default {
  data() {
    return {
      requestStore: useRequestStore(),
    }
  },
  computed: {
    requests() {
      return this.requestStore.getRequests
    },
    isLoading() {
      return this.requestStore.isLoading
    }
  },
  mounted() {
    this.requestStore.setRequests();
  },
  components: {
    RequestItem
  }
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
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

div.base-container {
  max-width: 1000px;
  padding-bottom: 4rem;
}

h2 {
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

ul {
  list-style: none;
}
</style>
