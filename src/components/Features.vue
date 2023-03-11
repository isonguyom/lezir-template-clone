<template>
  <section class="Features container-fluid">
    <div class="container">
      <div class="card text-center mb-5 border-0 bg-transparent mx-auto col-lg-6">
        <div class="card-body">
          <h3 class="card-title">Awesome Features</h3>
          <p class="card-text opacity-75">
            Et harum quidem rerum facilis est et expedita distinctio nam libero
            tempore cum soluta nobis eligendi cumque.
          </p>
        </div>
      </div>
      <div class="card-group mb-5 border-0 feature-wrapper">
        <div class="d-lg-flex justify-content-between align-items-center flex-wrap feature mb-5"
          v-for="(feature, key) in features" :key="key" :class="feature.mainClass"
          :style="{ backgroundImage: 'url(' + `images/${feature.bg}` + ')' }">
          <div class="feature-img col-lg-6">
            <img :src="`images/${feature.image}`" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-lg-5 py-5">
            <p class="card-title mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5A4FDC" class="bi bi-clouds-fill me-2"
                viewBox="0 0 16 16">
                <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z" />
                <path
                  d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z" />
              </svg>
              CREATIVE FEATURES
            </p>
            <h4 class="card-title mb-4">{{ feature.title }}</h4>
            <p class="card-text opacity-75">{{ feature.details }}</p>
            <p class="card-text opacity-75" v-for="(item, index) in feature.meta" :key="index">
              <span class="pe-1 opacity-75" v-html="item.icon"></span>
              {{ item.text }}
            </p>
            <a :href="feature.readMoreLink"
              class="btn text-white me-2 px-4 fw-bold rounded-1 mt-5 shadow-sm custom-btn">Read More</a>
            <a :href="feature.buyMoreLink" class="btn px-4 fw-bold rounded-1 mt-5 shadow-sm buy-btn">Buy More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "Build community & conversion with our suite of social tool",
          details:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum a necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae itaque.",
          meta: [
            {
              text: "Donec pede justo fringilla vel nec",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-window-reverse" viewBox="0 0 16 16"> <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/> <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z"/> </svg>',
            },
            {
              text: "Cras ultricies mi eu turpis hendrerit fringilla.",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-life-preserver" viewBox="0 0 16 16"> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/> </svg>',
            },
          ],
          bg: "features-bg-img",
          image: "features-img.png",
          readMoreLink: "#",
          buyMoreLink: "#",
        },
        {
          title: "We do the work you stay focused on your customers.",
          details:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum a necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae itaque.",
          meta: [
            {
              text: "Donec pede justo fringilla vel nec",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-stack" viewBox="0 0 16 16"> <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"/> <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/> <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/> </svg>',
            },
            {
              text: "Cras ultricies mi eu turpis hendrerit fringilla.",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss" viewBox="0 0 16 16"> <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/> <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z"/> </svg>',
            },
          ],
          bg: "features-bg-img-1",
          image: "features-img-1.png",
          readMoreLink: "#",
          buyMoreLink: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
.feature {
  background-repeat: no-repeat;
  background-size: cover;
}

.feature:nth-child(even) .feature-img {
  order: 2;
}

.buy-btn {
  color: #5a4fdc;
  padding: 11px 0;
  background-color: #5b4fdc31;
}

.buy-btn:hover {
  color: #5a4fdc !important;
  background-color: #5b4fdc31 !important;
}
</style>
