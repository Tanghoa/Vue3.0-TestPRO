import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";



const app = createApp(App);
app.use(router);//注意顺序
app.mount("#app");
