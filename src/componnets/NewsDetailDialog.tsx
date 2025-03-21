"use client"

import { Dialog, DialogContent, IconButton, Typography, Box, Link, Divider, Avatar, Chip } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import PersonIcon from "@mui/icons-material/Person"
import LanguageIcon from "@mui/icons-material/Language"
import type { NewsArticle } from "../types"
import { formatDate } from "../utils/dateUtils"

interface NewsDetailDialogProps {
  open: boolean
  onClose: () => void
  article: NewsArticle | null
}

const NewsDetailDialog = ({ open, onClose, article }: NewsDetailDialogProps) => {
  if (!article) return null

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        },
      }}
    >
      <DialogContent sx={{ p: 0, overflow: "hidden" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={article.urlToImage || "/placeholder.svg?height=360&width=800"}
            alt={article.title}
            sx={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              borderRadius: "16px 16px 0 0",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
            }}
          />
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "rgba(255,255,255,0.9)",
              "&:hover": {
                bgcolor: "white",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: 3,
              color: "white",
            }}
          >
            <Typography variant="h4" component="h2" sx={{ mb: 1, fontWeight: 600 }}>
              {article.title}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
              <Chip
                icon={<AccessTimeIcon sx={{ color: "white !important" }} />}
                label={formatDate(article.publishedAt)}
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
              {article.author && (
                <Chip
                  icon={<PersonIcon sx={{ color: "white !important" }} />}
                  label={article.author}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.2)",
                    color: "white",
                    "& .MuiChip-icon": {
                      color: "white",
                    },
                  }}
                />
              )}
              <Chip
                icon={<LanguageIcon sx={{ color: "white !important" }} />}
                label={article.source.name}
                sx={{
                  bgcolor: "rgba(255,255,255,0.2)",
                  color: "white",
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            {article.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" paragraph>
            {article.content || "No content available. Please visit the source website for the full article."}
          </Typography>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar src="/placeholder.svg?height=40&width=40" alt={article.source.name} />
              <Typography variant="subtitle1" fontWeight={600}>
                {article.source.name}
              </Typography>
            </Box>
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1,
                bgcolor: "primary.main",
                color: "white",
                borderRadius: "8px",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Read Full Article
            </Link>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default NewsDetailDialog

