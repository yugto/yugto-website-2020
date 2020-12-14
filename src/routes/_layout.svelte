<script>
	import Navigation from '../components/Navigation/Navigation.svelte';

	export let segment;
</script>

<Navigation {segment}/>

<main>
	<slot></slot>
</main>