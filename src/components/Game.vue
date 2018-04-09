<template>
  <div id="game-container" />
</template>

<script>
export default {
  name: 'game',
  mounted() {
    import(/* webpackChunkName: "game" */ '../game/Game').then(game => {
      new game.Game()
    })
  }
}
</script>

<style lang="css" scoped>
</style>
