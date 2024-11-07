"use client"


import './next.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../footer/page';
import Image from 'next/image';

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const NextBlog = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'Next.js Blog',
            pageSize: 8,
            apiKey: 'f02ab78ce0284cea93ee8a265203609d',
            language: 'en'
          }
        });

        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
        <h1 className='genai'> <span>Welcome To Next.js Latest News</span></h1>
    <div className="social-div">
      {loading ? (
        <div className="loading">Loading news...</div>
      ) : (
        news.map((article, index) => (
          <div key={index} className="card">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <Image src={article.urlToImage} alt="news" className="card-img" />
              <div className="card-content">
                <h2 className="card-title">{article.title}</h2>
                <p className="card-description">{article.description}</p>
              </div>
            </a>
          </div>
        ))
      )}
    </div>
    <Footer/>
    </div>
  )
}

export default NextBlog
