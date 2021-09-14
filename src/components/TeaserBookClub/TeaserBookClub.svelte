<script>
  import { getContext } from 'svelte'
  import Button from '../Button/Button.svelte'

  let context = getContext('context')
  const { 
    bookclubTitle,
    bookclubBody,
    bookclubButton,
    bookclubUrl 
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
      {#if bookclubTitle}
        <h2 class="typo-xlarge typo-pink">{bookclubTitle}</h2>
      {/if}

      {#if bookclubBody}
        <div class="typo-medium typo-spaced typo-pink body">{@html bookclubBody}</div>
      {/if}
      
      <Button url={bookclubUrl} className="button" theme="pink" external>
        {bookclubButton}
      </Button>
    </div>

  </div>
</article>
