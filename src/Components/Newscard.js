import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Newscard.css';

const Newscard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=in&apiKey=a8a0cc8986ad41cfa39b50e59bb0a453',
          {
            headers: {
              'User-Agent': 'MyNewsApp/1.0' // Replace with your application name and version
            }
          }
        );
        setArticles(response.data.articles.slice(0, 6));
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  if (articles.length === 0) {
    setArticles([
          {
            title: "Newly discovered link between Parkinson's and IBD could lead to future treatment",
            description: "Written by Tim Newman",
            url: "https://www.medicalnewstoday.com/articles/ibd-parkinsons-disease-study-discovers-genetic-link",
            urlToImage: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/05/Multi-generation-woman-1296x728-header-1024x575.jpg"
          },
          {
            title: "Can hormone Replacement Therapy help treat Pulmonary Hypertension",
            description: "Written by Corrie Pelc",
            url: "https://www.medicalnewstoday.com/articles/hormone-replacement-therapy-may-improve-pulmonary-hypertension",
            urlToImage: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/05/contented-woman-water-1296x728-header-1024x575.jpg"
          },
          {
            title: "Puerto Rico declares Public Health Emergency as Dengue Case Rises",
            description: "Written by Jim Wyss",
            url: "https://time.com/6960544/puerto-rico-public-health-emergency-dengue/",
            urlToImage: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Dengue_5fcf4229dd.jpg"
          },
          {
            title: "How Olivia Munn's Doctor Helped Calculate Her Breast Cancer Risk, Leading to Early Diagnosis",
            description: "Written by Cathy Cassata",
            url: "https://www.healthline.com/health-news/olivia-munn-calculate-breast-cancer-risk#What-to-consider-before-getting-tested",
            urlToImage: "https://t4.ftcdn.net/jpg/03/20/74/45/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg"
          },
          {
            title: "Eating a dozen Eggs a Week doesn't hurt your Cholesterol",
            description: "Written by Dr. Jennifer Miao",
            url: "https://www.goodmorningamerica.com/food/story/eating-dozen-eggs-week-hurt-cholesterol-study-108553012",
            urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxRYAg7BVp5C6XROtZPIyxnfifUwy_E6tXR8Msd0hYA&s"
          },
          {
            title: "Western diet could Impact Gut Inflammation, leading to chronic conditions",
            description: "Written by Hannah Flynn",
            url: "https://www.medicalnewstoday.com/articles/western-diets-could-impact-inflammation-in-the-gut-leading-to-chronic-conditions",
            urlToImage: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/05/man-eat-cheeseburger-1296x728-header-1024x575.jpg"
          }
        
        ])
  }

  return (
    <>
      <div className="news-container">
      {articles.map((article, index) => (
        <div className={`story${index + 1}`} key={index}>
          <div className="News1Pic">
            <img src={article.urlToImage} alt={article.title} />
            <div className="News1">
              <a href={article.url}>
                {article.title}<br />
                <p>{article.description}</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Newscard;
