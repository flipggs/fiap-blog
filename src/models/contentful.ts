export interface FieldsPageBlogPost {
  internalName: string
  seoFields: SeoFields
  slug: string
  author: Author
  publishedDate: string
  title: string
  shortDescription: string
  featuredImage: FeaturedImage
  content: Content
}

export interface SeoFields {
  metadata: Metadata
  sys: Sys
  fields: Fields
}

export interface Metadata {
  tags: any[]
}

export interface Sys {
  space: Space
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment
  revision: number
  contentType: ContentType
  locale: string
}

export interface Space {
  sys: Sys2
}

export interface Sys2 {
  type: string
  linkType: string
  id: string
}

export interface Environment {
  sys: Sys3
}

export interface Sys3 {
  id: string
  type: string
  linkType: string
}

export interface ContentType {
  sys: Sys4
}

export interface Sys4 {
  type: string
  linkType: string
  id: string
}

export interface Fields {
  internalName: string
  pageTitle: string
  pageDescription: string
  nofollow: boolean
  noindex: boolean
  shareImages: ShareImage[]
}

export interface ShareImage {
  metadata: Metadata2
  sys: Sys5
  fields: Fields2
}

export interface Metadata2 {
  tags: any[]
}

export interface Sys5 {
  space: Space2
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment2
  revision: number
  locale: string
}

export interface Space2 {
  sys: Sys6
}

export interface Sys6 {
  type: string
  linkType: string
  id: string
}

export interface Environment2 {
  sys: Sys7
}

export interface Sys7 {
  id: string
  type: string
  linkType: string
}

export interface Fields2 {
  title: string
  description: string
  file: File
}

export interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

export interface Details {
  size: number
  image: Image
}

export interface Image {
  width: number
  height: number
}

export interface Author {
  metadata: Metadata3
  sys: Sys8
  fields: Fields3
}

export interface Metadata3 {
  tags: any[]
}

export interface Sys8 {
  space: Space3
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment3
  revision: number
  contentType: ContentType2
  locale: string
}

export interface Space3 {
  sys: Sys9
}

export interface Sys9 {
  type: string
  linkType: string
  id: string
}

export interface Environment3 {
  sys: Sys10
}

export interface Sys10 {
  id: string
  type: string
  linkType: string
}

export interface ContentType2 {
  sys: Sys11
}

export interface Sys11 {
  type: string
  linkType: string
  id: string
}

export interface Fields3 {
  internalName: string
  name: string
  avatar: Avatar
}

export interface Avatar {
  metadata: Metadata4
  sys: Sys12
  fields: Fields4
}

export interface Metadata4 {
  tags: any[]
}

export interface Sys12 {
  space: Space4
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment4
  revision: number
  locale: string
}

export interface Space4 {
  sys: Sys13
}

export interface Sys13 {
  type: string
  linkType: string
  id: string
}

export interface Environment4 {
  sys: Sys14
}

export interface Sys14 {
  id: string
  type: string
  linkType: string
}

export interface Fields4 {
  title: string
  description: string
  file: File2
}

export interface File2 {
  url: string
  details: Details2
  fileName: string
  contentType: string
}

export interface Details2 {
  size: number
  image: Image2
}

export interface Image2 {
  width: number
  height: number
}

export interface FeaturedImage {
  metadata: Metadata5
  sys: Sys15
  fields: Fields5
}

export interface Metadata5 {
  tags: any[]
}

export interface Sys15 {
  space: Space5
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment5
  revision: number
  locale: string
}

export interface Space5 {
  sys: Sys16
}

export interface Sys16 {
  type: string
  linkType: string
  id: string
}

export interface Environment5 {
  sys: Sys17
}

export interface Sys17 {
  id: string
  type: string
  linkType: string
}

export interface Fields5 {
  title: string
  description: string
  file: File3
}

export interface File3 {
  url: string
  details: Details3
  fileName: string
  contentType: string
}

export interface Details3 {
  size: number
  image: Image3
}

export interface Image3 {
  width: number
  height: number
}

export interface Content {
  data: Data
  content: Content2[]
  nodeType: string
}

export interface Data {}

export interface Content2 {
  data: Data2
  content: Content3[]
  nodeType: string
}

export interface Data2 {
  target?: Target
}

export interface Target {
  metadata: Metadata6
  sys: Sys18
  fields: Fields6
}

export interface Metadata6 {
  tags: any[]
}

export interface Sys18 {
  space: Space6
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment6
  revision: number
  contentType: ContentType3
  locale: string
}

export interface Space6 {
  sys: Sys19
}

export interface Sys19 {
  type: string
  linkType: string
  id: string
}

export interface Environment6 {
  sys: Sys20
}

export interface Sys20 {
  id: string
  type: string
  linkType: string
}

export interface ContentType3 {
  sys: Sys21
}

export interface Sys21 {
  type: string
  linkType: string
  id: string
}

export interface Fields6 {
  internalName: string
  image: Image4
  fullWidth: boolean
  caption?: string
}

export interface Image4 {
  metadata: Metadata7
  sys: Sys22
  fields: Fields7
}

export interface Metadata7 {
  tags: any[]
}

export interface Sys22 {
  space: Space7
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment7
  revision: number
  locale: string
}

export interface Space7 {
  sys: Sys23
}

export interface Sys23 {
  type: string
  linkType: string
  id: string
}

export interface Environment7 {
  sys: Sys24
}

export interface Sys24 {
  id: string
  type: string
  linkType: string
}

export interface Fields7 {
  title: string
  description?: string
  file: File4
}

export interface File4 {
  url: string
  details: Details4
  fileName: string
  contentType: string
}

export interface Details4 {
  size: number
  image: Image5
}

export interface Image5 {
  width: number
  height: number
}

export interface Content3 {
  marks: any[]
  value: string
  nodeType: string
}

