import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {article && (
        <div>
          <h3>{article.title}</h3>
          <h4>By {article.author}</h4>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
