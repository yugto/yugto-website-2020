<script context="module">
	import datoRequest from '../lib/dato-request.js'
	const query = `
			query Home {
				about {
					title
					seo {
						description
						title
						twitterCard
						image {
							width
							height
							url
						}
					}
				}
			}
			`

	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { about } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { page: about }
	}
</script>

<script>
	import SeoHead from '../components/SeoHead/SeoHead.svelte'

	export let page
</script>

<SeoHead title={ page.title } seo={ page.seo } />

<h1>{page.title}</h1>
