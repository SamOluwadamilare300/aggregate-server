# News Aggregation Backend

This is a Node.js-based news aggregation backend that fetches and serves news articles from various sources using the [NewsAPI](https://newsapi.org/). The backend is deployed on [Render](https://render.com/) for seamless cloud hosting.

## Features
- Fetches real-time news articles from multiple sources.
- Uses **NewsAPI** to retrieve headlines, category-based news, and source-specific articles.
- Built with **Node.js** and JavaScript.
- Provides a RESTful API to serve news data to frontend applications.

## Deployment
The backend is currently deployed on **Render**, which ensures high availability and automatic scaling.

## Technologies Used
- **Node.js** – Server-side JavaScript runtime.
- **Express.js** – Lightweight web framework for handling API requests.
- **NewsAPI** – Third-party news aggregation service.
- **Axios** – HTTP client for fetching news data.
- **Render** – Cloud platform for hosting and deployment.

## Installation & Setup
To run this backend locally, follow these steps:

### Prerequisites
- Node.js installed (v14+ recommended)
- A valid **NewsAPI** key (sign up at [NewsAPI](https://newsapi.org/register))

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/SamOluwadamilare300/aggregate-server.git
   cd news-aggregation-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your **NewsAPI** key:
   ```plaintext
   NEWS_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. The API will run on `http://localhost:3000`

## API Endpoints
| Method | Endpoint         | Description |
|--------|----------------|-------------|
| GET    | `/all-news`        | Fetches general news articles |
| GET    | `/top-headlines` | Fetches news by top headlines |
| GET    | `/country/:iso`  | Fetches news from a specific country|

## Theoretical Guide to Developing a News Aggregator with NewsAPI
If you want to develop a similar project using **NewsAPI**, follow these steps:

1. **Sign up for NewsAPI**: Obtain an API key by registering on [NewsAPI.org](https://newsapi.org/).
2. **Set up a Node.js server**: Use Express.js to create a RESTful API.
3. **Fetch news articles**: Use Axios to request data from NewsAPI.
4. **Process and filter data**: Format and structure news articles before sending them to the frontend.
5. **Deploy the backend**: Use cloud platforms like **Render** or **Vercel** to host the server.

## Contribution
Feel free to fork the project, submit issues, or create pull requests.

