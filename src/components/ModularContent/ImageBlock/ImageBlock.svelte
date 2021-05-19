<script>
  import Image from '../../Image/Image.svelte'

  const { image, align, caption } = $$restProps
  const containerClasses = align ? 'container container-large' : 'clear-floats'
  const imageClasses = align ? `align align-${align}` : 'container container-small'
</script>

<style lang="scss">
  @import 'components/ModularContent/ImageBlock/imageBlock.scss';
  @import 'components/ModularContent/align.scss';
</style>

{#if image }
  <div class="section {containerClasses}">
    <Image {image} {caption} className="{imageClasses}" />
  </div>
{/if}
