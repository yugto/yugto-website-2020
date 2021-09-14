<script>
  import Illustration from './Illustration.svelte'

  export let title
  export let text
</script>

<style lang="scss">
    @import 'components/AboutSection/aboutSection.scss';
</style>

<section class="section component">
  <div class="media container container-xsmall">
    <Illustration />
  </div>

  <div class="content container container-small typo-pink">
    <h2 class="typo-large typo-bold">{title}</h2>

    <div class="body">
      {@html text}
    </div>
  </div>
</section>
