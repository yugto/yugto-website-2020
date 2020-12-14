<script context="module">
	import datoRequest from '../../lib/dato-request.js'
	const query = `
			query AllPosts {
				allPosts {
					title
					slug
					body
				}
			}
			`

	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { allPosts } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { posts: allPosts }
	}
</script>

<script>
	export let posts
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#if posts && posts.length}
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
		{/each}
	{/if}
</ul>
