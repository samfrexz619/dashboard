<template>
  <div>
    <TotalIcon v-if="title === 'Total revenue'" />
    <IconProj v-else-if="title === 'Projects'" />
    <IconLog v-else-if="title === 'Time spent'" />
    <UserIcon v-else />
  </div>
</template>

<script setup lang="ts">
import IconLog from '../icons/IconLog.vue';
import IconProj from '../icons/IconProj.vue';
import TotalIcon from '../icons/TotalIcon.vue';
import UserIcon from '../icons/UserIcon.vue';

defineProps<{
  title: string;
}>()
</script>

<style scoped>

</style>