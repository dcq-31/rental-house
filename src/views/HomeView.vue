<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import type { IFeatureWidget, IRoomWidget } from "../types";
import FeatureWidget from "../components/FeatureWidget.vue";
import RoomWidget from "../components/RoomWidget.vue";

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

const ROOMS: IRoomWidget[] = [
  {
    image: {
      path: "/images/rooms/room-1.jpg",
      alt: "Alternative text",
    },
    title: "Habitación de Familia",
    price: 300,
  },
  {
    image: {
      path: "/images/rooms/room-2.jpg",
      alt: "Alternative text",
    },
    title: "Habitación de Pareja",
    price: 400,
  },
  {
    image: {
      path: "/images/rooms/room-3.jpg",
      alt: "Alternative text",
    },
    title: "Habitación Individual",
    price: 350,
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
    <!-- Hero Section -->
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

    <!-- About Section -->
    <section class="px-2 pt-12 pb-6">
      <div class="px-2">
        <div class="mb-8">
          <h3 class="mb-3 text-center font-serif text-4xl text-black">
            Sobre Nosotros
          </h3>
          <hr class="mx-auto w-32 border-t border-black" />
        </div>
        <div class="relative mb-12 pr-5">
          <img src="/images/hero.jpg" alt="Alternative Text" />
          <div
            class="absolute -right-3 -bottom-8 rounded-sm bg-white p-2 shadow-lg"
          >
            <img
              src="/images/rooms/room-1.jpg"
              alt="Alternative Text"
              class="w-32 rounded-sm"
            />
          </div>
        </div>
        <p class="font-light leading-relaxed tracking-wider text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          reiciendis voluptatem sunt, illo inventore corporis? A aliquid sed
          soluta cupiditate earum eaque doloremque, quisquam, similique odio
          perferendis aperiam voluptas nemo?
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-6">
      <div class="px-2">
        <div class="mb-8">
          <h3 class="mb-3 text-center font-serif text-4xl text-black">
            Nuestro Hostal
          </h3>
          <hr class="mx-auto w-24 border-t border-black" />
        </div>

        <div class="space-y-4">
          <FeatureWidget
            v-for="(feature, index) in FEATURES"
            :key="`home-view-feature-widget-${index}`"
            v-bind="feature"
          />
        </div>
      </div>
    </section>

    <!-- Rooms Section -->
    <section class="py-6">
      <div class="px-2">
        <div class="mb-8">
          <h3 class="mb-3 text-center font-serif text-4xl text-black">
            Habitaciones
          </h3>
          <hr class="mx-auto w-20 border-t border-black" />
        </div>
        <div class="space-y-6">
          <RoomWidget
            v-for="(room, index) in ROOMS"
            :key="`home-view-room-widget-${index}`"
            v-bind="room"
          />
        </div>
      </div>
    </section>
  </main>
</template>
