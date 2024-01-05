import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          {articles.map((article) => {
            return (
              <article key={article.id}>
                <Link to={`/blog/${article.id}`}>{article.title}</Link>
                <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
              </article>
            );
          })}
        </>
      )}
    </section>
  );
}
