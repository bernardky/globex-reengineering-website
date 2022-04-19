import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/products-and-services",
      name: "Products and Services",
      component: () => import("../pages/ProductsAndServicesPage.vue"),
    },
    {
      path: "/project-gallery",
      name: "Project Gallery",
      component: () => import("../pages/ProjectGalleryPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    }
    return window.scrollTo(0, 0);
  },
});

export default router;
