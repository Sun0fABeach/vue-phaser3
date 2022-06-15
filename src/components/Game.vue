<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

const downloaded = ref(false)
const containerId = 'game-container'
let gameInstance = null

onMounted(async () => {
  const game = await import(/* webpackChunkName: "game" */ '@/game/game')
  downloaded.value = true
  nextTick(() => {
    gameInstance = game.launch(containerId)
  })
})

onUnmounted(() => {
  gameInstance.destroy(false)
})
</script>

<template>
  <div :id="containerId" v-if="downloaded" />
  <div class="placeholder" v-else>
    Downloading ...
  </div>
</template>

<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
