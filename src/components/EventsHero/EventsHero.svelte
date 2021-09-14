<script>  
  export let title
  export let body
</script>

<style lang="scss">
    @import 'components/EventsHero/eventsHero.scss';
</style>

<header class="component section">
  <div class="container container-medium typo-pink">
    {#if body}
      <h1 class="typo-xlarge">
        {title}
      </h1>
    {/if}
    
    {#if body}
      <div class="typo-medium typo-spaced">
        {@html body}
      </div>
    {/if}
  </div>
</header>
