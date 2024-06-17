export type ClientSliderItem = {
  src: string;
  name: string;
  height: number;
  width: number;
};

interface ImageSize {
  sourceUrl: string;
  width: string;
  height: string;
}

interface MediaDetails {
  file: string;
  sizes: ImageSize[];
}

interface FeaturedImageNode {
  mediaDetails: MediaDetails;
}

interface FeaturedImage {
  node: FeaturedImageNode;
}

interface CategoryNode {
  slug: string;
  name: string;
}

interface Categories {
  nodes: CategoryNode[];
}

export interface Post {
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: Categories;
  content?: string | TrustedHTML;
}


export interface PostList {
  nodes: Post[];
}