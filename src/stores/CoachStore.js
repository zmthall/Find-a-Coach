import { defineStore } from "pinia";

export const useCoachStore = defineStore("coach", {
  state: () => ({
    coaches: [],
    isLoading: false,
    badgeFilter: ["frontend", "backend", "career"],
  }),
  getters: {
    getFilteredCoaches() {
      return this.coaches.filter((coach) =>
        coach.badges.every((badge) => this.badgeFilter.includes(badge))
      );
    },
    getCoachByID: (state) => {
      return (coachID) => state.coaches.filter((coach) => coach.id === coachID)[0];
    },
  },
  actions: {
    async setCoaches() {
      document.body.classList.add("no-scroll");
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
      document.body.classList.remove("no-scroll");
    },
    async registerCoach(coach) {
      const request = new Request("http://localhost:3000/coaches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coach),
      });

      const response = await fetch(request);

      if (response.ok) this.coaches.push(coach);
    },
  },
});
