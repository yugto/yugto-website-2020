<script>
  export let className = false
  const { image, caption } = $$restProps

  const { format, responsiveImage } = image
</script>

<style lang="scss">
    @import 'components/Image/image.scss';
</style>

<figure 
  class="component {className ? className : ''}" 
  style={`--aspect-ratio: ${responsiveImage.height / responsiveImage.width * 100}%`}
>
  <div class="ratio">
    <picture>
      <source type="image/webp" srcset="{responsiveImage.webpSrcSet}">
      <source type="image/{format}" srcset="{responsiveImage.srcSet}">
      <img
        alt={responsiveImage.alt}
        src={responsiveImage.src}
        loading="lazy"
      />
    </picture>
  </div>
  {#if caption}
    <figcaption class="typo-small caption">{caption}</figcaption>
  {/if}
</figure>
