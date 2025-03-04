<template>
  <li class="coach-item">
    <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
    <p>${{ coach.fee }}/hour</p>
    <div class="coach-badges">
      <base-badge v-for="badge in coach.badges" :key="badge" :badge="badge" />
    </div>
    <div class="coach-buttons-wrapper">
      <base-button
        buttonType="router-link"
        mode="secondary"
        :to="{ name: 'contact', params: { id: coach.id } }"
        >Contact</base-button
      >
      <base-button
        buttonType="router-link"
        mode="primary"
        :to="{ name: 'coach', params: { id: coach.id } }"
        >View Details</base-button
      >
    </div>
  </li>
</template>

<script>
export default {
  props: ["coach"],
};
</script>

<style>
li.coach-item {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--primary-color);
  margin: 1rem 0;
  border-radius: 1rem;
}

div.coach-buttons-wrapper {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

div.coach-badges {
  margin: 0 0 1rem 0;
  display: flex;
  gap: 0.5rem;
}

li.coach-item p {
  margin: 0.5rem 0;
  font-weight: 600;
}
</style>
