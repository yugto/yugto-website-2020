<script>
  import { getContext, onMount } from 'svelte'
  import segments from '../../data/segments.js'
  import StoreButton from '../StoreButton/StoreButton.svelte'

  let context = getContext('context')
  let initial = true
  let panel
  let items = []
  let cheese, burger
  const duration = 350
  const stagger = 50
  const animations = []
  const easing = 'cubic-bezier(.17,.67,.35,.98)'

  const frames = {
    transform: ['translateY(100%)', 'translateY(0%)'],
    opacity: [0, 1],
    offset: 0
  }

  const options = {
    duration,
    fill: 'both',
    easing
  }

  function toggleHandler(event) {
		event.preventDefault()
    playAnimations()
	}

	function linkHandler() {
		playAnimations()
  }

  function playAnimations() {
    if(initial) {
      initial = false
      animations.forEach(animation => animation.play())
    } else {
      animations.forEach(animation => animation.reverse())
    }
  }
  
  onMount(() => {
    animations.push(
      panel.animate(frames, options)
    )

    items.forEach((item, index) => {
      animations.push(
        item.animate(frames, {
          ...options,
          delay: duration * .5 + index * stagger,
        })
      )
    })

    animations.push(
      cheese.animate({
        transform: ['rotate(0deg)', 'rotate(45deg)'],
        boxShadow: '0 0 0 white'
      }, options)
    )

    animations.push(
      burger.animate({
        transform: ['rotate(0deg)', 'rotate(135deg)'],
      }, options)
    )

    animations.forEach(animation => animation.pause())
  })
</script>

<style lang="scss">
    @import 'components/MobileNavigation/mobileNavigation.scss';
</style>

<nav class="component">
  <div class="panel" bind:this={panel}>
    <ul class="items">
      <li class="item" bind:this={items[0]}>
        <a 
          aria-current="{$context.segment === undefined ? 'page' : undefined}" 
          href="."
          class="link"
          on:click={linkHandler}
        >
            Home
        </a>
      </li>
      {#each segments as {key, title, prefetch}, index }
        <li class="item" bind:this={items[index + 1]}>
          <a 
            aria-current="{$context.segment === key ? 'page' : undefined}" 
            href={key}
            class="link"
            rel={prefetch ? 'prefetch' : undefined}
            on:click={linkHandler}
          >
              {title}
          </a>
        </li>
      {/each}
      <!-- <li class="item item-store" bind:this={items[segments.length + 1]}>
        <StoreButton url={$context.app.store} extended />
      </li> -->
    </ul>

    <ul class="socials">
      <li class="social" bind:this={items[segments.length + 2]}>
        <a 
          href={$context.app.instagram}
          rel='noreferrer noopener'
          target='_blank'
        >
          Instagram
        </a>
      </li>
      <li class="social" bind:this={items[segments.length + 3]}>
        <a 
          href={$context.app.discord}
          rel='noreferrer noopener'
          target='_blank'
        >
          discord
        </a>
      </li>
    </ul>
  </div>

  <div class="store">
    <StoreButton url={$context.app.store} />
  </div>

  <a href="." class="toggle" on:click={toggleHandler}>
    <span class="cheese" bind:this={cheese}/>
    <span class="burger" bind:this={burger}/>
    <span class="sr-only">Menu</span>
  </a>
</nav>
