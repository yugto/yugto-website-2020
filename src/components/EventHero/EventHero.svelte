<script>
  import formatDate from '../../lib/formatDate.js'
  import EventDetails from '../EventDetails/EventDetails.svelte'
  
  export let title
  export let summary
  export let startDate
</script>

<style lang="scss">
    @import 'components/EventHero/eventHero.scss';
</style>

<header class="component section">
  <div class="container container-medium typo-pink content">
    <h1 class="typo-xlarge">
      {title}
    </h1>
    {#if summary}
      <div class="typo-medium typo-spaced body">
        {@html summary}
      </div>
    {/if}
    
    {#if startDate}
      <EventDetails startDate={startDate} className="details"/>
    {/if}
  </div>
</header>
