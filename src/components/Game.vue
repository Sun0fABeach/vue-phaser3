<template>
  <div id="game-container" v-if="downloaded" />
  <div class="placeholder" v-else>
    Downloading ...
  </div>
</template>


<script>
export default {
  name: 'Game',
  data() {
    return {
      downloaded: false
    }
  },
  mounted() {
    import(/* webpackChunkName: "game" */ '@/game/game').then(game => {
      this.downloaded = true
      this.$nextTick(() => game.launch())
    })
  }
}
</script>


<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
