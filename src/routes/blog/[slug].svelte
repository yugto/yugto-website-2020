<script context="module">
	import datoRequest from '../../lib/dato-request.js'
	
	export async function preload({ params }, session) {
		const query = `
			query Post {
				post(filter: {slug: {eq: "${params.slug}"}}) {
					title
					summary
					createdAt
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
						... on InstagramEmbedRecord {
							_modelApiKey
							embedCode
						}
					}
				}
			}
			`
		const { DATO_API_TOKEN } = session
		const { post } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { post }
	}
</script>

<script>
	import PostHero from '../../components/PostHero/PostHero.svelte'
	import SubpageNavigation from '../../components/SubpageNavigation/SubpageNavigation.svelte'
	import ModularContent from '../../components/ModularContent/ModularContent.svelte'
	export let post

	const {title, summary, createdAt, updatedAt, instagramEmbed, content} = post
</script>


<svelte:head>
	<title>{title}</title>
</svelte:head>

<PostHero {title} {summary} {createdAt} />
<SubpageNavigation href="/blog" label="All posts"/>
<ModularContent items={content} />
