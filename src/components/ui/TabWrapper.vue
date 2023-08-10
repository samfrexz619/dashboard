<template>
  <div class="tab">
    <button 
      v-for="(title, index) in tabTitles" 
      :key="index"
      :class="{selected: title === selectedIndex}"
      @click="selectedIndex = title"
    >
      {{ title }}
    </button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, provide } from 'vue';

interface Tabs {
  title: string[];
}

const slots = useSlots()


const tabTitles = ref<Tabs[]>(slots.default!().map(tab => tab.props!.title))

const selectedIndex = ref(tabTitles.value[0])

provide('selectedIndex', selectedIndex)

</script>

<style scoped lang="scss">
.tab {
  button {
    outline: none;
    border: none;
    background: inherit;
    padding: 10px;
    cursor: pointer;
  }
  .selected {
    border: 1px solid red;
  }
}
</style>