<template>
  <section class="News container">
    <div class="card col-lg-6 text-center mb-5 border-0 mx-auto">
      <div class="card-body">
        <h3 class="card-title">Latest News</h3>
        <p class="card-text opacity-75">
          Et harum quidem rerum facilis est et expedita distinctio nam libero
          tempore cum soluta nobis eligendi cumque.
        </p>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col py-4" v-for="(post, key) in news" :key="key">
        <div class="card h-100 border-0">
          <img :src="`images/${post.image}`" class="card-img-top rounded-1" alt="..." />
          <div class="card-body px-0">
            <div class="card-header px-0 border-0 opacity-75 d-flex align-items-center">
              <span class="card-text me-3 text-uppercase d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                  class="bi bi-calendar4 me-2 opacity-75" viewBox="0 0 16 16">
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                </svg>
                {{ post.date }}</span>
              <span class="card-text text-uppercase d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29" fill="currentColor"
                  class="bi bi-person me-1 opacity-75" viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                {{ post.editor }}</span>
            </div>
            <a :href="post.link" class="card-title h5 d-block mt-2 text-decoration-none fw-bold post-title">{{
              post.caption }}</a>
            <p class="card-text opacity-75">{{ post.extract }}</p>
            <a class="btn-link px-0 text-decoration-none post-link fw-bold mt-3" :href="post.link" role="button">Learn
              More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg></a>
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
      news: [
        {
          date: "APRIL 10 2020",
          caption: "Best Traveling Place",
          extract:
            "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
          image: "img-1.jpg",
          link: "",
          editor: "Admin",
        },
        {
          date: "APRIL 11 2020",
          caption: "Private Meeting Room",
          extract:
            "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
          image: "img-2.jpg",
          link: "",
          editor: "Admin",
        },
        {
          date: "APRIL 12 2020",
          caption: "The Best Business Ideas",
          extract:
            "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
          image: "img-3.jpg",
          link: "",
          editor: "Admin",
        },
      ],
    };
  },
};
</script>

<style>
.post-title {
  color: #3b3950;
}

.post-title:hover {
  color: #3b3950;
}

.post-link {
  color: #5a4fdc;
}
</style>
