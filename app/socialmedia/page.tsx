"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './social.css';
import NextBlog from '../nextblog/page';

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const SocialMedia = () => {
  const [generativeNews, setGenerativeNews] = useState<NewsArticle[]>([]);
  const [agenticNews, setAgenticNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGenerativeAIAndNVIDIA = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'Generative AI AND NVIDIA',
            pageSize: 4,
            apiKey: 'f02ab78ce0284cea93ee8a265203609d',
            language: 'en'
          }
        });

        setGenerativeNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching Generative AI & NVIDIA news:', error);
      }
    };

    const fetchAgenticAI = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'Agents AI',
            pageSize: 4,
            apiKey: 'f02ab78ce0284cea93ee8a265203609d',
            language: 'en'
          }
        });

        setAgenticNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Agentic AI news:', error);
        setLoading(false);
      }
    };

    fetchGenerativeAIAndNVIDIA();
    fetchAgenticAI();
  }, []);

  return (
    <div>
      <h1 className="genai"><span>Generative AI And AGENTS Latest News</span></h1>
      <div className="social-div">
        {loading ? (
          <div className="loading">Loading news...</div>
        ) : (
          <>
            {generativeNews.map((article, index) => (
              <div key={index} className="card">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img src={article.urlToImage} alt="news" className="card-img" />
                  <div className="card-content">
                    <h2 className="card-title">{article.title}</h2>
                    <p className="card-description">{article.description}</p>
                  </div>
                </a>
              </div>
            ))}

            {agenticNews.map((article, index) => (
              <div key={index} className="card">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img src={article.urlToImage} alt="news" className="card-img" />
                  <div className="card-content">
                    <h2 className="card-title">{article.title}</h2>
                    <p className="card-description">{article.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </>
        )}
      </div>
      <NextBlog />
    </div>
  );
};

export default SocialMedia;
