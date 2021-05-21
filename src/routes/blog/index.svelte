<script context="module">
	import {imageFields, seoFields} from '../../graphql/fields.js'
	import datoRequest from '../../lib/dato-request.js'
	const fields = `
		slug
		title
		teaser
		createdAt
		publishDate
		featuredImage {
			${imageFields}
		}
	`
	
	const query_seo = `
		query BlogSeo {
			app {
				blogSeo {
					${seoFields}
				}
			}
		}
	`

	const query_featured = `
		query FeaturedPosts {
			allPosts(filter: {featured: {eq: "true"}}, first: "6") {
				${fields}
			}
		}
	`

	const query_default = `
		query RegularPosts {
			allPosts(filter: {featured: {eq: "false"}}) {
				${fields}
			}
		}
	`

	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { app } = await datoRequest({ query: query_seo, fetch: this.fetch, token: DATO_API_TOKEN })
		const { allPosts: featuredPosts } = await datoRequest({ query: query_featured, fetch: this.fetch, token: DATO_API_TOKEN })
		const { allPosts: regularPosts } = await datoRequest({ query: query_default, fetch: this.fetch, token: DATO_API_TOKEN })
		return { seo: app.blogSeo, posts: regularPosts, featured: featuredPosts }
	}
</script>

<script>
	export let seo
	export let posts
	export let featured

	import SeoHead from '../../components/SeoHead/SeoHead.svelte'
	import BlogHero from '../../components/BlogHero/BlogHero.svelte'
	import PostsList from '../../components/PostsList/PostsList.svelte'
</script>

<SeoHead title={seo.title} seo={ seo } />
<BlogHero title="Recent posts" />
{#if posts && posts.length && featured && featured.length }
	<PostsList {posts} {featured} />
{/if}
