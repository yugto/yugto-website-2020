<script>
  const { embedCode } = $$restProps

  const embed = embedCode ? embedCode.replace('data-instgrm-captioned', '') : null
</script>

<style lang="scss">
  @import 'components/ModularContent/InstagramEmbed/instagramEmbed.scss';
</style>

{#if embed}
  <aside class="instagram-embed container container-large section">
    <div class="inner">
      {@html embed}
    </div>
  </aside>
{/if}
