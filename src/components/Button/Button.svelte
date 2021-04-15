<script>
  import Icon from '../Icon/Icon.svelte'

  export let url
  export let theme = 'yellow'
  export let external
  export let className
</script>

<style lang="scss">
    @import 'components/Button/button.scss';
</style>

{#if url}
  <a 
    class="component theme-{theme} {className ? className : ''}" 
    href={url}
    rel={external ? 'noreferrer noopener' : undefined}
    target={external ? '_blank' : undefined}
  >
    <Icon type="arrow-right" className="icon" />
    <slot/>
  </a>
{/if}
