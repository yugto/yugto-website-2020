<script>
  import PostCard from '../PostCard/PostCard.svelte'
  const {posts, featured} = $$restProps
</script>

<style lang="scss">
  @import 'components/PostsList/postsList.scss';
</style>
  
<ol class="section stack container container-xlarge featured">
  {#each featured as post}
    <li class="item">
      <PostCard {post} stacked />
    </li>
  {/each}
</ol>

<ol class="items section stack">
  {#each posts as post}
    <li class="container container-small item">
      <PostCard {post} />
    </li>
	{/each}
</ol>
