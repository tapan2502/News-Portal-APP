"use client"

import { Box, Typography, Paper, Avatar, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { Link } from "react-router-dom"
import type { ViewType } from "../types"

interface SidebarProps {
  viewType: ViewType
  toggleView: () => void
}

const Sidebar = ({ viewType, toggleView }: SidebarProps) => {
  return (
    <Box sx={{ width: 280, flexShrink: 0 }}>
      {/* User Greeting */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Avatar src="/placeholder.svg?height=50&width=50" alt="Reader" sx={{ width: 50, height: 50 }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Hi Reader,
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here's your News!
          </Typography>
        </Box>
      </Paper>

      {/* View Toggle */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 2,
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          View Toggle
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ToggleButtonGroup value={viewType} exclusive onChange={() => toggleView()} aria-label="view type">
            <ToggleButton
              value="grid"
              aria-label="grid view"
              sx={{
                width: 100,
                height: 60,
                bgcolor: viewType === "grid" ? "rgba(76, 175, 80, 0.2)" : "#e9edf2",
                border: "none",
                borderRadius: "8px 0 0 8px",
                "&:hover": {
                  bgcolor: viewType === "grid" ? "rgba(76, 175, 80, 0.3)" : "#e0e4e9",
                },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    bgcolor: "#888",
                    borderRadius: 1,
                    mb: 0.5,
                  }}
                />
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    bgcolor: "#888",
                    borderRadius: 1,
                    mb: 0.5,
                  }}
                />
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    bgcolor: "#888",
                    borderRadius: 1,
                  }}
                />
              </Box>
            </ToggleButton>
            <ToggleButton
              value="list"
              aria-label="list view"
              sx={{
                width: 100,
                height: 60,
                bgcolor: viewType === "list" ? "rgba(76, 175, 80, 0.2)" : "#e9edf2",
                border: "none",
                borderRadius: "0 8px 8px 0",
                "&:hover": {
                  bgcolor: viewType === "list" ? "rgba(76, 175, 80, 0.3)" : "#e0e4e9",
                },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 0.5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Box sx={{ width: 8, height: 8, bgcolor: "#888", borderRadius: "50%", mr: 1 }} />
                  <Box sx={{ width: 25, height: 6, bgcolor: "#888", borderRadius: 1 }} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Box sx={{ width: 8, height: 8, bgcolor: "#888", borderRadius: "50%", mr: 1 }} />
                  <Box sx={{ width: 25, height: 6, bgcolor: "#888", borderRadius: 1 }} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ width: 8, height: 8, bgcolor: "#888", borderRadius: "50%", mr: 1 }} />
                  <Box sx={{ width: 25, height: 6, bgcolor: "#888", borderRadius: 1 }} />
                </Box>
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Paper>

      {/* Feedback Section */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          Have a Feedback?
        </Typography>
        <Link to="/feedback" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              bgcolor: "secondary.main",
              p: 2,
              borderRadius: "8px",
              textAlign: "center",
              color: "text.primary",
              "&:hover": {
                bgcolor: "#f6a6c1",
              },
            }}
          >
            <Typography>We're Listening!</Typography>
          </Box>
        </Link>
      </Paper>
    </Box>
  )
}

export default Sidebar

