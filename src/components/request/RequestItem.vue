<template>
  <li class="request-list-item">
    <div class="request-content">
      <div class="mail-from-to">
        <span class="mail-from">
          <a :href="'mailto:' + request.email" class="request-email">{{ request.email }}</a>
        </span>
        <span class="mail-to">
          Coach: {{ request.coachName }}
        </span>
      </div>
      <p class="request-message">{{ request.message }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['request']
};
</script>

<style scoped>
li.request-list-item {
  padding: 1.5rem;
  width: 80%;
  margin: 0 auto;
  border: 2px solid rgba(225, 225, 225);
}

li.request-list-item:not(:last-of-type) {
  margin-bottom: 1.5rem;
}

div.request-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

div.mail-from-to {
  display: flex;
  justify-content: space-between;
}
</style>
