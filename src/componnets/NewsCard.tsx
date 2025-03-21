"use client"

import type React from "react"

import { Card, CardContent, CardMedia, Typography, IconButton, Box, Avatar } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import type { NewsArticle } from "../types"
import { formatDate } from "../utils/dateUtils"

interface NewsCardProps {
  article: NewsArticle
  variant: "grid" | "list"
  onRemove: (url: string) => void
  onViewDetails: (article: NewsArticle) => void
}

const NewsCard = ({ article, variant, onRemove, onViewDetails }: NewsCardProps) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRemove(article.url)
  }

  const handleCardClick = () => {
    onViewDetails(article)
  }

  if (variant === "list") {
    return (
      <Card
        sx={{
          mb: 2,
          position: "relative",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
            transform: "translateY(-2px)",
          },
          display: "flex",
          flexDirection: "column",
          overflow: "visible",
          cursor: "pointer",
        }}
        onClick={handleCardClick}
      >
        <CardContent sx={{ display: "flex", p: 3 }}>
          <Avatar
            src={article.urlToImage || "/placeholder.svg?height=60&width=60"}
            alt={article.title}
            variant="circular"
            sx={{
              width: 60,
              height: 60,
              mr: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: "1rem", fontWeight: 600 }}>
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {article.description?.substring(0, 120)}...
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  px: 1,
                  py: 0.5,
                  bgcolor: "rgba(0,0,0,0.05)",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {formatDate(article.publishedAt)}
                </Typography>
              </Box>
            </Box>
          </Box>
          <IconButton
            size="small"
            onClick={handleRemove}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#ff5252",
              p: 0,
              bgcolor: "rgba(255,255,255,0.8)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,1)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-4px)",
        },
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={article.urlToImage || "/placeholder.svg?height=180&width=320"}
          alt={article.title}
          sx={{ objectFit: "cover", borderRadius: "12px 12px 0 0" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
            zIndex: 1,
          }}
        />
      </Box>
      <CardContent sx={{ p: 3, flex: 1 }}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            height: "48px",
          }}
        >
          {article.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            height: "60px",
          }}
        >
          {article.description?.substring(0, 100)}...
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: "auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              px: 1,
              py: 0.5,
              bgcolor: "rgba(0,0,0,0.05)",
              borderRadius: "4px",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {formatDate(article.publishedAt)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <IconButton
        size="small"
        onClick={handleRemove}
        sx={{ position: "absolute", top: 10, right: 10, color: "#ff5252", p: 0, zIndex: 2, bgcolor: "rgba(255,255,255,0.8)", "&:hover": { bgcolor: "rgba(255,255,255,1)" } }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Card>
  )
}

export default NewsCard