<script context="module">
	import datoRequest from '../../lib/dato-request.js'
	
		const query_featured = `
			query FeaturedPosts {
				allPosts(filter: {featured: {eq: "true"}}, first: "6") {
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

		const query_default = `
			query RegularPosts {
				allPosts(filter: {featured: {eq: "false"}}) {
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
		const { allPosts: featuredPosts } = await datoRequest({ query: query_featured, fetch: this.fetch, token: DATO_API_TOKEN })
		const { allPosts: regularPosts } = await datoRequest({ query: query_default, fetch: this.fetch, token: DATO_API_TOKEN })
		return { posts: regularPosts, featured: featuredPosts }
	}
</script>

<script>
	export let posts
	export let featured

	import BlogHero from '../../components/BlogHero/BlogHero.svelte'
	import PostsList from '../../components/PostsList/PostsList.svelte'
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<BlogHero title="Recent posts" />

{#if posts && posts.length && featured && featured.length }
	<PostsList {posts} {featured} />
{/if}
