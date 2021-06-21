<script context="module">
	import { seoFragment } from '../graphql/fragments.js'
	import { imageFields } from '../graphql/fields.js'
	import datoRequest from '../lib/dato-request.js'
	
	const query = `
			query About {
				about {
					title
					${seoFragment}
					intro
					images {
						${imageFields}
					}
					body
					outro
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
	import About from '../components/About/About.svelte'

	export let page
</script>

<SeoHead title={ page.title } seo={ page.seo } />
<About {...page} />


