<script>
  export let url
  export let extended = false
</script>

<style lang="scss">
    @import 'components/StoreButton/storeButton.scss';
</style>

<a 
  class="component {extended ? 'extended' : ''}" 
  href={url}
  rel='noreferrer noopener'
  target='_blank'
>
  Book Store
</a>
