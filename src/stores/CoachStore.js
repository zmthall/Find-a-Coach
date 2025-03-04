import { defineStore } from "pinia";

export const useCoachStore = defineStore("coach", {
  state: () => ({
    coaches: [],
    isLoading: false,
  }),
  getters: {},
  actions: {
    async setCoaches() {
      this.isLoading = true;
      const request = new Request("http://localhost:3000/coaches", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await fetch(request);

      if (response.ok) this.coaches = await response.json();

      this.isLoading = false;
    },
  },
});
