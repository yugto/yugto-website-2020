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

const responsiveImageFields = `
  width
  height
  alt
  src
  webpSrcSet
  srcSet
`

const imageFields = `
  format
  responsiveImage {
    ${responsiveImageFields}
  }
`

export { seoFields, imageFields, responsiveImageFields }
