"use client"

import { Box, Typography, ToggleButtonGroup, ToggleButton, Paper, Avatar } from "@mui/material"
import { ViewList, ViewModule } from "@mui/icons-material"
import { Link } from "react-router-dom"
import type { ViewType } from "../types"

interface HeaderProps {
  viewType: ViewType
  toggleView: () => void
}

const Header = ({ viewType, toggleView }: HeaderProps) => {
  return (
    <Box sx={{ display: "flex", mb: 4 }}>
      <Box sx={{ flex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderRadius: "12px",
          }}
        >
          <Avatar src="/placeholder.svg?height=50&width=50" alt="Reader" />
          <Box>
            <Typography variant="h6">Hi Reader,</Typography>
            <Typography variant="body2" color="text.secondary">
              Here's your News!
            </Typography>
          </Box>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 2,
            borderRadius: "12px",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            View Toggle
          </Typography>
          <ToggleButtonGroup
            value={viewType}
            exclusive
            onChange={toggleView}
            aria-label="view type"
            sx={{ width: "100%" }}
          >
            <ToggleButton
              value="grid"
              aria-label="grid view"
              sx={{
                flex: 1,
                bgcolor: viewType === "grid" ? "rgba(76, 175, 80, 0.2)" : "inherit",
                border: "1px solid #e0e0e0",
              }}
            >
              <ViewModule />
            </ToggleButton>
            <ToggleButton
              value="list"
              aria-label="list view"
              sx={{
                flex: 1,
                bgcolor: viewType === "list" ? "rgba(76, 175, 80, 0.2)" : "inherit",
                border: "1px solid #e0e0e0",
              }}
            >
              <ViewList />
            </ToggleButton>
          </ToggleButtonGroup>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: "12px",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Have a Feedback?
          </Typography>
          <Link to="/feedback" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                bgcolor: "rgba(76, 175, 80, 0.2)",
                p: 2,
                borderRadius: "8px",
                textAlign: "center",
                color: "text.primary",
              }}
            >
              <Typography>We're Listening!</Typography>
            </Box>
          </Link>
        </Paper>
      </Box>
    </Box>
  )
}

export default Header

