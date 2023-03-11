<script setup>
import { reactive } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const state = reactive({ loginIsActive: false, registerIsActive: false });
const body = document.body;
function toggleLogin() {
  state.loginIsActive = !state.loginIsActive;
  body.classList.toggle("modal_active");
}

function toggleRegister() {
  state.registerIsActive = !state.registerIsActive;
  body.classList.toggle("modal_active");
}
</script>

<template>
  <Navbar @toggle-login="toggleLogin" @toggle-register="toggleRegister"></Navbar>
  <Login :isActive="state.loginIsActive" @close-modal="toggleLogin"></Login>
  <Register :isActive="state.registerIsActive" @close-modal="toggleRegister"></Register>
  <RouterView></RouterView>
</template>

<style>
body.modal_active {
  height: 100vh;
  overflow: hidden;
}
</style>
