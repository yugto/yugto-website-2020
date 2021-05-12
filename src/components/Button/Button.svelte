<script>
  import Icon from '../Icon/Icon.svelte'

  export let theme = 'yellow'
  export let level = 'primary'
  export let url = null
  export let external = false
  export let prefetch = false
  export let className = null

  let rel = prefetch ? 'prefetch' : (external ? 'noreferrer noopener' : undefined)
</script>

<style lang="scss">
    @import 'components/Button/button.scss';
</style>

{#if url}
  <a 
    class="component theme-{theme} level-{level} {className ? className : ''}" 
    href={url}
    rel={rel}
    target={external ? '_blank' : undefined}
  >
    {#if level === 'primary'}
      <Icon type="arrow-right" className="icon" />
    {/if}
    <slot/>
  </a>
{/if}
