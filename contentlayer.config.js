import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`, // or `**/*.md` if you use markdown
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    url: { type: 'string', resolve: post => `/blog/${post._raw.flattenedPath}` },
  }
}))

export default makeSource({
  contentDirPath: 'src/content/posts',  // your folder where MDX files are stored
  documentTypes: [Post],
  disableImportAliasWarning: true, // <-- Add this line
})
