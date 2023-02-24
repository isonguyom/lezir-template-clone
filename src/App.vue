<script setup>
import { reactive } from 'vue'
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

const props = defineProps(['loginIsActive', 'registerIsActive'])

const state = reactive({ loginIsActive: props.loginIsActive, registerIsActive: props.registerIsActive })

function toggleLogin() {
  state.loginIsActive = !state.loginIsActive
}

function toggleRegister() {
  state.registerIsActive = !state.registerIsActive
}
</script>

<template>
  <Navbar @toggle-login="toggleLogin" @toggle-register="toggleRegister"></Navbar>
  <RouterView></RouterView>
</template>
