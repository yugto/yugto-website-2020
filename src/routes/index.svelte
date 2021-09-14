<script context="module">
	import { seoFragment, imageFragment } from '../graphql/fragments'
	import datoRequest from '../lib/dato-request.js'
	const query = `
			query Home {
				home {
					pretitle
					title
					${imageFragment}
					${seoFragment}
					aboutTitle
					aboutBody
				}
				app {
					store
				}
				allMemberships {
					title
					price
					description
					featuredBenefits
					patreonLink
				}
				allEvents(filter: {startDate: {gte: "${new Date()}" }}, first: "2") {
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
		const { home, app, allMemberships, allEvents: events } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { page: { ...home, ...app }, allMemberships, events }
	}
</script>

<script>
	import SeoHead from '../components/SeoHead/SeoHead.svelte'
	import Hero from '../components/Hero/Hero.svelte'
	import TeaserBookClub from '../components/TeaserBookClub/TeaserBookClub.svelte'
	import TeaserEvents from '../components/TeaserEvents/TeaserEvents.svelte'
	// import Donate from '../components/Donate/Donate.svelte'
	import Memberships from '../components/Memberships/Memberships.svelte'
	import AboutSection from '../components/AboutSection/AboutSection.svelte'

	export let page
	export let allMemberships
	export let events
</script>

<SeoHead title={ page.title } seo={ page.seo } />
<Hero 
	pretitle={page.pretitle} 
	title={page.title} 
	image={page.image}
	shopLink={page.store}
/>

{#if page.aboutTitle && page.aboutBody}
	<AboutSection title={page.aboutTitle} text={page.aboutBody}/>
{/if}

{#if events && events.length}
	<TeaserEvents events={events} />
{/if}
<Memberships items={allMemberships}/>
<TeaserBookClub />
<!-- <Donate /> -->
