export const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString)
  
      // Format: "Mon, 21 Dec 2020 14:57 GMT"
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
        hour12: false,
      }
  
      return date.toLocaleString("en-US", options)
    } catch (error) {
      console.error("Error formatting date:", error)
      return dateString // Return original string if parsing fails
    }
  }
  
  