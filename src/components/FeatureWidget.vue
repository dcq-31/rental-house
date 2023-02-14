<script lang="ts" setup>
import type { Component } from "vue";
interface IFeatureWidgetProps {
  title: string;
  description: string;
  icon: Component;
}
const props = defineProps<IFeatureWidgetProps>();
</script>
<template>
  <div class="group flex items-start space-x-4 p-2">
    <div
      class="grow rounded-lg bg-slate-100 p-5 ring-2 ring-transparent group-hover:ring group-hover:ring-primary group-hover:ring-opacity-60"
    >
      <Component :is="icon" class="h-10 w-10 text-primary" />
    </div>

    <div>
      <div class="text-xl text-slate-700">{{ title }}</div>
      <div class="text-base text-slate-500">{{ description }}</div>
    </div>
  </div>
</template>
