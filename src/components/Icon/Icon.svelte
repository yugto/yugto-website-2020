<script>
	import ArrowRight from './ArrowRight.svelte'

	const components = {
    'arrow-right': ArrowRight
  };

  export let type
  export let className = false
</script>

{#if components[type]}
  <svelte:component this={components[type]} {className} />
{:else}
  {console.warn('no matching component of type:', type)}
{/if}
