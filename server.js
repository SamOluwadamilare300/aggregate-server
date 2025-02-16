require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

function fetchNews(url, res) {
    axios.get(url)
        .then(response => {
            if (response.data.totalResults > 0) {
                res.json({
                    status: 200,
                    success: true,
                    message: "Successfully fetched the data",
                    data: response.data
                });
            } else {
                res.json({
                    status: 200,
                    success: true,
                    message: "No more results to show"
                });
            }
        })
        .catch(error => {
            res.json({
                status: 500,
                success: false,
                message: "Failed to fetch data from the API",
                error: error.message
            });
        });
}

// News Routes
app.get("/all-news", (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    let url =`https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url, res);
});

//Top Headlines
app.get("/top-headlines", (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 80;
    let page = parseInt(req.query.page) || 1;
    let category = req.query.category || "business";

    let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url, res);
});


// Country-specific Headlines
app.get("/country/:iso", (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 80;
    let page = parseInt(req.query.page) || 1;
    const country = req.params.iso;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
    fetchNews(url, res);
});

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

