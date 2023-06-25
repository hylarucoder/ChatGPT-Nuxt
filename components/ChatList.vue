<template>
  <div>
    <ChatListItem
      v-for="c in chatData"
      :title="c.title"
      :is-active="c.isActive"
      :count="c.count"
      :created-at="c.createdAt"
    />
  </div>
</template>
<script setup lang="ts">
import ChatListItem from "~/components/ChatListItem.vue"

const chatData = [
  {
    isActive: true,
    title: "just a title #01",
    count: 1,
    createdAt: "2021-10-01 12:00:00",
  },
  {
    isActive: false,
    title: "just a title #02",
    count: 2,
    createdAt: "2021-10-01 12:00:00",
  },
  {
    isActive: false,
    title: "just a title #03",
    count: 3,
    createdAt: "2021-10-01 12:00:00",
  },
  {
    isActive: false,
    title: "just a title #04",
    count: 4,
    createdAt: "2021-10-01 12:00:00",
  },
  {
    isActive: false,
    title: "just a title #05",
    count: 5,
    createdAt: "2021-10-01 12:00:00",
  },
]
</script>
