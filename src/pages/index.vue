<template>
  <div class="flex pl-12">
    <div>nuxt-ts-tailwind-template</div>
    <div v-for="(sample, index) in samples" :key="index">{{ sample.num }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import samples from "~/assets/api/sample";

@Component
export default class PagesIndex extends Vue {
  samples = samples;
}
</script>

<style></style>
