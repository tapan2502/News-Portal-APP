import type { NewsResponse } from "../types"

// Use environment variable for API key with fallback
const API_KEY ="0fc99a21ce694c4a8d2f6d1769705e35"
const BASE_URL = "https://newsapi.org/v2"

// Get the date from one month ago
const getOneMonthAgoDate = () => {
  const date = new Date()
  date.setMonth(date.getMonth() - 1)
  return date.toISOString().split("T")[0] // Format as YYYY-MM-DD
}

export const fetchNews = async (): Promise<NewsResponse> => {
  const fromDate = getOneMonthAgoDate()
  const url = `${BASE_URL}/everything?q=tesla&from=${fromDate}&sortBy=publishedAt&apiKey=${API_KEY}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`News API responded with status: ${response.status}`)
    }

    const data: NewsResponse = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching news:", error)
    throw error
  }
}

