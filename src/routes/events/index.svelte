<script context="module">
	import datoRequest from '../../lib/dato-request.js'
	const now = new Date()

	const queryPast = `
		query AllPastEvents($startDate: DateTimeFilter = {lt: "${now}"}) {
			allEvents(filter: {startDate: $startDate}) {
				slug
				pretitle
				title
				startDate
				endDate
			}
	}
	`

	const queryFuture = `
		query AllFutureEvents($startDate: DateTimeFilter = {gte: "${now}"}) {
			allEvents(filter: {startDate: $startDate}) {
				slug
				pretitle
				title
				startDate
				endDate
				registerUrl
			}
	}
	`
			
	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { allEvents: past } = await datoRequest({ query: queryPast, fetch: this.fetch, token: DATO_API_TOKEN })
		const { allEvents: future } = await datoRequest({ query: queryFuture, fetch: this.fetch, token: DATO_API_TOKEN })
		return { past, future }
	}
</script>

<script>
	import { getContext } from 'svelte'
	let context = getContext('context')
  const { 
    eventsTitle,
    eventsBody
  } = $context.app

	export let past, future

	import EventsHero from '../../components/EventsHero/EventsHero.svelte'
	import EventsList from '../../components/EventsList/EventsList.svelte'
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

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

