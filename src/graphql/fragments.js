import { seoFields, imageFields } from './fields.js'

const seoFragment = `
  seo {
    ${seoFields}
  }
`

const imageFragment = `
  image {
    ${imageFields}
  }
`

export { seoFragment, imageFragment }
