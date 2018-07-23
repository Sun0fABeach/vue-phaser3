<template>
  <AsyncDownload />
</template>


<script>
const AsyncDownload = () => ({
    component: import(/* webpackChunkName: "game" */ './Game.vue'),
    loading: {
      template: '<div class="info">Downloading ...</div>'
    },
    error: {
      template: '<div class="info">Could not download game.</div>'
    },
    delay: 0
})

export default {
  name: 'gameDownloader',
  components: { AsyncDownload }
}
</script>


<style lang="css" scoped>
.info {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
