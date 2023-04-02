import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./assets/main.css";
import Home from "./components/Home.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Carrito from "./components/Carrito.vue";

const routes = [
  { path: "/", component: Home, name:'home' },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/carrito", component: Carrito },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App);

app.use(router);
app.mount("#app");
