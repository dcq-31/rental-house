<script lang="ts" setup>
import type { Component } from "vue";
import {
  PencilSquareIcon,
  RocketLaunchIcon,
  MoonIcon,
  StarIcon,
  ShoppingCartIcon,
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
</script>

<template>
  <main>
    <section
      class="hero min-h-screen"
      style="background-image: url(images/hero.jpg)"
    >
      <div class="hero-overlay bg-black bg-opacity-50"></div>
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold leading-tight">
            Bienvenido al Hostal Alita
          </h1>
          <p class="mb-5 text-xl">
            Visita nuestra hermosa casa y disfruta de unas vacaciones en
            familia.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 px-2">
      <h3 class="mb-5 text-center text-4xl font-bold text-slate-800">
        Disfruta de:
      </h3>

      <div class="space-y-4">
        <FeatureWidget
          v-for="(feature, index) in FEATURES"
          :key="`home-view-feature-${index}`"
          v-bind="feature"
        />
      </div>
    </section>

    <div
      class="btn-primary btn-circle btn-lg btn fixed bottom-6 right-6 animate-bounce text-white"
    >
      <PencilSquareIcon class="h-8 w-8" />
    </div>
  </main>
</template>
