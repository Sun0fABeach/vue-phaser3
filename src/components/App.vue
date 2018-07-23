<template>
  <GameDownloader />
</template>


<script>
import GameDownloader from './GameDownloader'

export default {
  name: 'app',
  components: { GameDownloader }
}
</script>


<style lang="css">
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
