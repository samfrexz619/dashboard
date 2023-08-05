<template>
  <div class="nav">
    <RouterLink to="" class="nav__item">
      <NavIcons :iconName="items.name" />
      <span>{{ items.name }}</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { type NavItems } from '@/components/layouts/NavBar.vue';
import NavIcons from './NavIcons.vue';

defineProps<{
  items: NavItems;
}>()


</script>

<style scoped lang="scss">
.nav {
  .nav__item {
    margin-top: 1rem;
    display: flex;
    gap: 19px;
    padding: 13px 0;
    align-items: center;
    color: #F1F1F1;
  }
  // a {

  // }
}
</style>