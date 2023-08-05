<template>
  <div class="card">
    <div class="card__container">
      <div :class="['icon', iconClass]">
        <CardIcon :title="item.title" />
      </div>
      <div class="card__text">
        <p> {{ item.title }}</p>
        <h3>{{ item.num }} <sub>{{ item.sub }}</sub></h3>
        <div>
          <span v-if="item.icon === 'up'"><ArrowIcon  /></span> 
          <span v-else><DownIcon  /></span> 
          <span>&nbsp;{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardIcon from './CardIcon.vue';
import {type CardItems } from '@/views/HomeView.vue';
import ArrowIcon from '../icons/ArrowIcon.vue'
import DownIcon from '../icons/DownIcon.vue'

const props = defineProps<{
  item: CardItems;
}>()

const iconClass = computed(()=> {
  return props.item.title === 'Total revenue' ?
  'total' :
  props.item.title === 'Projects' ?
  'proj' :
  props.item.title === 'Time spent' ?
  'time' :
  'resource'
})
</script>

<style scoped lang="scss">
.card {
  background: rgba(255, 255, 255, 0.34);
  border-radius: 14px;
  height: 188px;
  width: 100%;
  &__container {
    width: 87%;
    margin: 0 auto;
    padding: 16px 0;
    .icon {
      color: #F1F1F1;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      margin-bottom: 14px;
    }
  }
  &__text {
    p {
      padding: 12px 0;
      color: #797979;
      font-size: 14px;
    }
    h3 {
      // padding: 12px 0;
      sub {
        font-size: 14px;
        margin-top: -1rem;
      }
    }
    div {
      padding-top: 10px;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
}
.total {
  background: #D398E7;
}
.proj {
  background: #E89271;
}
.time {
  background: #70A1E5;
}
.resource {
  background: #F0C274;
}
</style>