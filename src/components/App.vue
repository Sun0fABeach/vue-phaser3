<template>
  <Game/>
</template>


<script>
import Game from '../components/Game'

export default {
  name: 'app',
  components: { Game }
}
</script>


<style lang="css">
html, body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
