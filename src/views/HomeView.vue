<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { ArrowUpIcon } from "@heroicons/vue/24/solid";
import type { IImage } from "../types";
import FeatureWidget from "../components/FeatureWidget.vue";

interface IFeature {
  title: string;
  description: string;
  image: IImage;
}

const FEATURES: IFeature[] = [
  {
    title: "Piscina",
    description: "Diponible a toda hora para su disfrute.",
    image: {
      path: "/icons/pool-water.png",
      alt: "Alternative text",
    },
  },
  {
    title: "Garaje",
    description:
      "¿No sabes dónde estacionar tu auto? Nosotros nos encargamos de eso.",
    image: {
      path: "/icons/garage.png",
      alt: "Alternative text",
    },
  },
  {
    title: "Aire Frío",
    description:
      "¿Le gusta el frío? Todos nuestros cuartos cuentan con su propio aire acondicionado.",
    image: {
      path: "/icons/air-conditioning.png",
      alt: "Alternative text",
    },
  },
  {
    title: "Desayuno",
    description:
      "No te preocupes por tu desayuno contamos con ofertas variadas y te lo llevamos a tu cuarto si lo deseas.",
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
      <div class="hero-overlay bg-black bg-opacity-40"></div>
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <h1 class="mb-3 text-5xl font-semibold leading-tight">
            Bienvenido al Hostal Alita
          </h1>
          <p class="mb-6 text-xl text-gray-100">
            Disfruta de unas vacaciones en familia en nuestro hogar.
          </p>

          <div>
            <div
              class="btn-primary btn mx-auto rounded-full px-6 text-base font-medium normal-case tracking-wider text-white"
            >
              Visitar
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-2">
      <div class="mb-5">
        <h3 class="mb-2 text-center text-3xl font-bold">Nuestro hostal</h3>
        <hr class="mx-auto w-20 border-t-2 border-primary" />
      </div>

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
      <ArrowUpIcon class="h-5 w-5 text-white" />
    </div>
  </main>
</template>
