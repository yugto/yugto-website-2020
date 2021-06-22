<script>
  import { getContext } from 'svelte'
  import EventsList from '../EventsList/EventsList.svelte'
  import Button from '../Button/Button.svelte'
  import DiscoSprinkles from '../DiscoSprinkles/DiscoSprinkles.svelte'

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

<article class="component typo-pink">
  <header class="header stack section container">
    {#if eventsTitle}
      <h2 class="typo-xlarge">{eventsTitle}</h2>
    {/if}
    
    {#if eventsBody}
      <div class="body typo-medium container container-small">{@html eventsBody}</div>
    {/if}
  </header>

  <EventsList events={events} theme="dark" />

  <section class="actions stack">
    <Button url="/events" prefetch theme="pink">All events</Button>
  </section>

  <DiscoSprinkles className="sprinkles"/>
</article>
