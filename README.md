### Tesla News App

A modern React application that displays the latest news about Tesla using the News API. The app features a responsive design with grid and list views, detailed article popups, and a feedback form.





## Features

- **Dual View Layout**: Toggle between grid and list views for news articles
- **Interactive News Cards**: Modern, sleek design with hover effects
- **Article Details**: Click on any article to view full details in a popup
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Feedback Form**: Integrated form for user feedback
- **Real-time Data**: Fetches the latest Tesla news from News API


## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for JavaScript
- **Material UI**: React component library for faster and easier web development
- **React Router**: Navigation and routing for React applications
- **News API**: API for fetching news articles


## Installation

1. Clone the repository:

```shellscript
git clone https://github.com/yourusername/tesla-news-app.git
cd tesla-news-app
```


2. Install dependencies:

```shellscript
npm install
```


3. Create a `.env` file in the root directory and add your News API key:

```plaintext
REACT_APP_NEWS_API_KEY=your_news_api_key_here
```


4. Start the development server:

```shellscript
npm start
```


5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## Environment Variables

The application uses the following environment variables:

| Variable | Description
|-----|-----
| `REACT_APP_NEWS_API_KEY` | Your News API key for fetching news articles


## Usage

### Home Page

The home page displays Tesla news articles in either grid or list view. You can:

- Toggle between grid and list views using the sidebar buttons
- Click on any article to view its details
- Remove articles by clicking the X button
- Navigate between pages using the pagination at the bottom


### Article Details

Click on any article to open a detailed view that includes:

- Full article title and image
- Publication date and source
- Author information (when available)
- Article content
- Link to the original article


### Feedback Form

Access the feedback form by clicking the "We're Listening!" button in the sidebar. The form includes fields for:

- Full Name
- Address
- Country and State
- Email and Mobile Number
- Feedback text


## Deployment

### Deploying to Netlify

1. Create a production build:

```shellscript
npm run build
```


2. Deploy to Netlify using one of these methods:

**Option 1: Netlify CLI**

```shellscript
npm install -g netlify-cli
netlify deploy
```

**Option 2: Netlify UI**

1. Drag and drop the `build` folder to Netlify's site deploy section
2. Or connect your GitHub repository for continuous deployment



3. Add your News API key as an environment variable in Netlify:

1. Name: `REACT_APP_NEWS_API_KEY`
2. Value: Your News API key





### Important Note for Deployment

The News API's free tier only allows requests from localhost. For production deployment, you'll need to:

1. Upgrade to a paid News API plan, or
2. Set up a proxy server to make the API requests


## Project Structure

```plaintext
tesla-news-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── FeedbackForm.tsx
│   │   ├── NewsCard.tsx
│   │   ├── NewsDetailDialog.tsx
│   │   ├── NewsFeed.tsx
│   │   └── Sidebar.tsx
│   ├── services/
│   │   └── newsApi.ts
│   ├── types.ts
│   ├── utils/
│   │   └── dateUtils.ts
│   ├── App.tsx
│   └── index.tsx
├── .env
├── .env.example
├── .gitignore
├── netlify.toml
├── package.json
└── README.md
```

## API Information

This project uses the [News API](https://newsapi.org/) to fetch Tesla-related news articles. The specific endpoint used is:

```plaintext
https://newsapi.org/v2/everything?q=tesla&from=YYYY-MM-DD&sortBy=publishedAt&apiKey=YOUR_API_KEY
```

Where:

- `q=tesla`: Searches for articles about Tesla
- `from=YYYY-MM-DD`: Fetches articles from the specified date (automatically set to one month ago)
- `sortBy=publishedAt`: Sorts articles by publication date (newest first)
