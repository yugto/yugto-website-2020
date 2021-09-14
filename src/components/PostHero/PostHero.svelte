<script>
  import formatDate from '../../lib/formatDate.js'
  
  export let title
  export let summary
  export let createdAt
</script>

<style lang="scss">
    @import 'components/PostHero/postHero.scss';
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
    <p class="typo-small date">
      <time datetime={createdAt}>
        {formatDate(createdAt)}
      </time>
    </p>
  </div>
</header>
