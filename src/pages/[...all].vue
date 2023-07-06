<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <div>Not found</div>
    <button @click="router.back()">
      Back
    </button>
  </main>
</template>
