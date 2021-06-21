	<script>
	import DiscoSprinkles from '../DiscoSprinkles/DiscoSprinkles.svelte'
	import Image from '../Image/Image.svelte'
  export let title, intro, images, body, outro
</script>

<style lang="scss">
    @import 'components/About/about.scss';
</style>

{#if title }
	<header class="header section container container-small">
		<h1 class="title typo-pink typo-xlarge">{title}</h1>
	</header>
{/if}

{#if intro}
	<section class="container container-medium section typo-pink typo-serif emphasize">
		{@html intro}
	</section>
{/if}

{#if images && images.length}
	<section class="images">
		<div class="grid container container">
			{#each images as image}
				<Image image={image} className="image"/>
			{/each}
		</div>
		<DiscoSprinkles className="sprinkles" />
	</section>
{/if}

{#if body}
	<section class="container container-small section body typo-pink">
		{@html body}
	</section>
{/if}

{#if outro}
	<section class="container container-medium section typo-pink typo-serif emphasize outro">
		{@html outro}
	</section>
{/if}
