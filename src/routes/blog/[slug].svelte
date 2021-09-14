<script context="module">
	import { contentBlock } from '../../graphql/blocks.js'
	import { seoFragment } from '../../graphql/fragments.js'
	import datoRequest from '../../lib/dato-request.js'
	
	export async function preload({ params }, session) {
		const query = `
			query Post {
				post(filter: {slug: {eq: "${params.slug}"}}) {
					title
					summary
					createdAt
					${seoFragment}
					${contentBlock}
				}
			}
			`
		const { DATO_API_TOKEN } = session
		const { post } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { post }
	}
</script>

<script>
	import SeoHead from '../../components/SeoHead/SeoHead.svelte'
	import PostHero from '../../components/PostHero/PostHero.svelte'
	import SubpageNavigation from '../../components/SubpageNavigation/SubpageNavigation.svelte'
	import ModularContent from '../../components/ModularContent/ModularContent.svelte'
	export let post

	const {title, seo, summary, createdAt, updatedAt, instagramEmbed, content} = post
</script>

<SeoHead title={ title } seo={ seo } />

<PostHero {title} {summary} {createdAt} />
<SubpageNavigation href="/blog" label="All posts"/>
<ModularContent items={content} />
