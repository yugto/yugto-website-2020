<script context="module">
	import datoRequest from '../../lib/dato-request.js'
	const query = `
			query AllPosts {
				allPosts {
					slug
					title
					teaser
					createdAt
					publishDate
					featuredImage {
						format
						responsiveImage {
							alt
							height
							src
							srcSet
							webpSrcSet
							width
						}
					}
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

	import BlogHero from '../../components/BlogHero/BlogHero.svelte'
	import PostsList from '../../components/PostsList/PostsList.svelte'
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<BlogHero title="Recent posts" />

{#if posts && posts.length}
	<PostsList {posts} />
{/if}
