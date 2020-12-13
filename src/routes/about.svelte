<script context="module">
	import datoRequest from '../lib/dato-request.js'
	const query = `
			query Home {
				about {
					title
				}
			}
			`

	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { about } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { data: about }
	}
</script>

<script>
	export let data
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site || {data.title}</h1>

<p>This is the 'about' page. There's not much here.</p>