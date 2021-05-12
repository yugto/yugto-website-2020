<script>
  import { getContext } from 'svelte'
  import isInteger from '../../lib/isInteger'
  import Button from '../Button/Button.svelte'

  let context = getContext('context')
  const { 
    membershipTitle,
    membershipBody
  } = $context.app
  export let items
</script>

<style lang="scss">
    @import 'components/Memberships/memberships.scss';
</style>

<article class="component section typo-pink">
  <header class="header">
    {#if membershipTitle}
      <h2 class="typo-xlarge">
        {membershipTitle}
      </h2>
    {/if}
    
    {#if membershipBody}
      <div class="intro container container-medium typo-medium typo-spaced typo-muted">
        {@html membershipBody}
      </div>
    {/if}
  </header>

  <ol class="items container">
    {#each items as { title, price, description, featuredBenefits, patreonLink }}
      <li class="item"> 
        <article class="membership"> 
          <header class="item-header">
            <h2 class="typo-large membership-title">
              {@html title}
            </h2>
            
            <dl class="fee">
              <dt class="typo-small period">Per month (+vat)</dt>
              <dd class="typo-xlarge price">
                {isInteger(price) ? price : price.toFixed(2)}<span class="currency typo-medium">€</span>
              </dd>
            </dl>
            
            <Button className="button" url={patreonLink} theme="pink" external>Join</Button>
          </header>
          <section class="content">
            {#if description}
              <div class="description">{@html description}</div>
            {/if}
            
            {#if featuredBenefits}
              <div class="benefits typo-muted">{@html featuredBenefits}</div>
            {/if}
          </section>
        </article>
      </li>
    {/each}
  </ol>
</article>
