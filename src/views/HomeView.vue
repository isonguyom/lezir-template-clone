<script setup>
import { reactive } from "vue";
import Hero from "../components/Hero.vue";
import WhyChoose from "../components/WhyChoose.vue";
import Features from "../components/Features.vue";
import Plan from "../components/Plan.vue";
import News from "../components/News.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

const props = defineProps(["loginIsActive", "registerIsActive"]);
const state = reactive({
  loginIsActive: props.loginIsActive,
  registerIsActive: props.registerIsActive,
});

function toggleLoginModal() {
  state.loginIsActive = !state.loginIsActive;
}

function toggleRegisterModal() {
  state.registerIsActive = !state.registerIsActive;
}
</script>

<template>
  <section class="w-100">
    <Hero id="hero"></Hero>
    <div>{{ props.newsletterPopup }}</div>
    <WhyChoose></WhyChoose>
    <Features id="features"></Features>
    <Plan id="pricing"></Plan>
    <News id="blog"></News>
    <Contact id="contact"></Contact>
    <Footer></Footer>
    <section class="custom-modal w-100 vh-100 position-fixed top-0 py-4" :class="{ modal_active: state.loginIsActive }"
      @click.self.prevent="toggleLoginModal">
      <Login></Login>
    </section>
    <section class="custom-modal w-100 vh-100 position-fixed top-0 py-4" :class="{ modal_active: props.registerIsActive }"
      @click="toggleRegisterModal">
      <Register></Register>
    </section>
  </section>
</template>

<style scoped>
.custom-modal {
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.637);
  z-index: 100;
  display: none;
}

.custom-modal.modal_active {
  display: block;
}
</style>
