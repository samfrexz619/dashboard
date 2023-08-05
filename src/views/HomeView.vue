<script setup lang="ts">
import { ref } from 'vue';
import { uid } from 'uid';
import BaseCard from '@/components/cards/BaseCard.vue';
import TaskCard from '@/components/cards/TaskCard.vue';


export interface CardItems {
  title: string;
  num: string;
  text: string;
  icon: string;
  id?: string;
  sub?: string;
}

const cardItems = ref<CardItems[]>([
  {
    title: 'Total revenue',
    num: '$53, 00989',
    text: '12% increase from last month',
    icon: 'up',
    id: uid(4)
  },
  {
    title: 'Projects',
    num: '95',
    sub: '/100',
    text: '12% increase from last month',
    icon: 'down',
    id: uid(4)
  },
  {
    title: 'Time spent',
    num: '1022',
    sub: '/1300 Hrs',
    text: '12% increase from last month',
    icon: 'up',
    id: uid(4)
  },
  {
    title: 'Resources',
    num: '101',
    sub: '/120',
    text: '12% increase from last month',
    icon: 'up',
    id: uid(4)
  },
])
</script>

<template>
  <main class="container">
    <div class="title">
      <h2>Overview</h2>
    </div>
    <div class="overview">
      <div v-for="item in cardItems" :key="item.id">
        <BaseCard :item="item" />
      </div>
    </div>
    <div class="task">
      <div class="task__card">
        <TaskCard  />
      </div>
      <div>
        <TaskCard  />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .container {
    width: 93%;
    margin: 0 auto;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    .title {
      h2 {
        padding: 1rem 0;
        color: #060606;
        font-size: 22px;
        font-weight: 400;
      }
    }
    .overview {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      column-gap: 12px;
    }
    .task {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      column-gap: 20px;
      padding: 15px 0;
      .task__card {
        grid-column: span 2 / span 2;
      }
    }
  }
</style>