<script context="module">
	import { contentBlock } from '../../graphql/blocks.js'
	import { seoFragment } from '../../graphql/fragments.js'
	import datoRequest from '../../lib/dato-request.js'
	
	export async function preload({ params }, session) {
		const query = `
			query Event {
				event(filter: {slug: {eq: "${params.slug}"}}) {
					title
					startDate
					endDate
					summary
					registerUrl
					${seoFragment}
					${contentBlock}
				}
			}
			`
		const { DATO_API_TOKEN } = session
		const { event } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { event }
	}
</script>

<script>
	import SeoHead from '../../components/SeoHead/SeoHead.svelte'
	import EventHero from '../../components/EventHero/EventHero.svelte'
	import SubpageNavigation from '../../components/SubpageNavigation/SubpageNavigation.svelte'
	import ModularContent from '../../components/ModularContent/ModularContent.svelte'

	export let event

	const {title, seo, startDate, endDate, summary, registerUrl, content} = event
</script>

<SeoHead title={ title } seo={ seo } />

<article>
	<EventHero {title} {startDate} {endDate} {summary} {registerUrl} />
	<SubpageNavigation href="/events" label="All events"/>
	<ModularContent items={content} />
</article>
