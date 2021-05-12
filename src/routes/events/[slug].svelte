<script context="module">
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
					seo {
						description
						title
						twitterCard
						image {
							url
						}
					}
					content {
						... on ParagraphRecord {
							_modelApiKey
							paragraph
						}
						... on TitleRecord {
							_modelApiKey
							title
						}
						... on ImageRecord {
							_modelApiKey
							caption
							image {
								format
								responsiveImage {
									alt
									height
									src
									srcSet
									webpSrcSet
									width
								}
							}
						}
					}
				}
			}
			`
		const { DATO_API_TOKEN } = session
		const { event } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { event }
	}
</script>

<script>
	import EventHero from '../../components/EventHero/EventHero.svelte'
	import SubpageNavigation from '../../components/SubpageNavigation/SubpageNavigation.svelte'
	import ModularContent from '../../components/ModularContent/ModularContent.svelte'
	export let event

	const {title, startDate, endDate, summary, registerUrl, content} = event
</script>


<svelte:head>
	<title>{title}</title>
</svelte:head>

<EventHero {title} {startDate} summary={summary} />
<SubpageNavigation href="/events" label="All events"/>
<ModularContent items={content} />
