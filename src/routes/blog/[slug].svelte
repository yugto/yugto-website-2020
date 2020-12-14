<script context="module">
	import datoRequest from '../../lib/dato-request.js'
	
	export async function preload({ params }, session) {
		const query = `
			query Post {
				post(filter: {slug: {eq: "${params.slug}"}}) {
					title,
					body
				}
			}
			`
		const { DATO_API_TOKEN } = session
		const { post } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { post }
	}
</script>

<script>
	export let post;
</script>


<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	{@html post.body}
</div>
