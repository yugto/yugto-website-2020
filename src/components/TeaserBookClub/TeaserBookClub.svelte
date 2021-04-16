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

<article class="component section">
  <div class="inner container">
    
    <div class="image">
      <img src="/design/book-club.svg" alt="">
    </div>
    
    <div class="content">
      <h2 class="typo-xlarge typo-pink">{membershipTitle}</h2>
      {#if membershipBody}
        <div class="typo-medium typo-spaced typo-pink body">{@html membershipBody}</div>
      {/if}
      <Button url={membershipUrl} className="button" theme="pink" external>
        {membershipButton}
      </Button>
    </div>

  </div>
</article>
