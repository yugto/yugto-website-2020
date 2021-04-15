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
          href={$context.app.eventbrite}
          rel='noreferrer noopener'
          target='_blank'
        >
          eventbrite
        </a>
      </li>
    </ul>

    <div class="legal typo-small typo-green-light">
      <p>
        Yugto, 
        Dokstraat 41, 
        3082RK Rotterdam, 
        <a href="mailto:yugtobookclubeuropa@gmail.com">yugtobookclubeuropa@gmail.com</a>
      </p>
      <dl>
        <dt>KvK:</dt>
        <dd>1234567</dd>
        
        <dt>BTW:</dt>
        <dd>123456</dd>
      </dl>
    </div>
  </div>
</footer>
