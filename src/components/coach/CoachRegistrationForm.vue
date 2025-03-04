<template>
  <base-container>
    <h2>Register as a coach</h2>
    <form @submit.prevent="registerCoach">
      <section>
        <h3>Personal Information</h3>
        <div class="input-container">
          <div class="input-wrapper name">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" v-model="formData.firstName" required>
          </div>
          <div class="input-wrapper name">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" v-model="formData.lastName" required>
          </div>
        </div>
      </section>
      <section>
        <h3>Coaching Information:</h3>
        <div class="input-container">
          <div class="input-wrapper badges">
            <input type="checkbox" name="badge-frontend" id="badge-frontend" value="frontend" v-model="formData.badges">
            <label for="badge-frontend">Frontend</label>
          </div>
          <div class="input-wrapper badges">
            <input type="checkbox" name="badge-backend" id="badge-backend" value="backend" v-model="formData.badges">
            <label for="badge-backend">Backend</label>
          </div>
          <div class="input-wrapper badges">
            <input type="checkbox" name="badge-career" id="badge-career" value="career" v-model="formData.badges">
            <label for="badge-career">Career</label>
          </div>
        </div>
        <div class="input-container fee">
          <label for="fee">Coaching Fee</label>
          <input type="text" name="fee" id="fee" v-model="formData.fee" required>
        </div>
        <div class="input-container description">
          <label for="description">Coaching Description</label>
          <textarea name="description" id="description" rows="5" v-model="formData.description" required></textarea>
        </div>
      </section>
      <base-button buttonType="submit" mode="primary">Register</base-button>
    </form>
  </base-container>
</template>

<script>
import { nanoid } from 'nanoid'
import { useCoachStore } from '@/stores/CoachStore.js';
export default {
  data() {
    return {
      coachStore: useCoachStore(),
      formData: {
        firstName: '',
        lastName: '',
        badges: [],
        fee: null,
        description: ""
      },
      inputError: 'none'
    }
  },
  methods: {
    registerCoach() {
      if (this.formData.badges.length >= 1 && this.formData.fee.match(/^[0-9()-]+$/)) {
        this.coachStore.registerCoach({
          id: nanoid(10),
          ...this.formData
        })

        this.formData.firstName = '';
        this.formData.lastName = '';
        this.formData.badges = [];
        this.formData.fee = null;
        this.formData.description = ''
      }
      else this.inputError = 'badges'
    }
  }
};
</script>

<style scoped>
div.base-container {
  max-width: 1000px;
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
}

h2::before {
  content: "";
  width: 50%;
  height: 2px;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: -1rem;
  left: 50%;
  translate: -50%;
}

div.input-wrapper {
  display: flex;
  gap: 0.25rem;
}

div.input-wrapper.badges {
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

div.input-wrapper.name,
div.input-container.description,
div.input-container.fee {
  flex-direction: column;
}

div.input-wrapper.name {
  width: 100%;
}

div.input-container {
  display: flex;
  width: 100%;
}

div.input-container:not(.fee, .description) {
  gap: 1rem;
}

div.input-container.fee {
  width: 250px;
}

input:not([type="checkbox"]),
textarea {
  font-size: 1.25rem;
  padding: 0.25rem;
  resize: none;
  margin-bottom: 1rem;
}
</style>
