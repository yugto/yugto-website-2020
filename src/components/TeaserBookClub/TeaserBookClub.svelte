<script>
  import { getContext } from 'svelte'
  import Button from '../Button/Button.svelte'

  let context = getContext('context')
  const { 
    membershipTitle,
    membershipBody,
    membershipButton,
    membershipUrl 
  } = $context.app
</script>

<style lang="scss">
    @import 'components/TeaserBookClub/teaserBookClub.scss';
</style>

<article class="component">
  <h2>{membershipTitle}</h2>
  {#if membershipBody}
    <div>{@html membershipBody}</div>
  {/if}
  <Button url={membershipUrl} theme="yellow" external>
    {membershipButton}
  </Button>
</article>
