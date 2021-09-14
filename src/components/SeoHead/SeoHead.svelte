<script>
  /**
   * Generate document head object for Svelte based on SEO field from Dato CMS.
   *
   * @see https://svelte.dev/docs#svelte_head
   * @see https://www.datocms.com/docs/other/fields/#seo-meta-tags-fields
   *
   * @param {String} title,
   * @param {Object} seo
   * @param {String} seo.title
   * @param {String} [seo.description]
   * @param {Object} [seo.image]
   * @param {String} [seo.image.url]
   * @param {Number} [seo.image.width]
   * @param {Number} [seo.image.height]
   */
  import Favicons from '../Favicons/Favicons.svelte'
  export let seo = {}, title;
</script>

<svelte:head>
  <title>{ title }</title>
  <meta name="description" content="{ seo.description }" />
  <meta property="og:title" name="twitter:title" content="{ seo.title || title }" />
  {#if seo.description }
    <meta property="og:description" name="twitter:description" content="{ seo.description }" />
    <meta property="og:description" content="{ seo.description }" />
  {/if}
  {#if seo.image }
    <meta property="og:image" content="{ seo.image.url }?auto=format&fm=jpg&auto=quality" />
    <meta property="og:image:width" content="{ seo.image.width }" />
    <meta property="og:image:height" content="{ seo.image.height }" />
  {/if}
  <meta name="twitter:card" content="{ seo.twitterCard || 'summary' }" />

  <Favicons />
</svelte:head>
