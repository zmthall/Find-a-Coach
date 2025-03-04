<template>
  <base-container>
    <h2>Interested? Reach out now!</h2>
    <base-button buttonType="button" mode="primary" @click="toggleContact"
      class="open-contact-btn">Contact</base-button>
    <transition name="contact">
      <coach-contact-form v-if="contactShown" :class="{ active: contactShown }" :coachName="coachName" />
    </transition>
  </base-container>
</template>

<script>
import CoachContactForm from './CoachContactForm.vue'
export default {
  props: ['coach'],
  components: {
    CoachContactForm
  },
  data() {
    return {
      contactShown: false
    }
  },
  methods: {
    toggleContact() {
      this.contactShown = !this.contactShown
    }
  },
  computed: {
    coachName() {
      return `${this.coach.firstName} ${this.coach.lastName}`
    }
  },
  created() {
    if (this.$route.name === 'contact')
      this.contactShown = true;
  }
};
</script>

<style scoped>
button.open-contact-btn {
  margin-top: 1rem;
}
</style>
