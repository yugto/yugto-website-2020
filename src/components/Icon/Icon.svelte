<script>
	import ArrowRight from './ArrowRight.svelte'
	import ChevronLeft from './ChevronLeft.svelte'

	const components = {
    'arrow-right': ArrowRight,
    'chevron-left': ChevronLeft
  };

  export let type
  export let className = false
</script>

{#if components[type]}
  <svelte:component this={components[type]} {className} />
{:else}
  {console.warn('no matching component of type:', type)}
{/if}
