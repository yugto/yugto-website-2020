<script context="module">
	import datoRequest from '../lib/dato-request.js'
	const query = `
			query Home {
				home {
					title
				}
				app {
					store
				}
			}
			`

	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { home, app } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { data: { ...home, ...app }}
	}
</script>

<script>
	export let data
	import successkid from 'images/successkid.jpg';
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!{data.title}</h1>

<figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
	<a href={data.store} target="_blank">Visit the store</a>
</p>
