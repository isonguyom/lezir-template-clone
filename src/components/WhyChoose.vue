<template>
    <section class="Choose container-fluid">
        <div class="container">
            <div class="d-lg-flex justify-content-between align-items-center">
                <div class="card col-lg-4 border-0 mb-5 mb-lg-0">
                    <div class="svg-bg-title p-3 rounded mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#5A4FDC" class="bi bi-box-fill"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                        </svg>
                    </div>
                    <div class="card-body px-0">
                        <h3 class="card-title">Why Choose Us ?</h3>
                        <p class="card-text opacity-75">Nam libero tempore cum soluta as nobis est eligendi optio cumque
                            nihile impedite
                            quo minus id quod maxime.</p>
                        <a href="#" class="btn px-4 mt-2 fw-bold rounded-1 shadow-sm custom-btn-outline">Learn More</a>
                    </div>
                </div>
                <div class="col-lg-7 d-md-flex flex-wrap justify-content-around">
                    <div class="card reason-card text-center border-0 px-3 py-4 shadow-sm" v-for="reason, key in reasons"
                        :key="key">
                        <div class="svg-bg-text p-3 rounded-circle mb-2 mx-auto" v-html="reason.icon">

                        </div>
                        <div class="card-body px-0">
                            <h5 class="card-title">{{ reason.title }}</h5>
                            <p class="card-text opacity-75">{{ reason.details }}</p>
                        </div>
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
            reasons: [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16"> <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/> </svg>',
                    title: "Easy To Use",
                    details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-shield-shaded" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/> <svg>',
                    title: "Analytics Security",
                    details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/> </svg>',
                    title: "Grow Your Revenue",
                    details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-database-fill-lock" viewBox="0 0 16 16"> <path d="M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z"/> <path d="M3.904 9.223C2.875 8.755 2 8.007 2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-1.364-.125 2.988 2.988 0 0 0-2.197.731 4.525 4.525 0 0 0-1.254 1.237A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777ZM8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.09 0 .178 0 .266-.003A1.99 1.99 0 0 1 8 15v-1Zm0-1.5c0 .1.003.201.01.3A1.9 1.9 0 0 0 8 13c-1.573 0-3.022-.289-4.096-.777C2.875 11.755 2 11.007 2 10v-.839c.457.432 1.004.751 1.49.972C4.722 10.693 6.318 11 8 11c.086 0 .172 0 .257-.002A4.5 4.5 0 0 0 8 12.5Z"/> <path d="M9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/> </svg>',
                    title: "Data Privacy",
                    details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
                }

            ]
        }
    }
}
</script>

<style scoped>
section {
    padding: 200px 0;
}

.svg-bg-title {
    background-color: #EBEAFB;
    width: fit-content;
}

.svg-bg-text {
    width: fit-content;
    color: #5A4FDC;
    background-color: #EBEAFB;
}

.reason-card {
    margin-bottom: 20px;
}

.reason-card:hover {
    color: #fff !important;
    background-color: #5A4FDC;
    transform: translateY(-10px);
}

.reason-card:hover .svg-bg-text {
    color: #fff !important;
    background-color: #6E64E0;
}

.reason-card:hover h5 {
    color: #fff !important;
}

@media screen and (min-width: 768px) {
    .reason-card {
        width: 48%;
    }

    .reason-card:nth-of-type(odd) {
        top: 60px;
        margin-right: 20px;
    }
}
</style>