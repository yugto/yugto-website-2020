<script>
  import Button from '../Button/Button.svelte'
  import EventDetails from '../EventDetails/EventDetails.svelte'

  export let events
  export let theme = 'light'
</script>

<style lang="scss">
  @import 'components/EventsList/eventsList.scss';
</style>

<section class="container section stack">
  <slot />
  <ol class="items">
    {#each events as {slug, pretitle, title, startDate, endDate, registerUrl}}
      <li class="container container-small item theme-{theme}">
        <article class="card">
          <h2 class="typo-large title">
            <a class="link" href="/events/{slug}" prefetch="true">
              {#if pretitle}
                <span class="typo-medium">{pretitle}</span>
                <br/>
              {/if}
              {#if title}
                <span class="typo-semibold">{title}</span>
              {/if}
            </a>
          </h2>

          <EventDetails startDate={startDate} className="details" />
          
          <p class="actions">
            <Button 
              url="/events/{slug}" 
              prefetch 
              theme="{theme === 'light' ? 'green-muted' : 'pink-muted'}" 
              level="secondary"
            >
              Details
            </Button>

            <!-- registerUrl only on 'queryFuture' -->
            {#if registerUrl}
              <Button 
                url="{registerUrl}" 
                theme="{theme === 'light' ? 'green' : 'pink'}" 
                external 
                level="secondary"
              >
                Register
              </Button>
            {/if}
          </p>
        </article>
      </li>
    {/each}
  </ol>
</section>