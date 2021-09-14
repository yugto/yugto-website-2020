<script>
  export let height = 200
  export let theme = 'dark-green'

  let component
  let open = false
  let finished = true
  let scrollHeight = null
  let offsetHeight = null
  let animation
  const durationVector = 10

  function clickHandler(event) {
    event.preventDefault()
    open = !open
    collapse()
  }

  function collapse() {
    finished = false

    if(animation) {
      animation.pause()
      animation = null
    }

    scrollHeight = component.scrollHeight
    animation = component.animate({
      height: [`${offsetHeight}px`, `${open ? scrollHeight : height}px`]
    }, {
      fill: 'both',
      duration: Math.abs(offsetHeight - (open ? scrollHeight : height)) * .1 * durationVector,
      easing: 'cubic-bezier(.17, .67, .35, .98)'
    })

    animation.onfinish = () => finished = true
  }
</script>

<style lang="scss">
    @import 'components/Collapsible/collapsible.scss';
</style>

<div 
  class="component {theme} {open && finished ? 'open' : ''}" 
  style="--height: {height}px" 
  bind:this={component}
  bind:offsetHeight
>
  <slot />
  <button class="button" type="button" on:click={clickHandler}>
    <span class="typo-muted typo-small">Show {open ? 'less' : 'more'}</span>
  </button>
</div>
