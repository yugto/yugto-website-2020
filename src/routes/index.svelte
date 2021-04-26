<script context="module">
	import datoRequest from '../lib/dato-request.js'
	const query = `
			query Home {
				home {
					pretitle
					title
					body
					image {
						format
						responsiveImage {
							width
							height
							alt
							src
							webpSrcSet
        			srcSet
						}
					}
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
				allMemberships {
					title
					price
					description
					benefits
					patreonLink
				}
			}
			`

	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { home, app } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { page: { ...home, ...app }}
	}
</script>

<script>
	import SeoHead from '../components/SeoHead/SeoHead.svelte'
	import Hero from '../components/Hero/Hero.svelte'
	import TeaserBookClub from '../components/TeaserBookClub/TeaserBookClub.svelte'
	import Donate from '../components/Donate/Donate.svelte'

	export let page
</script>

<SeoHead title={ page.title } seo={ page.seo } />
<Hero 
	pretitle={page.pretitle} 
	title={page.title} 
	body={page.body} 
	image={page.image}
	shopLink={page.store}
/>
<TeaserBookClub />
<Donate />
