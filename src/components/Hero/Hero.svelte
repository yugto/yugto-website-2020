<script>
  export let title
  export let body
</script>

<style lang="scss">
    @import 'components/Hero/hero.scss';
</style>

<article class="component section">
  <div class="inner container typo-pink">
    {#if title}
      <h1 class="typo-bold title">{ title }</h1>
    {/if}

    {#if body}
      <div class="container container-small typo-large typo-green-light body">
        {@html body}
      </div>
    {/if}
  </div>
</article>
