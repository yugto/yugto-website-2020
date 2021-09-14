<script>
  import Icon from '../Icon/Icon.svelte'

  export let href
  export let label
</script>

<style lang="scss">
    @import 'components/SubpageNavigation/subpageNavigation.scss';
</style>

<nav class="component section">
  <a class="link typo-green" href="{href}" rel="prefetch">
    <Icon type="chevron-left" className="icon" /> 
    {label}
  </a>
</nav>