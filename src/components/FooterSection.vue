<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="border-t border-gray-200 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          &copy; {{ new Date().getFullYear() }} {{ props.businessName }} All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, h } from "vue";

export default {
  props: {
    tagline: {
      type: String,
      default:
        "Making the world a better place through constructing elegant hierarchies.",
    },
    businessLogo: {
      type: String,
      default: "https://tailwindui.com/img/logos/workflow-mark-gray-300.svg",
    },
    businessName: {
      type: String,
      default: "Globex Reengineering Sdn. Bhd.",
    },
    navigation: {
      type: Array,
      default: [
        {
          header: "Solutions",
          data: [
            { name: "Marketing", href: "#" },
            { name: "Analytics", href: "#" },
            { name: "Commerce", href: "#" },
            { name: "Insights", href: "#" },
          ],
        },
        {
          header: "company",
          data: [
            { name: "About", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Jobs", href: "#" },
            { name: "Press", href: "#" },
            { name: "Partners", href: "#" },
          ],
        },
      ],
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
