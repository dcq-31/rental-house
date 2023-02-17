<script lang="ts" setup>
import type { IImage } from "../types";

interface IFeatureWidgetProps {
  title: string;
  description: string;
  image: IImage;
}
const props = defineProps<IFeatureWidgetProps>();
</script>
<template>
  <div class="p-2">
    <div class="mb-2">
      <div class="mx-auto mb-1 w-fit rounded-lg bg-gray-50 p-3">
        <img :src="image.path" :alt="image.alt" class="w-14" />
      </div>
      <div class="text-center text-lg text-gray-800">{{ title }}</div>
    </div>

    <div>
      <div class="text-center text-gray-400">{{ description }}</div>
    </div>
  </div>
</template>
