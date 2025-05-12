<script lang="ts" setup>
import { Handle, Position } from "@vue-flow/core";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex w-[150px] overflow-hidden rounded-[3px] border border-solid border-[--vf-node-color] text-center text-[12px] text-[--vf-node-text]"
  >
    <a class="grow bg-blue-300 p-[10px]" :href="props.data.link">{{ props.data.label }}</a>
  </div>
  <Handle type="target" :position="Position.Left" />
  <Handle type="source" :position="Position.Right" />
</template>
