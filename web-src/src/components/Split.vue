<template>
  <div
    class="split"
    :class="{
      split_row: config.direction == 'horizontal',
    }"
  >
    <slot ref="slotRef"></slot>
  </div>
</template>

<script setup lang="ts">
import Split from "split.js";

import { onMounted, useSlots } from "@vue/runtime-core";
import {  ref } from "vue";

const props = defineProps({
  config: {
    type: Object,
    default: {
      direction: "vertical",
    },
  },
});

const slotRef = ref(null);

const slots = useSlots();

onMounted(() => {
  var items = [];
  slots!.default().forEach((node, idx) => {
    items.push("#" + node!.props!.id);
  });
  Split(items, props.config);
});
</script>

<style>
.split {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.split_row {
  display: flex;
  flex-direction: row;
}

.gutter {
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==");
  cursor: col-resize;
}

.gutter.gutter-vertical {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=");
  cursor: row-resize;
}
</style>