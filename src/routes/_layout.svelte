<script context="module">
	import datoRequest from '../lib/dato-request.js'
	const query = `
			query App {
				app {
					store
					eventbrite
					instagram
					bookclubTitle
					bookclubBody
					bookclubButton
					bookclubUrl
					donateTitle
					donateBody
					donateButton
					donateUrl
					membershipTitle
					membershipBody
					eventsTitle
					eventsBody
				}
			}
			`

	export async function preload(page, session) {
		const { DATO_API_TOKEN } = session
		const { app } = await datoRequest({ query, fetch: this.fetch, token: DATO_API_TOKEN })
		return { app }
	}
</script>

<script>
	import { setContext, onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import PreloadAssets from '../components/PreloadAssets/PreloadAssets.svelte';
	import Header from '../components/Header/Header.svelte';
	import Main from '../components/Main/Main.svelte';
	import Footer from '../components/Footer/Footer.svelte';

	export let segment
	export let app
	let reducedMotion = false

	let context = writable({ segment, app, reducedMotion } );
	setContext('context', context);

	$: $context = { segment, app, reducedMotion }

	onMount(() => {
		$context.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
	})
</script>

<style lang="scss" global>
	@import 'styles/global.scss';
</style>

<PreloadAssets/>
<Header />
<Main segment={segment}>
	<slot></slot>
</Main>
<Footer />
