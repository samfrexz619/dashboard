<template>
  <div class="container">
    <div>hey demo</div>
    <TabWrapper>
      <BaseTab title="Tab1">Hello 1</BaseTab>
      <BaseTab title="Tab2">Hello 2</BaseTab>
      <BaseTab title="Tab3">Hello 3</BaseTab>
    </TabWrapper>
  </div>
</template>

<script setup lang="ts">
import BaseTab from '@/components/ui/BaseTab.vue';
import TabWrapper from '@/components/ui/TabWrapper.vue';


</script>

<style scoped lang="scss">
.container {
  width: 93%;
  margin: 2rem auto;
}
</style>