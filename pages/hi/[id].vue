<script setup lang="ts">
const route = useRoute()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <div/>
    <h3>
      Hi,
    </h3>
    <div text-xl>
      {{ name }}!
    </div>

    <template v-if="user.otherNames.length">
      <span op-50>Also as known as:</span>
      <ul>
        <li v-for="otherName in user.otherNames" :key="otherName">
          <router-link :to="`/hi/${otherName}`" replace>
            {{ otherName }}
          </router-link>
        </li>
      </ul>
    </template>

    <Counter/>

    <div>
      <NuxtLink
          class="m-3 text-sm btn"
          to="/"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>
