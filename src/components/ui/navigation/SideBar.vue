
<template>
  <div class="nav">
    <div class="nav__container">
      <div class="nav__logo">
        <RouterLink to="/">
          <LogoIcon  />
        </RouterLink>
      </div>
      <div class="nav__btn">
        <Button :title='title' variant="add" />
      </div>
      <div>
        <RouterLink to="/">
          <Button title="Dashboard" variant="dash" />
        </RouterLink>
      </div>
      <div v-for="item in navItems" :key="item.id">
        <NavItem :items="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import Button from '@/components/ui/BaseBtn.vue'
import NavItem from './NavItem.vue';
import { type NavItems } from '@/components/layouts/NavBar.vue';
import type ChevIcon from '@/components/icons/ChevIcon.vue';


defineProps<{
  navItems: NavItems[];
}>()
const title = ref<string>('Create new \nproject')
</script>

<style scoped lang="scss">
.nav {
  background: #060606;
  width: 100%;
  a {
    color: #060606;
    cursor: pointer;
    &.router-link-exact-active {
      color: #E65F2B;
    }
  }
  &__container {
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    .nav__logo {
      padding: 12px 0;
      margin-bottom: 2rem;
    }
  }
  &__btn {
    margin-bottom: 4rem;
    padding-top: 10px;
  }
}
</style>
