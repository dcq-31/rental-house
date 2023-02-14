<script lang="ts" setup>
import type { Component } from "vue";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import {
  RocketLaunchIcon,
  MoonIcon,
  StarIcon,
  ShoppingCartIcon,
  ArrowUpIcon,
} from "@heroicons/vue/24/solid";
import FeatureWidget from "../components/FeatureWidget.vue";

interface IFeature {
  title: string;
  description: string;
  icon: Component;
}

const FEATURES: IFeature[] = [
  {
    title: "Piscina",
    description:
      "otam nulla. Cumque aspernatur inventore ipsa quae fugit nobis dicta qui!.Cumque aspernatur inventore",
    icon: RocketLaunchIcon,
  },
  {
    title: "Garaje",
    description:
      "Cumque aspernatur inventore.otam nulla. Cumque aspernatur fugit nobis dicta qui!",
    icon: StarIcon,
  },
  {
    title: "Aire Frío",
    description:
      "otam nulla. Cumque aspernatur saepe maiores, mque aspernatur inventore ipsa quae fugit nobis dicta qui!",
    icon: MoonIcon,
  },
  {
    title: "Desayuno",
    description:
      "otam nulla. Ventore, aspernatur inventore ipsa quae fugit nobis dicta qui!s",
    icon: ShoppingCartIcon,
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
const scrollTop = () => {
  // scroll to top
};
</script>

<template>
  <main>
    <section
      class="hero min-h-screen bg-cover bg-no-repeat"
      style="background-image: url(images/hero.jpg)"
      :style="{ backgroundPosition: bgPosition }"
    >
      <div class="hero-overlay bg-black bg-opacity-30"></div>
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <h1 class="mb-3 text-5xl font-bold leading-tight">Hostal Alita</h1>
          <p class="mb-6 text-xl text-gray-100">
            Visita nuestra hermosa casa y disfruta de unas vacaciones en
            familia.
          </p>
          <div
            class="btn-primary btn-sm btn rounded-full px-6 tracking-widest text-white"
          >
            Reserva
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-2">
      <h3 class="mb-5 text-center text-4xl font-medium">Disfruta de:</h3>

      <div class="space-y-4">
        <FeatureWidget
          v-for="(feature, index) in FEATURES"
          :key="`home-view-feature-${index}`"
          v-bind="feature"
        />
      </div>
    </section>

    <div
      class="duration-400 btn-primary btn-circle btn fixed bottom-4 right-4 transition-transform"
      :class="[scrollY > 400 ? 'scale-100' : 'scale-0']"
      @click="scrollTop"
    >
      <ArrowUpIcon class="h-6 w-6 text-white" />
    </div>
  </main>
</template>
