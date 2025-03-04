<template>
  <form @submit.prevent="sendCoachMessage" class="coach-contact-form">
    <div class="input-container">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" v-model="formData.email" required>
    </div>
    <div class="input-container">
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="5" v-model="formData.message" required></textarea>
    </div>
    <base-button buttonType="submit" mode="primary" class="submit-message-btn">Send Message</base-button>
  </form>
</template>

<script>
import { useRequestStore } from '../../stores/RequestStore.js'
export default {
  props: ['coachName'],
  data() {
    return {
      formData: {
        email: '',
        message: '',
        coachID: this.$route.params.id,
        coachName: this.coachName
      },
      requestStore: useRequestStore()
    }
  },
  methods: {
    sendCoachMessage() {
      this.requestStore.addRequest(this.formData)
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
form.coach-contact-form {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  padding: 1rem;
  margin-top: 1.5rem;
}

form.coach-contact-form.active {
  border: 2px solid rgb(225, 225, 225);
}

form.contact-enter-to,
form.contact-leave-from {
  max-height: 800px
}

form.contact-enter-from,
form.contact-leave-to {
  max-height: 0;
}

form.contact-enter-active {
  transition: max-height 0.5s ease-out;
}

form.contact-leave-active {
  transition: max-height 0.5s ease-in;
}

form.coach-contact-form label {
  font-size: 1.25rem;
  font-weight: 500;
}

button.submit-message-btn {
  display: block;
  margin: 0 auto;
}

div.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
}

input,
textarea {
  font-size: 1.25rem;
  padding: 0.25rem;
  resize: none;
  margin-bottom: 1rem;
}
</style>
