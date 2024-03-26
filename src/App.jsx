import { useState, useEffect } from 'react';
import Article from './components/Article.jsx';
import Pagination from './components/Pagination.jsx';
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const base_url = 'https://dev-storm-rest-api.pantheonsite.io';

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${base_url}/api/v1/news`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data); // Assuming the API returns an array of articles
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {currentArticles.map(article => (
        <Article
          key={article.id}
          title={article.title}
          image={`${base_url}/${article.image}`}
          date={article.date}
          category={article.source}
          author={article.author}
          summary={article.body}
        />
      ))}

      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  )
}

export default App
