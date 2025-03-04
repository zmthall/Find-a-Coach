<template>
  <base-container class="register-coach">
    <h2>Become a coach!</h2>
    <p>Are you looking to become a coach? Look no further. Register here today.</p>
    <base-button buttonType='router-link' :to="{ name: 'registration' }" mode="primary">Register Now</base-button>
  </base-container>
</template>

<script>
export default {

};
</script>

<style>
div.register-coach a {
  margin-top: 1.5rem;
}
</style>
