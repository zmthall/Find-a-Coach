import { defineStore } from "pinia";

export const useRequestStore = defineStore("request", {
  state: () => ({
    requests: [],
    isLoading: false,
  }),
  getters: {
    getRequests() {
      return this.requests;
    },
  },
  actions: {
    async setRequests() {
      this.isLoading = true;
      const request = new Request("http://localhost:3000/requests", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await fetch(request);

      if (response.ok) this.requests = await response.json();
      this.isLoading = false;
    },
    async addRequest(requestObj) {
      const request = new Request("http://localhost:3000/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestObj),
      });

      const response = await fetch(request);
      if (response.ok) this.requests.push(requestObj);
    },
  },
});
