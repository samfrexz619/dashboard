<template>
  <div @click.self="showMobileNav" class="modal">
    <div class="modal__body">
      <div class="container">
        <div class="nav__logo">
          <RouterLink to="/">
            <LogoIcon  />
          </RouterLink>
          <p>mobile</p>
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
      <button @click="showMobileNav" class="close-btn">
        <CloseIcon  />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import Button from '@/components/ui/BaseBtn.vue'
import NavItem from './NavItem.vue';
import { type NavItems } from '@/components/layouts/NavBar.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';

defineProps<{
  navItems: NavItems[];
}>()

const emit = defineEmits(['closeNav'])

const title = ref<string>('Create new \nproject')

const showMobileNav =()=> {
  emit('closeNav')
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4); 
  z-index: 100;
  backdrop-filter: blur(6px);
  overflow-y: auto;
  &__body {
    min-height: 100vh;
    position: relative;
    left: 0;
    top: 0;
    width: 260px;
    background: #060606;
    a {
      color: #060606;
      cursor: pointer;
      &.router-link-exact-active {
        color: #E65F2B;
      }
    }
      .container {
      width: 80%;
      margin: 0 auto;
      padding: 20px 0;
      .nav__logo {
        padding: 12px 0;
        margin-bottom: 2rem;
        p {
          color: #fff;
        }
      }
      .nav__btn {
        margin-bottom: 4rem;
        padding-top: 10px;
      }
    }
  }
  .close-btn {
    background: none;
    border: none;
    outline: none;
    position: absolute;
    top: 10px;
    left: 270px;
    cursor: pointer;
  }
}
</style>