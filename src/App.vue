<template>
  <NavigationHeaderSection />
  <router-view></router-view>
  <FooterSection />
</template>
<script setup>
import FooterSection from "./components/FooterSection.vue";
import NavigationHeaderSection from "./components/NavigationHeaderSection.vue";
</script>
