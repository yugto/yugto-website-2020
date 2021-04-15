<script>
  import Image from '../../Image/Image.svelte'

  const { image, caption } = $$restProps
</script>

<div class="section">
  <Image {image} {caption} className="container container-small" />
</div>
