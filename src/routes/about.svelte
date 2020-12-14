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
		return { data: about }
	}
</script>

<script>
	import SeoHead from '../components/SeoHead/SeoHead.svelte'

	export let data
</script>

<SeoHead title={ data.title } seo={ data.seo } />

<h1>About this site || {data.title}</h1>

<p>This is the 'about' page. There's not much here.</p>