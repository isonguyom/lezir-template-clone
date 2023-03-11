<template>
  <section class="Hero container-fluid h-100">
    <div class="container d-lg-flex align-items-center justify-content-between">
      <div class="lh-lg col-lg-5">
        <h1 class="mb-3 text-dark-emphasis">Creative Landing Page</h1>
        <p class="hero-text1 opacity-75">
          A creative & modern landing page with Lezir template & We love make
          things amazing.
        </p>
        <p class="mb-3">
          <span class="fs-5 me-2">🥳️</span>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur that is fugit.
        </p>
        <form class="row g-3">
          <div class="input-group mb-3">
            <input type="email" class="form-control py-2 px-4 border-0 custom-input" placeholder="Enter email..."
              aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn text-white px-4 rounded-1 shadow-sm fw-bold custom-btn" type="button" id="button-addon2">
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div class="col-lg-6 me-0 mt-5 mt-lg-0">
        <img src="/images/hero-1-img.png" alt="hero image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.Hero {
  background: url("/images/hero-1-bg-img.png");
  background-size: cover;
  padding-top: 125px;
}

.Hero h1 {
  font-size: 2rem;
  text-shadow: 3px 3px 6px rgba(14, 10, 65, 0.274);
}

p.hero-text1 {
  margin-bottom: 100px;
}

.custom-input {
  background-color: #f0f2fa;
}

@media screen and (min-width: 992px) {
  .Hero h1 {
    font-size: 3.2rem;
  }
}
</style>
