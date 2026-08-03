export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  imageId?: string;
  featured: boolean;
  published: boolean;
  categoryId: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
}