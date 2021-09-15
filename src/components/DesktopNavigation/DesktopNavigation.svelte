<script>
  import { getContext } from 'svelte'
  import segments from '../../data/segments.js'
  import StoreButton from '../StoreButton/StoreButton.svelte'

  let context = getContext('context')
</script>

<style lang="scss">
    @import 'components/DesktopNavigation/desktopNavigation.scss';
</style>

<nav class="component">
  <ul class="items">
    {#each segments as {key, title, prefetch}}
      <li class="item">
        <a 
          aria-current="{$context.segment === key ? 'page' : undefined}" 
          href={key}
          class="link"
          rel={prefetch ? 'prefetch' : undefined}
        >
            {title}
        </a>
      </li>
    {/each}
    <!-- <li class="item store">
      <StoreButton url={$context.app.store} />
    </li> -->
  </ul>
</nav>
