import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);
app.component("base-badge", BaseBadge);

app.use(createPinia());
app.use(router);

app.mount("#app");
