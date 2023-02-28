<script lang="ts" setup>
import type { IImage } from "../types";

export interface IFeatureWidget {
  title: string;
  image: IImage;
}

const props = defineProps<IFeatureWidget>();
</script>
<template>
  <div class="p-2">
    <div class="mb-2">
      <div class="mx-auto mb-2 w-fit p-2">
        <img :src="image.path" :alt="image.alt" class="w-14" />
      </div>
      <div class="text-center text-lg text-black">{{ title }}</div>
    </div>
  </div>
</template>
