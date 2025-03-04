<template>
  <header class="main-header">
    <div class="left-side">
      <router-link :to="{ name: 'home' }">
        <h2>Find A Coach</h2>
      </router-link>
    </div>
    <div class="right-side">
      <base-button mode="header" buttonType="router-link" :to="{ name: 'coaches' }"
        >All Coaches</base-button
      >
      <base-button mode="header" buttonType="router-link" :to="{ name: 'requests' }"
        >Requests</base-button
      >
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
