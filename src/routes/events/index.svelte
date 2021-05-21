<script context="module">
	import {seoFields} from '../../graphql/fields.js'
	import datoRequest from '../../lib/dato-request.js'
	const now = new Date()

	const fields = `
		slug
		pretitle
		title
		startDate
		endDate
	`

	const query_seo = `
		query EventsSeo {
			app {
				eventsSeo {
					${seoFields}
				}
			}
		}
	`

	const queryPast = `
		query AllPastEvents($startDate: DateTimeFilter = {lt: "${now}"}) {
			allEvents(filter: {startDate: $startDate}) {
				${fields}
			}
	}
	`

	const queryFuture = `
		query AllFutureEvents($startDate: DateTimeFilter = {gte: "${now}"}) {
			allEvents(filter: {startDate: $startDate}) {
				${fields}
				registerUrl
			}
	}
	`
			
	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { app } = await datoRequest({ query: query_seo, fetch: this.fetch, token: DATO_API_TOKEN })
		const { allEvents: past } = await datoRequest({ query: queryPast, fetch: this.fetch, token: DATO_API_TOKEN })
		const { allEvents: future } = await datoRequest({ query: queryFuture, fetch: this.fetch, token: DATO_API_TOKEN })
		return { seo: app.eventsSeo, past, future }
	}
</script>

<script>
	import { getContext } from 'svelte'
	let context = getContext('context')
  const { 
    eventsTitle,
    eventsBody
  } = $context.app

	export let seo
	export let past
	export let future

	import SeoHead from '../../components/SeoHead/SeoHead.svelte'
	import EventsHero from '../../components/EventsHero/EventsHero.svelte'
	import EventsList from '../../components/EventsList/EventsList.svelte'
</script>

<SeoHead title={seo.title} seo={ seo } />
<EventsHero title={eventsTitle} body={eventsBody} />

{#if future && future.length}	
	<EventsList events={future}>
		<h2 class="typo-bold typo-medium">Upcoming events</h2>
	</EventsList>
{/if}

{#if past && past.length}	
	<EventsList events={past}>
		<h2 class="typo-bold typo-medium">Past events</h2>
	</EventsList>
{/if}

