<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import type { IFeatureWidget } from "../types";
import FeatureWidget from "../components/FeatureWidget.vue";

const FEATURES: IFeatureWidget[] = [
  {
    title: "Piscina",
    image: {
      path: "/icons/pool-water.png",
      alt: "Alternative text",
    },
  },
  {
    title: "Garaje",
    image: {
      path: "/icons/garage.png",
      alt: "Alternative text",
    },
  },
  {
    title: "Aire Frío",
    image: {
      path: "/icons/air-conditioning.png",
      alt: "Alternative text",
    },
  },
  {
    title: "Desayuno",
    image: {
      path: "/icons/breakfast.png",
      alt: "Alternative text",
    },
  },
];

const PARALLAX_FACTOR = 2;
const scrollY = ref(window.scrollY);

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const bgPosition = computed(() => `50% ${scrollY.value / PARALLAX_FACTOR}px`);

const onScroll = () => {
  scrollY.value = window.scrollY;
};
</script>

<template>
  <main>
    <section
      class="hero min-h-screen bg-cover bg-no-repeat"
      style="background-image: url(images/hero.jpg)"
      :style="{ backgroundPosition: bgPosition }"
    >
      <div class="hero-overlay bg-black bg-opacity-[45%]"></div>
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <h1 class="font-serif text-6xl font-medium leading-tight">
            Hostal Alita
          </h1>
          <p class="font-light uppercase tracking-widest text-gray-50">
            vacaciones en familia
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 px-2">
      <div class="mb-8">
        <h3 class="mb-3 text-center font-serif text-4xl text-black">
          Nuestro Hostal
        </h3>
        <hr class="mx-auto w-20 border-t border-black" />
      </div>

      <div class="space-y-4">
        <FeatureWidget
          v-for="(feature, index) in FEATURES"
          :key="`home-view-feature-${index}`"
          v-bind="feature"
        />
      </div>
    </section>
  </main>
</template>
