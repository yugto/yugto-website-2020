<script>
  import Image from '../../Image/Image.svelte'

  const { image, caption } = $$restProps
</script>

{#if image }
  <div class="section">
    <Image {image} {caption} className="container container-small" />
  </div>
{/if}
