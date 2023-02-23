<script setup>
import { reactive } from 'vue'
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

defineProps(['loginIsActive', 'registerIsActive'])
</script>

<template>
  <Navbar :showLogin="loginIsActive" :showRegister="registerIsActive"></Navbar>
  <RouterView />
</template>
