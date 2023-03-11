<template>
  <section class="Plan container">
    <div class="card text-center mb-5 border-0 mx-auto col-lg-6">
      <div class="card-body">
        <h3 class="card-title">Choose Your Plan</h3>
        <p class="card-text opacity-75">
          Et harum quidem rerum facilis est et expedita distinctio nam libero
          tempore cum soluta nobis eligendi cumque.
        </p>
      </div>
    </div>
    <div class="d-lg-flex justify-content-between">
      <div class="mb-5 col-lg-3 text-center plan shadow py-4" v-for="(plan, key) in plans" :key="key">
        <div class="row g-0" :class="{ active_plan: plan.isActive }">
          <div class="plan-icon w-auto mx-auto p-4" v-html="plan.icon"></div>
          <div class="card-body">
            <h4 class="card-title my-3">{{ plan.name }}</h4>
            <h1><sup class="me-2 h4 fw-bold">$</sup>{{ plan.price }}</h1>
            <p class="card-text opacity-75">User / Month</p>
            <p class="card-text opacity-75" v-for="(feature, index) in plan.features" :key="index">
              {{ feature }}
            </p>
            <a :href="plan.buyLink" class="btn mt-4 px-4 rounded-1 shadow-sm fw-bold custom-btn-outline">Buy Now</a>
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
      plans: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/> </svg>',
          name: "Simple",
          price: "19",
          features: ["Bandwidth: 1GB", "Onlinespace: 500MB", "Support: Yes"],
          buyLink: "#",
          isActive: false,
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/> </svg>',
          name: "Basic",
          price: "49",
          features: ["Bandwidth: 2GB", "Onlinespace: 1GB", "Support: Yes"],
          buyLink: "#",
          isActive: true,
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16"> <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/> </svg>',
          name: "Pro",
          price: "19",
          features: ["Bandwidth: 3GB", "Onlinespace: 1.5GB", "Support: Yes"],
          buyLink: "#",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  padding: 150px 0;
}

.plan {
  background: url('/images/pricing-bottom-bg.png');
  background-position: bottom;
  background-repeat: no-repeat;
}

.plan-icon {
  color: #5a4fdc;
  background-color: #ebeafb;
  border-radius: 20px;
  border-bottom-right-radius: 5px;
}

.plan:hover .plan-icon,
.active_plan .plan-icon {
  color: #fff;
  background-color: #5a4fdc;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 20px;
}

.active_plan .custom-btn-outline,
.plan .custom-btn-outline:hover {
  background-color: #5a4fdc;
  color: #fff;
}
</style>
