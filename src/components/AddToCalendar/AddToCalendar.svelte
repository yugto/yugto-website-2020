<script>
  // reference on calendar links
  // https://www.labnol.org/apps/calendar.html

  export let title = ''
  export let description = ''
  export let location = 'Zoom'
  export let startDate
  export let endDate

  let open = false

  const uriStart = encodeURIComponent(startDate)
  const uriEnd = encodeURIComponent(endDate)
  const isoStart = isoDate(startDate)
  const isoEnd = isoDate(endDate)

  function isoDate(date) {
    return new Date(date).toISOString().replace(/[-:.]/g, '')
  }

  const links = [
    {
      url: `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${isoStart}%2F${isoEnd}&details=${description}&location=${location}&text=${title}`,
      title: 'Google Calendar'
    },
    {
      url: `https://outlook.live.com/calendar/0/deeplink/compose?body=${description}&enddt=${uriEnd}&location=${location}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${uriStart}&subject=${title}`,
      title: 'Microsoft Outlook'
    },
    {
      url: `https://outlook.office.com/calendar/0/deeplink/compose?body=${description}&enddt=${uriEnd}&location=${location}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${uriStart}&subject=${title}`,
      title: 'Office 365'
    },
    {
      url: `https://calendar.yahoo.com/?desc=${description}&et=${isoEnd}&in_loc=${location}&st=${isoStart}&title=${title}&v=60`,
      title: 'Yahoo Calendar'
    }
  ]

  function clickHandler(event) {
    event.preventDefault()
    open = !open
  }
</script>

<style lang="scss">
    @import 'components/AddToCalendar/addToCalendar.scss';
</style>

<div class="component">
  <button type="button" class="button" on:click={clickHandler}>+ <span class="label">Add to calendar</span></button>

  {#if open}
    <ul class="list">
      {#each links as { url, title }}
        <li class="item">
          <a 
            class="link typo-green"
            href="{url}" 
            rel='noreferrer noopener'
            target='_blank'
          >
            {title}
          </a>
        </li>
      {/each}
    </ul>

    <span class="backdrop" on:click={clickHandler} />
  {/if}
</div>
