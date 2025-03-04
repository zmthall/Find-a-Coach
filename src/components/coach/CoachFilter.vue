<template>
  <base-container>
    <h2>Find Your Coach</h2>
    <div class="filter-input-wrapper">
      <div class="filter-input">
        <input type="checkbox" name="front" id="front" value="frontend" v-model="coachStore.badgeFilter"
          @change="testing" />
        <label for="front">Frontend</label>
      </div>
      <div class="filter-input">
        <input type="checkbox" name="back" id="back" value="backend" v-model="coachStore.badgeFilter"
          @change="testing" />
        <label for="back">Backend</label>
      </div>
      <div class="filter-input">
        <input type="checkbox" name="career" id="career" value="career" v-model="coachStore.badgeFilter"
          @change="testing" />
        <label for="career">Career</label>
      </div>
    </div>
  </base-container>
</template>

<script>
import { useCoachStore } from "../../stores/CoachStore.js"
export default {
  data() {
    return {
      coachStore: useCoachStore()
    }
  },
  methods: {
    testing() {
      console.log(this.coachStore.badgeFilter)
    }
  }
};
</script>

<style scoped>
div.filter-input-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

div.filter-input-wrapper label {
  line-height: 0.8;
}

div.filter-input {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
