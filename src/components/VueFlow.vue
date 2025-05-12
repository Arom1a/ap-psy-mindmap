<script lang="ts" setup>
import { nextTick, ref } from "vue";

import { VueFlow, useVueFlow } from "@vue-flow/core";
const { fitView } = useVueFlow();
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
import LinkNode from "../components/LinkNode.vue";

import { useLayout } from "../script/useLayout.ts";
const { layout } = useLayout();

import { initialNodes, initialEdges } from "../components/overview_graph.ts";
const nodes = ref(initialNodes);
nodes.value.forEach((node) => {
  node.draggable = false;
});
const edges = ref(initialEdges);
edges.value.forEach((edge) => {
  edge.type = "smoothstep";
});

async function layoutGraph(direction: "LR" | "TD") {
  nodes.value = layout(nodes.value, edges.value, direction);
  nextTick(() => {
    fitView();
  });
}
</script>

<template>
  <VueFlow
    v-model:nodes="nodes"
    v-model:edges="edges"
    fit-view-on-init
    class="vue-flow-basic-example"
    @nodes-initialized="layoutGraph('LR')"
    :default-zoom="1"
    :min-zoom="0.2"
    :max-zoom="4"
    :zoom-on-scroll="false"
  >
    <template #node-link="props">
      <LinkNode v-bind="props" />
    </template>
    <Background pattern-color="#E0B0FF" />
    <Controls />
    <MiniMap />
  </VueFlow>
</template>
