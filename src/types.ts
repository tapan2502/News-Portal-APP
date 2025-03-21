export type ViewType = "grid" | "list"

export interface NewsSource {
  id: string | null
  name: string
}

export interface NewsArticle {
  source: NewsSource
  author: string
  title: string
  description: string
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string
}

export interface NewsResponse {
  status: string
  totalResults: number
  articles: NewsArticle[]
}

export interface FeedbackData {
  fullName: string
  address: string
  country: string
  state: string
  email: string
  mobile: string
  feedback: string
}

