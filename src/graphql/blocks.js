import { imageFragment } from './fragments.js'

const paragraphBlock = 
  `... on ParagraphRecord {
    _modelApiKey
    paragraph
  }`

const titleBlock = 
  `... on TitleRecord {
    _modelApiKey
    title
  }`

const imageBlock = 
  `... on ImageRecord {
    _modelApiKey
    caption
    align
    ${imageFragment}
  }`

const instagramEmbedBlock = 
  `... on InstagramEmbedRecord {
    _modelApiKey
    embedCode
  }`

const contentBlock = `
  content {
    ${paragraphBlock}
    ${titleBlock}
    ${imageBlock}
    ${instagramEmbedBlock}
  }
`

export { contentBlock }
