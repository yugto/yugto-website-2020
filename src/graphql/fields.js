const seoFields = `
  description
  title
  twitterCard
  image {
    width
    height
    url
  }
`

const imageFields = `
  format
  responsiveImage {
    width
    height
    alt
    src
    webpSrcSet
    srcSet
  }
`

export { seoFields, imageFields }
