<script>
  import PostCard from '../PostCard/PostCard.svelte'
  const {posts} = $$restProps

  const selectedCount = 6
</script>

<style lang="scss">
  @import 'components/PostsList/postsList.scss';
</style>
  
<ol class="section stack container container-xlarge featured">
  {#each posts.slice(0, selectedCount) as post}
    <li class="item">
      <PostCard {post} stacked />
    </li>
  {/each}
</ol>

<ol class="items section stack">
  {#each posts.slice(selectedCount, -1) as post}
    <li class="container container-small item">
      <PostCard {post} />
    </li>
	{/each}
</ol>
