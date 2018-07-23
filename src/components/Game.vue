<template>
  <div id="game-container" />
</template>

<script>
import launch from '../game/game'

export default {
  name: 'game',
  mounted() {
    launch()
  }
}
</script>
