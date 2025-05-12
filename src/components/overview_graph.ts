import { type Node, type Edge } from "@vue-flow/core";

const position = { x: 0, y: 0 };

export const initialNodes: Node[] = [
  {
    id: "1.1",
    position,
    data: {
      label: "AP Psychology Overview",
    },
  },
  {
    id: "2.1",
    type: "link",
    position,
    data: {
      label: "Biological Base",
      link: "biological_base",
    },
  },
  {
    id: "2.2",
    type: "link",
    position,
    data: {
      label: "Cognitive",
      link: "cognitive",
    },
  },
  {
    id: "2.3",
    type: "link",
    position,
    data: {
      label: "Development & Learning",
      link: "development_n_learning",
    },
  },
  {
    id: "2.4",
    type: "link",
    position,
    data: {
      label: "Personality & Society",
      link: "personality_n_society",
    },
  },
  {
    id: "2.5",
    type: "link",
    position,
    data: {
      label: "Mental Health",
      link: "mental_health",
    },
  },
];

export const initialEdges: Edge[] = [
  { id: "1.1-2.1", source: "1.1", target: "2.1" },
  { id: "1.1-2.2", source: "1.1", target: "2.2" },
  { id: "1.1-2.3", source: "1.1", target: "2.3" },
  { id: "1.1-2.4", source: "1.1", target: "2.4" },
  { id: "1.1-2.5", source: "1.1", target: "2.5" },
];
