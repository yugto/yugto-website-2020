<script>
  import formatDate from '../../lib/formatDate.js'
  
  export let startDate
  export let className

  function getDate(date) {
    return formatDate(date, { hour: 'numeric', minute: 'numeric' })
  }
</script>

<style lang="scss">
    @import 'components/EventDetails/eventDetails.scss';
</style>

<section class="component {className ? className : ''}">
  <dl>
    <dt class="typo-small typo-muted">When</dt>
    <dd><time class="typo-medium date">{getDate(startDate)}</time></dd>
  </dl>
  <dl>
    <dt class="typo-small typo-muted">Where</dt>
    <dd class="typo-medium">Online/Zoom</dd>
  </dl>
</section>