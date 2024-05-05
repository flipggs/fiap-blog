
export interface Metadata {
  tags: string[]; // Array de tags
}

export interface SpaceLink {
  sys: {
    type: 'Link';
    linkType: 'Space';
    id: string;
  };
}

export interface EnvironmentLink {
  sys: {
    id: string;
    type: 'Link';
    linkType: 'Environment';
  };
}

export interface ContentTypeLink {
  sys: {
    type: 'Link';
    linkType: 'ContentType';
    id: string;
  };
}

export interface Sys {
  space: SpaceLink;
  id: string;
  type: 'Entry';
  createdAt: string;
  updatedAt: string;
  environment: EnvironmentLink;
  revision: number;
  contentType: ContentTypeLink;
  locale: string;
}

export interface ContentNode {
  data: {};
  content: Content[];
  nodeType: 'paragraph' | 'text';
}

export interface Content {
  data: {};
  marks: { type: 'bold' }[];
  value: string;
  nodeType: 'paragraph' | 'text';
}

export interface PostContent {
  data: {};
  content: ContentNode[];
  nodeType: 'document';
}

export interface PostCategory {
  metadata: Metadata;
  sys: Sys;
  fields: {
    categorySlug: string,
    categoryTitle: string
  }
}

export interface FieldsPageBlogPost {
  metadata: Metadata;
  sys: Sys;
  fields: {
    postTitle: string;
    postSlug: string;
    postDescription: string;
    postContent: PostContent;
    postCategory: PostCategory;
    previewPostImage: BlogImage;
    avatarPost: AvatarPost;
  };
}

export interface ImageDetails {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

export interface BlogImage {
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    description: string;
    file: ImageDetails;
  };
}

export interface CategorySys {
  space: SpaceLink;
  id: string;
  type: 'Entry' | 'Asset'; // Use 'Entry' or 'Asset' based on the object type
  createdAt: string;
  updatedAt: string;
  environment: EnvironmentLink;
  revision: number;
  contentType: ContentTypeLink;
  locale: string;
}

export interface Category {
  metadata: Metadata;
  sys: CategorySys;
  fields: {
    categoryTitle: string;
    categorySlug: string;
  };
}


export interface AvatarPost {
  metadata: Metadata;
  sys: Sys;
  fields: {
    description: string;
    file: ImageDetails;
    title: string;
  };
}