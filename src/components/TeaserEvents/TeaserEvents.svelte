<script>
  import { getContext } from 'svelte'
  import EventsList from '../EventsList/EventsList.svelte'
  import Button from '../Button/Button.svelte'

  let context = getContext('context')
  const { 
    eventsTitle,
    eventsBody 
  } = $context.app
  export let events
</script>

<style lang="scss">
    @import 'components/TeaserEvents/teaserEvents.scss';
</style>

<article class="component">
  <header class="header stack section container">
    {#if eventsTitle}
      <h2 class="typo-xlarge">{eventsTitle}</h2>
    {/if}
    
    {#if eventsBody}
      <div class="body typo-medium container container-small">{@html eventsBody}</div>
    {/if}
  </header>

  <EventsList events={events} />

  <section class="actions stack">
    <Button url="/events" prefetch theme="green">All events</Button>
  </section>
</article>
