<script context="module">
	import { seoFragment, imageFragment } from '../graphql/fragments'
	import { responsiveImageFields } from '../graphql/fields'
	import datoRequest from '../lib/dato-request.js'
	const query = `
			query Home {
				home {
					title
					body
					${seoFragment}
					aboutImage {
						format
						responsiveImage(imgixParams: { w: 400, auto: format }) {
							${responsiveImageFields}
						}
					}
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
	title={page.title} 
	body={page.body} 
/>

{#if page.aboutTitle && page.aboutBody && page.aboutImage}
	<AboutSection title={page.aboutTitle} text={page.aboutBody} image={page.aboutImage}/>
{/if}

{#if events && events.length}
	<TeaserEvents events={events} />
{/if}
<Memberships items={allMemberships}/>
<TeaserBookClub />
<!-- <Donate /> -->
