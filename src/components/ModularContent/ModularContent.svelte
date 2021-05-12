<script>
	import ImageBlock from './ImageBlock/ImageBlock.svelte'
	import Title from './Title/Title.svelte'
	import Paragraph from './Paragraph/Paragraph.svelte'

	const components = {
    title: Title,
    image: ImageBlock,
    paragraph: Paragraph
  };

  export let items
</script>

<style lang="scss">
    @import 'components/ModularContent/modularContent.scss';
</style>

<div class="component stack">
  {#each items as item}
    {#if components[item._modelApiKey]}
      <svelte:component this={components[item._modelApiKey]} {...item} />
    {:else}
      {console.warn('no matching component of type:', item._modelApiKey)}
    {/if}
  {/each}
</div>
