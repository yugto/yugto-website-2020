<script>  
  import MobileNavigation from '../MobileNavigation/MobileNavigation.svelte'
  import DesktopNavigation from '../DesktopNavigation/DesktopNavigation.svelte'
</script>

<style lang="scss">
    @import 'components/Header/header.scss';
</style>

<header class="component section">
  <div class="container inner">
    <a 
      href="."
      class="link"
    >
        <span class="sr-only">home</span>
        <img src="/logo/yugto-logo.svg" alt="">
    </a>
    <MobileNavigation />
    <DesktopNavigation />
  </div>
</header>
