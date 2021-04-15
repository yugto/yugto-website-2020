<script>
  import formatDate from '../../lib/formatDate.js'
  const {posts} = $$restProps
</script>

<style lang="scss">
    @import 'components/PostsList/postsList.scss';
</style>

<ol class="items section">
  {#each posts as {slug, title, summary, createdAt}}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li class="container container-small item">
      <a 
        rel="prefetch" 
        href="blog/{slug}"
        class="link"
      >
        <time class="typo-small typo-green-muted">{formatDate(createdAt)}</time>
        <h2 class="typo-large title">{title}</h2>
        {#if summary}
          <p class="body">{@html summary}</p>
        {/if}
      </a>
    </li>
	{/each}
</ol>
