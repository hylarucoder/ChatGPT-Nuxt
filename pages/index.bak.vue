<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div>

    <Logos mb-6/>
    <Suspense>
      <ClientOnly>
        <PageView v-if="online"/>
        <div v-else>
          lllllll
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div class="italic op50">
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry/>
  </div>
</template>
