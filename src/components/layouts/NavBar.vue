<template>
  <div class="navbar">
    <div class="navbar__side" v-show="toggleNav">
      <SideBar :navItems="navItems" />
    </div>
    <div :class="['navbar__top', classes]">
      <TopNav :toggle="toggleNav" @show-nav="toggleMobileNav" />
      <div :class="['main__content', classes]">
        <RouterView  />
      </div>
    </div>
  </div>
  <div v-if="close" class="mobile">
    <MobileSideBar :navItems="navItems" @close-nav="toggleMobileNav" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useNavStore } from '@/stores/nav';
import { storeToRefs } from 'pinia';
import { uid } from 'uid'
import SideBar from '../ui/navigation/SideBar.vue';
import TopNav from '../ui/navigation/TopNav.vue';
import MobileSideBar from '../ui/navigation/MobileSideBar.vue';

const store = useNavStore()

const { toggleNav } = storeToRefs(store)

export interface NavItems {
  name: string;
  path: string;
  id: string;
}

const navItems = ref<NavItems[]>([
  {
    name: 'Projects',
    path: '/projects',
    id: uid(4)
  },
  {
    name: 'Tasks',
    path: '/tasks',
    id: uid(4)
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    id: uid(4)
  },
  {
    name: 'Time log',
    path: '/tasks-log',
    id: uid(4)
  },
  {
    name: 'Resource mgnt',
    path: '/resources',
    id: uid(4)
  },
  {
    name: 'Users',
    path: '/users',
    id: uid(4)
  },
  {
    name: 'Project template',
    path: '/project',
    id: uid(4)
  },
  {
    name: 'Menu settings',
    path: '/menu',
    id: uid(4)
  },
])

const classes = computed(()=> {
  return toggleNav.value === false && 'w-full'
})

const close = ref<boolean>(false)

const toggleMobileNav =()=> {
  close.value = !close.value
}

</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  position: relative;
  &__close {
    position: absolute;
    left: 70px;
    top: 3px;
  }
  &__side {
    display: none;
    @media(min-width: 768px){
      position: fixed;
      width: 260px;
      top: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
  }
  &__top {
    width: 100%;
    @media(min-width: 768px){
      width: calc(100% - 260px);
      position: fixed;
      left: 260px;
    }
  }
  .w-full {
    width: 100%;
    left: 0;
  }
}

.mobile {
  display: block;
  @media(min-width: 768px){
    display: none;
  }
}

.main__content {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10vh;
  bottom: 0;
  width: 100%;
  @media(min-width: 768px) {
    width: calc(100% - 260px);
  }
}
</style>