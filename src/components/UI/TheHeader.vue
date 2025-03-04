<template>
  <header class="main-header">
    <div class="left-side">
      <router-link :to="{ name: 'home' }">
        <h2>Find A Coach</h2>
      </router-link>
    </div>
    <div class="right-side">
      <base-button mode="header" buttonType="router-link" :to="{ name: 'coaches' }">All Coaches</base-button>
      <base-button mode="header" buttonType="router-link" :to="{ name: 'requests' }">Requests</base-button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header.main-header {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 5rem;
  background: hsl(265, 100%, 30%);
}

header.main-header h2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 1.3rem;
  padding: 0.5rem;
}

header.main-header .left-side a {
  text-decoration: none;
}
</style>
