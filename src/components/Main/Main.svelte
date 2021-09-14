<script>
  export let segment

  const themes = {
    'undefined': 'green-dark',
    'about': 'green-dark'
  }
</script>

<style lang="scss">
    @import 'components/Main/main.scss';
</style>

<main class="theme--{themes[segment] ? themes[segment] : 'pink'}"><slot /></main>