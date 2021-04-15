<script>
  const fontFiles = [
    'Syne-VariableFont_wght',
    'Piazzolla-VariableFont_opszwght'
  ]
</script>

<svelte:head>
  {#each fontFiles as fontFile }
    <link 
      rel="preload" 
      href={`/fonts/${fontFile}.woff2`} 
      as="font" 
      type="font/woff2" 
      crossorigin>
  {/each}
</svelte:head>
