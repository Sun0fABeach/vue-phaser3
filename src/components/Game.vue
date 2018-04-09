<template>
  <div id="game-container" />
</template>

<script>
export default {
  name: 'game',
  mounted() {
    import(/* webpackChunkName: "game" */ '../game/game').then(game => {
      game.launch()
    })
  }
}
</script>

<style lang="css" scoped>
</style>
