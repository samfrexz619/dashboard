<template>
  <div class="avatar">
    <div class="avatar__pic">
      <p>SD</p>
    </div>
    <div class="avatar__text">
      <p>Samfrexz Don</p>
      <small>Product Designer</small>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.avatar {
  width: 100%;
  background: #fff;
  border-radius: 50px;
  color: #292D32;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.02);
  padding: 7px 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  &__pic {
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EBDFD7;
    border-radius: 50%;
  }
  &__text {
    p {
      line-height: 0.1in;
      font-size: 15px;
    }
    small {
      font-size: 12px;
      color: rgba(41, 45, 50, 0.44);
    }
  }
}
</style>