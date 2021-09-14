<script>
  import { getContext } from 'svelte'

  let context = getContext('context')
</script>

<style lang="scss">
    @import 'components/Footer/footer.scss';
</style>

<footer class="component section">
  <div class="container">
    <ul class="socials">
      <li class="social">
        <a 
          href={$context.app.instagram}
          rel='noreferrer noopener'
          target='_blank'
        >
          Instagram
        </a>
      </li>
      <li class="social">
        <a 
          href={$context.app.discord}
          rel='noreferrer noopener'
          target='_blank'
        >
          Discord
        </a>
      </li>
    </ul>

    <div class="legal typo-small typo-green-light">
      <p>
        Yugto, 
        Dokstraat 41, 
        3082RK Rotterdam, 
        <a href="mailto:yugtoeuropa@gmail.com">yugtoeuropa@gmail.com</a>
      </p>
      <dl>
        <dt>KvK:</dt>
        <dd>81 14 17 77</dd>
        
        <dt>BTW:</dt>
        <dd>293 395 330 B01</dd>
      </dl>
    </div>
  </div>
</footer>
