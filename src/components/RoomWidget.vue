<script setup lang="ts">
import type { IImage } from "@/types";

export interface IRoomWidget {
  image: IImage;
  title: string;
  price: number;
}

const props = defineProps<IRoomWidget>();
</script>
<template>
  <div class="p-2">
    <img :src="image.path" :alt="image.alt" class="mb-5" />
    <div class="text-center">
      <div class="mb-1 uppercase tracking-wider text-black">{{ title }}</div>
      <div class="text-slate-400">${{ price }} / noche</div>
    </div>
  </div>
</template>
