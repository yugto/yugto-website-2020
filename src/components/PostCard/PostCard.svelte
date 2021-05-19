<script>
  import formatDate from '../../lib/formatDate.js'
  import Image from '../Image/Image.svelte'

  const {post, stacked} = $$restProps
  const {slug, title, teaser, createdAt, publishDate, featuredImage} = post
</script>

<style lang="scss">
    @import 'components/PostCard/postCard.scss';
</style>
  
<article>
  <a 
    rel="prefetch" 
    href="blog/{slug}"
    class="link{stacked ? ' stacked-layout' : ''}{featuredImage ? ' has-image' : ''}"
  >
    {#if featuredImage}
      <Image image={featuredImage} />
    {/if}
    <time class="typo-small typo-muted">{formatDate(publishDate || createdAt)}</time>
    <h2 class="typo-large typo-semibold title">{title}</h2>
    {#if teaser}
      <p class="body typo-muted">{@html teaser}</p>
    {/if}
  </a>
</article>
