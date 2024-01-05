import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    async function getArticleDetails() {
      const request = await fetch(`https://api.spaceflightnewsapi/v3/blogs/${params.id}`);
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticleDetails();
  }, [params]);

  return (
    <section>
      <h1>Blog Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <article>
            <h3>{articles.title}</h3>
          </article>
        </>
      )}
    </section>
  );
}
