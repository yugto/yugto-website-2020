<script>
  import Image from '../Image/Image.svelte'

  export let title
  export let text
  export let image
</script>

<style lang="scss">
    @import 'components/AboutSection/aboutSection.scss';
</style>

<section class="section component">
  <div class="media">
    <Image image={image} className="image"/>
  </div>

  <div class="content container container-small typo-pink">
    <h2 class="typo-large typo-bold">{title}</h2>

    <div class="body">
      {@html text}
    </div>
  </div>
</section>
