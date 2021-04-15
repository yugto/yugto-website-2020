<script>
  import { getContext } from 'svelte'
  import Button from '../Button/Button.svelte'

  let context = getContext('context')
  const { 
    donateTitle,
    donateBody,
    donateButton,
    donateUrl 
  } = $context.app
</script>

<style lang="scss">
    @import 'components/Donate/donate.scss';
</style>

<article class="component">
  <h2>{donateTitle}</h2>
  {#if donateBody}
    <div>{@html donateBody}</div>
  {/if}
  <Button url={donateUrl} theme="yellow" external>
    {donateButton}
  </Button>
</article>
