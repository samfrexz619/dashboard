<template>
  <div>
    <IconProj v-if="iconName === 'Projects'" />
    <TaskIcon v-else-if="iconName === 'Tasks'" />
    <IconDasboard v-else-if="iconName === 'Dashboard'" />
    <IconLog v-else-if="iconName === 'Time log'" />
    <IconMgt v-else-if="iconName === 'Resource mgnt'" />
    <IconUser v-else-if="iconName === 'Users'" />
    <TempIcon v-else-if="iconName === 'Project template'" />
    <SettingsIcon  v-else />
  </div>
</template>

<script setup lang="ts">
import IconDasboard from '@/components/icons/IconDasboard.vue';
import IconLog from '@/components/icons/IconLog.vue';
import IconMgt from '@/components/icons/IconMgt.vue';
import IconProj from '@/components/icons/IconProj.vue';
import IconUser from '@/components/icons/IconUser.vue';
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import TaskIcon from '@/components/icons/TaskIcon.vue';
import TempIcon from '@/components/icons/TempIcon.vue';

defineProps<{
  iconName: string;
}>()
</script>

<style scoped>

</style>