export interface ArticleType {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  source: {
    Id: string | null;
    name: string;
  };
  publishedAt: string;
  url: string;
}

export default ArticleType;
