<script setup lang="ts">
import Sidebar from "~/components/Sidebar.vue";
import ChatDetail from "~/components/ChatDetail.vue";

const online = useOnline()
</script>

<template>
  <div class="bg-white text-zinc-800 flex border-neutral-200 rounded-2xl border truncate">
    <Sidebar/>
    <ChatDetail/>
  </div>
</template>
