<script>
	import Navigation from '../components/Navigation/Navigation.svelte';

	export let segment;
</script>

<style lang="scss" global>
	@import 'styles/global.scss';
</style>

<Navigation {segment}/>

<main>
	<slot></slot>
</main>