import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h3>Home page</h3>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>Read more...</Link>
          </div>
        ))}
    </div>
  );
}
