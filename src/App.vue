<template>
  <div class="overflow-x-auto">
    <NavigationHeaderSection />
    <router-view></router-view>
    <FooterSection />
  </div>
</template>
<script setup>
import FooterSection from "./components/FooterSection.vue";
import NavigationHeaderSection from "./components/NavigationHeaderSection.vue";
</script>
