<script context="module">
	import datoRequest from '../lib/dato-request.js'
	const query = `
			query Home {
				home {
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
				app {
					store
				}
			}
			`

	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { home, app } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { data: { ...home, ...app }}
	}
</script>

<script>
	import SeoHead from '../components/SeoHead/SeoHead.svelte'

	export let data
</script>

<SeoHead title={ data.title } seo={ data.seo } />

<h1>{data.title}</h1>

<p>
	<a href={data.store} target="_blank">Visit the store</a>
</p>