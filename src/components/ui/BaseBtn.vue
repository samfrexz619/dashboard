
<template>
  <button class="btn">
    <AddIcon v-if="variant === 'add'" />
    <CateIcon v-else />
    <p class="line_break">{{ title }}</p>
  </button>
</template>

<script setup lang="ts">
import AddIcon from '../icons/AddIcon.vue';
import CateIcon from '../icons/CateIcon.vue'

defineProps<{
  title: string;
  variant: 'add' | 'dash';
}>()

</script>

<style scoped lang="scss">
.btn {
  color: inherit;
  background: #fff;
  border-radius: 24px;
  padding: 6px 12px;
  outline: none;
  border: none;
  width: 180px;
  height: 48px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  .line_break {
    white-space: pre-wrap;
    padding-left: 9px;
  }
}
</style>