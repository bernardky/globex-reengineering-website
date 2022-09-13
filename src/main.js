import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "/index.css";
import "aos/dist/aos.css";
import "vue-fullpage.js/dist/style.css";
import VueFullPage from "vue-fullpage.js";

const app = createApp(App);
app.use(VueFullPage);
app.use(router).mount("#app");
