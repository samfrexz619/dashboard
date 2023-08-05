<template>
  <div class="header">
    <button @click="handleClose" class="close">
      <ChevIcon  />
    </button>
    <div class="header__container">
      <h1 class="header__title">{{ route.name }}</h1>
      <div class="header__avatar">
        <Avatar  />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useNavStore } from '@/stores/nav';
import ChevIcon from '@/components/icons/ChevIcon.vue';
import Avatar from '../BaseAvatar.vue';

const route = useRoute()

const store = useNavStore()

const handleClose =()=> {
  store.closeNav()
}

</script>

<style scoped lang="scss">
.header {
  min-height: 10vh;
  position: relative;
  width: 100%;
  background: #EBDFD7;
  box-shadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.15)';
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  &__container {
    width: 93%;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__avatar {
    width: 160px;
  }
  .close {
    position: absolute;
    left: -15px;
    top: 15px;
    cursor: pointer;
    border: none;
    outline: none;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
  }
}
</style>