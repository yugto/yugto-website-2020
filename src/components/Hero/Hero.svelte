<script>
  export let pretitle
  export let title
  export let image

  import Illustration from './Illustration.svelte'
</script>

<style lang="scss">
    @import 'components/Hero/hero.scss';
</style>

<article class="component section">
  <div class="inner container container-xlarge">
    <div class="content typo-pink">
      {#if pretitle}
        <h1 class="typo-large typo-green-light">{ pretitle }</h1>
      {/if}

      {#if title}
        <h2 class="typo-xlarge title">{title}</h2>
      {/if}
    </div>
    <div class="media">
      <Illustration image={image} />
    </div>
  </div>
</article>


