<script>
  export let className = false
  import { onMount, onDestroy, getContext } from 'svelte'
  let context = getContext('context')
  
  let lineLength = 0
  const lines = []
  const rectangles = []
  const circles = []
  const animations = []
  const duration = 3000

  function animateLine(line) {    
    animations.push(line.animate([
      { strokeDashoffset: lineLength },
      { strokeDashoffset: lineLength, offset: .2 + Math.random() * .1 },
      { strokeDashoffset: -lineLength, offset: .8 - Math.random() * .1 },
      { strokeDashoffset: -lineLength }
    ], {
      duration,
      delay: -duration / lines.length * (Math.random() * 10),
      iterations: Infinity,
      easing: 'cubic-bezier(.17,.67,.35,.98)'
    }))
  }

  function animateRectangle(rectangle) {
    const attributes = {}
    const test = [...rectangle.attributes]
      .filter( attribute => attribute.name !== 'class' )
      .forEach( attribute =>  { attributes[attribute.name] = parseFloat(attribute.value) })
    const { x, y, width, height } = attributes

    rectangle.style.transformOrigin = `${ x + width * .5}px ${y + height * .5}px`

    animations.push(rectangle.animate([
      { transform: 'scale(0)' },
      { transform: 'scale(1)', offset: .2 },
      { transform: 'scale(0)', offset: .8 },
      { transform: 'scale(0)' }
    ], {
      duration: duration * .25,
      delay: -duration / rectangles.length * (Math.random() * 10),
      iterations: Infinity,
      easing: 'steps(2)'
    }))
  }

  function animateCircle(circle) {
    const x = parseFloat(circle.getAttribute('cx'))
    const y = parseFloat(circle.getAttribute('cy'))

    circle.style.transformOrigin = `${x}px ${y}px`

    animations.push(circle.animate({
      transform: ['scale(0)', 'scale(1)']
    }, {
      duration: duration * .25,
      iterations: Infinity,
      delay: -duration / circles.length * (Math.random() * 10),
      direction: 'alternate-reverse',
      easing: 'cubic-bezier(0.200, 1.800, 0.365, 1.000)'
    }))
    
  }

  $: {
    if($context.reducedMotion) {
      animations.forEach( animation => animation.cancel())
      lineLength = 0
    }
  }

  onMount(() => {
    if(lines && lines.length) {
      lineLength = lines[0].getTotalLength() * 2
      lines.forEach( line => animateLine(line))
    }

    if(rectangles && rectangles.length) {
      rectangles.forEach( rectangle => animateRectangle(rectangle))
    }

    if(circles && circles.length) {
      circles.forEach( circle => animateCircle(circle))
    }
  })

  onDestroy(() => animations.forEach( animation => animation.cancel()))

</script>

<style lang="scss">
    @import 'components/DiscoSprinkles/discoSprinkles.scss';
</style>

<svg class="root {className ? className : ''}" class:isReducedMotion="{$context.reducedMotion === true}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 454.999" preserveAspectRatio="xMidYMid meet">

  <line bind:this={lines[0]} stroke-dasharray={lineLength} stroke-dashoffset={lineLength} class="st0" x1="188.692" y1="82.437" x2="244.988" y2="11.811"/>
  <line bind:this={lines[1]} stroke-dasharray={lineLength} stroke-dashoffset={lineLength} class="st1" x1="890.467" y1="198.741" x2="946.763" y2="128.114"/>
  <line bind:this={lines[2]} stroke-dasharray={lineLength} stroke-dashoffset={lineLength} class="st0" x1="913.889" y1="442.989" x2="970.186" y2="372.363"/>
  <line bind:this={lines[3]} stroke-dasharray={lineLength} stroke-dashoffset={lineLength} class="st0" x1="728.624" y1="208.592" x2="784.92" y2="137.966"/>
  <line bind:this={lines[4]} stroke-dasharray={lineLength} stroke-dashoffset={lineLength} class="st2" x1="584.812" y1="78.087" x2="641.109" y2="7.461"/>
  <line bind:this={lines[5]} stroke-dasharray={lineLength} stroke-dashoffset={lineLength} class="st2" x1="184.597" y1="376.457" x2="240.894" y2="305.831"/>
  <line bind:this={lines[6]} stroke-dasharray={lineLength} stroke-dashoffset={lineLength} class="st0" x1="10.547" y1="335.002" x2="66.843" y2="264.376"/>
  
  <circle bind:this={circles[0]} class="st3" cx="207.773" cy="129.524" r="6.366"/>
  <circle bind:this={circles[1]} class="st3" cx="927.173" cy="65.42" r="5.758"/>
  <circle bind:this={circles[2]} class="st4" cx="33.843" cy="187.898" r="10.525"/>
  <circle bind:this={circles[3]} class="st3" cx="982.213" cy="396.161" r="11.515"/>
  <circle bind:this={circles[4]} class="st3" cx="226.308" cy="433.521" r="13.562"/>
  
  <rect bind:this={rectangles[0]} x="149.076" y="53.313" class="st5" width="14.026" height="14.026" />
  <rect bind:this={rectangles[1]} x="779.802" y="45.333" class="st5" width="8.177" height="8.177"/>
  <rect bind:this={rectangles[2]} x="764.551" y="402.558" class="st6" width="12.181" height="12.181"/>
  <rect bind:this={rectangles[3]} x="973.854" y="178.396" class="st5" width="6.567" height="6.567"/>
  <rect bind:this={rectangles[4]} x="89.59" y="385.669" class="st5" width="12.099" height="12.099"/>
</svg>
