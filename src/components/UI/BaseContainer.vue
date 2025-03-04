<template>
  <div class="base-container">
    <slot></slot>
  </div>
</template>

<style>
div.base-container {
  max-width: 700px;
  padding: 1.5rem;
  width: 100%;
  box-shadow: 0 0 10px 1px rgba(100, 100, 100, 0.2);
  margin: 2rem auto;
  border-radius: 0.6rem;
}
</style>
