
<template>
  <div class="search">
    <input 
      type="search" 
      :value="modelValue"
      :placeholder="placeholder"
      @input="getValue"
    />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  placeholder: string;
  modelValue: string;
}>()

const emit = defineEmits(['update:modelValue'])

const getValue =(e: Event)=> {
  let val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val)
}
</script>

<style scoped lang="scss">
.search {
  background: #fff;
  border-radius: 55px;
  width: 100%;
  padding: 12px 16px;
  input {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
  }
}
</style>