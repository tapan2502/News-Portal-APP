"use client"

import type React from "react"

import { useState } from "react"
import { Box, TextField, Button, Typography, Grid, InputAdornment, Avatar, FormHelperText } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate } from "react-router-dom"
import type { FeedbackData } from "../types"

const FeedbackForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FeedbackData>({
    fullName: "",
    address: "",
    country: "",
    state: "",
    email: "",
    mobile: "",
    feedback: "",
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FeedbackData, string>>>({})

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FeedbackData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors: Partial<Record<keyof FeedbackData, string>> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid e-mail"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Submit form logic would go here
    console.log("Form submitted:", formData)

    // Redirect back to home page
    navigate("/")
  }

  return (
    <Box sx={{ flex: 1, maxWidth: 800, mx: "auto", py: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Avatar src="/placeholder.svg?height=50&width=50" alt="Reader" sx={{ mr: 2, width: 50, height: 50 }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Hi Reader,
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here's your News!
          </Typography>
        </Box>
      </Box>

      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
        Thank you so much for taking the time!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Please provie the below details!
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Full Name
            </Typography>
            <TextField
              fullWidth
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              error={!!errors.fullName}
              helperText={errors.fullName}
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Address
            </Typography>
            <TextField
              fullWidth
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full Postal Address"
              multiline
              rows={3}
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Country
            </Typography>
            <TextField
              fullWidth
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter Your Country Name"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              State
            </Typography>
            <TextField
              fullWidth
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter Your State Name"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Email Id
            </Typography>
            <TextField
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Mail id"
              error={!!errors.email}
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.email ? "#f44336" : "#e0e0e0",
                  },
                },
              }}
            />
            {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Mobile Number
            </Typography>
            <TextField
              fullWidth
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Your Mobile Number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box
                      component="img"
                      src="/placeholder.svg?height=24&width=36"
                      alt="Flag"
                      sx={{ height: 24, width: 36, mr: 1 }}
                    />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Address
            </Typography>
            <TextField
              fullWidth
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Write Your Feedback"
              multiline
              rows={4}
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "1rem",
                bgcolor: "#4caf50",
                "&:hover": {
                  bgcolor: "#3d9140",
                },
              }}
            >
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default FeedbackForm

