<template>
  <nav class="navbar navbar-expand-lg text-start w-100 py-3 bg-white custom-navbar shadow-sm">
    <div class="container">
      <a class="navbar-brand" href="#"><img class="logo" src="/images/logo-dark.png" alt="" /></a>
      <button class="navbar-toggler border-0" :class="{ collapsed: !showNav }" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" @click="toggleNav">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3B3950" class="bi bi-list"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ show: showNav }">
        <ul class="navbar-nav me-auto mx-lg-auto">
          <li class="nav-item px-4 px-lg-3">
            <router-link :to="{ path: '/', hash: '#hero' }" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item px-4 px-lg-3">
            <router-link :to="{ path: '/', hash: '#features' }" class="nav-link">Features</router-link>
          </li>
          <li class="nav-item px-4 px-lg-3">
            <router-link :to="{ path: '/', hash: '#pricing' }" class="nav-link">Pricing</router-link>
          </li>
          <li class="nav-item px-4 px-lg-3">
            <router-link :to="{ path: '/', hash: '#blog' }" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item px-4 px-lg-3">
            <router-link :to="{ path: '/', hash: '#contact' }" class="nav-link">Contact us</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item px-4 px-lg-3">
            <button class="nav-link bg-transparent border-0" @click="$emit('toggle-login')">
              Login
            </button>
          </li>
          <li class="nav-item px-4 px-lg-3">
            <button class="nav-link bg-transparent border-0" @click="$emit('toggle-register')">
              Register
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ["toggle-login", "toggle-register"],
  data() {
    return {
      showNav: false,
    };
  },

  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },

    toggleModal(modal) {
      modal = !modal;
    },
  },
};
</script>

<style scoped>
.custom-navbar {
  position: fixed;
  background-color: #fff;
  z-index: 10;
}

.logo {
  width: 100px;
}

.custom-navbar .nav-link {
  font-family: "Muli", sans-serif;
}

.custom-navbar .navbar-nav li a:hover,
nav li a.router-link-active:focus,
nav li a.router-link-exact-active:focus,
button.nav-link:hover {
  color: #5a4fdc !important;
}
</style>
