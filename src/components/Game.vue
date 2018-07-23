<template>
  <div id="game-container" />
</template>

<script>
import launch from 'Game/game'

export default {
  name: 'game',
  mounted() {
    launch()
  }
}
</script>
