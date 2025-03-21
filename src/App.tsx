"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import NewsFeed from "./componnets/NewsFeed"
import FeedbackForm from "./componnets/FeedbackForm"
import Sidebar from "./componnets/Sidebar"
import type { ViewType } from "./types"

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // Mint green color from the design
    },
    secondary: {
      main: "#f8bbd0", // Light pink color for the feedback button
    },
    background: {
      default: "#f5f7fa", // Light blue background from the design
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      fontSize: "1.1rem",
    },
    body1: {
      fontSize: "0.9rem",
    },
    body2: {
      fontSize: "0.8rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  },
})

function App() {
  const [viewType, setViewType] = useState<ViewType>("grid")

  const toggleView = () => {
    setViewType((prev) => (prev === "grid" ? "list" : "grid"))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
          <Container maxWidth="xl" sx={{ py: 3 }}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Sidebar viewType={viewType} toggleView={toggleView} />
              <Routes>
                <Route path="/" element={<NewsFeed viewType={viewType} />} />
                <Route path="/feedback" element={<FeedbackForm />} />
              </Routes>
            </Box>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App

