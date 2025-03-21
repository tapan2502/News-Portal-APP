"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Grid, Box, Typography, CircularProgress, Pagination, Alert } from "@mui/material"
import NewsCard from "./NewsCard"
import NewsDetailDialog from "./NewsDetailDialog"
import { fetchNews } from "../services/newsApi"
import type { NewsArticle, ViewType } from "../types"

interface NewsFeedProps {
  viewType: ViewType
}

const NewsFeed = ({ viewType }: NewsFeedProps) => {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const articlesPerPage = 6
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true)
        const data = await fetchNews()
        setArticles(data.articles)
        setTotalPages(Math.ceil(data.articles.length / articlesPerPage))
        setError(null)
      } catch (err) {
        setError("Failed to load news. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [])

  const handleRemoveArticle = (url: string) => {
    setArticles(articles.filter((article) => article.url !== url))
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleViewDetails = (article: NewsArticle) => {
    setSelectedArticle(article)
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  const paginatedArticles = articles.slice((page - 1) * articlesPerPage, page * articlesPerPage)

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4, flex: 1 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ flex: 1 }}>
        {error}
      </Alert>
    )
  }

  return (
    <Box sx={{ flex: 1 }}>
      {viewType === "grid" ? (
        <Grid container spacing={3}>
          {paginatedArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.url}>
              <NewsCard
                article={article}
                variant="grid"
                onRemove={handleRemoveArticle}
                onViewDetails={handleViewDetails}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box>
          {paginatedArticles.map((article) => (
            <NewsCard
              key={article.url}
              article={article}
              variant="list"
              onRemove={handleRemoveArticle}
              onViewDetails={handleViewDetails}
            />
          ))}
        </Box>
      )}

      {articles.length === 0 && (
        <Typography variant="h6" sx={{ textAlign: "center", my: 4 }}>
          No articles found.
        </Typography>
      )}

      {articles.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4, mb: 2 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
            shape="rounded"
            siblingCount={0}
            boundaryCount={1}
            sx={{
              "& .MuiPaginationItem-root": {
                borderRadius: "50%",
                margin: "0 4px",
                minWidth: "36px",
                height: "36px",
                fontSize: "1rem",
                color: "#666",
                "&.Mui-selected": {
                  bgcolor: "#fff",
                  fontWeight: "bold",
                  color: "#333",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                },
              },
            }}
          />
        </Box>
      )}

      <NewsDetailDialog open={dialogOpen} onClose={handleCloseDialog} article={selectedArticle} />
    </Box>
  )
}

export default NewsFeed

