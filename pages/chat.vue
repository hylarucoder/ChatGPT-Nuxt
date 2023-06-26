<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue"
</script>

<template>
  <div class="bg-white h-full text-zinc-800 flex border-neutral-200 rounded-2xl border truncate">
      <Sidebar />
    <div></div>
    <NuxtPage />
  </div>
</template>
