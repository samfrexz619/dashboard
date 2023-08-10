<template>
  <div class="header">
    <button @click="handleClose" :class="['close', !toggle && 'show']">
      <ChevIcon  />
    </button>
    <div class="header__container">
      <div class="nav-btn">
        <button @click="showMobile" class="">
          <MenuIcon  />
        </button>
        <h1>{{ route.name }}</h1>
      </div>
      <div class="search-avatar">
        <div class="input">
          <SearchInput
            v-model="searchText"
            placeholder="Search for anything..."
          />
        </div>
        <div class="header__avatar">
          <Avatar  />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useNavStore } from '@/stores/nav';
import ChevIcon from '@/components/icons/ChevIcon.vue';
import Avatar from '../BaseAvatar.vue';
import SearchInput from '../SearchInput.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';


defineProps<{
  toggle: boolean;
}>()

const emit = defineEmits(['showNav'])

const showMobile =()=> {
  emit('showNav')
}

const route = useRoute()

const store = useNavStore()

// const {} 

const handleClose =()=> {
  store.closeNav()
}

const searchText = ref<string>('')

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
    .search-avatar {
      display: flex;
      .input {
        width: 350px;
        margin-right: 20px;
      }
    }
    .nav-btn {
      display: flex;
      align-items: center;
      button {
        display: inline;
        @media(min-width: 768px){
          display: none;
        }
        outline: none;
        // display: none;
        border: none;
        background: inherit;
        cursor: pointer;
        padding: 10px;
        margin-right: 10px;
        &:hover {
          background: #fff;
          border-radius: 8px;
        }
      }
      h1 {
        @media(min-width: 768px) {
          font-size: 30px;
        }
        font-weight: 400;
        font-size: 22px;
      }
    }
  }
  &__avatar {
    @media(min-width: 768px) {
      width: 160px;
    }
  }
  .close {
    display: none;
    @media(min-width: 768px) {
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
  .show {
    position: absolute;
    left: 15px;
  }
}
</style>