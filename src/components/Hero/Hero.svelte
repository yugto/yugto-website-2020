<script>
  export let pretitle
  export let title
  export let body
  export let image
  export let shopLink

  import Image from '../Image/Image.svelte'
  import Button from '../Button/Button.svelte'
</script>

<style lang="scss">
    @import 'components/Hero/hero.scss';
</style>

<article class="component section">
  <div class="inner container">
    <div class="typo-pink">
      {#if pretitle}
        <h1 class="typo-large typo-green-light">{ pretitle }</h1>
      {/if}

      {#if title}
        <h2 class="typo-xlarge title">{title}</h2>
      {/if}

      {#if body}
        <div class="typo-medium typo-spaced body">{ @html body }</div>
      {/if}
    </div>
    <div class="media">
      <Image image={image}/>
      <Button className="button" url={shopLink} external>Visit book store</Button>
    </div>
  </div>
</article>


