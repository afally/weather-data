import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleType } from "../types";

function useArticle() {
  const [data, setData] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/?apiKey=5aa965eb8e501bff4bde01b13de411e5`
        );
        setData(response.data.data);
        //console.log(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Something went wrong while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
export default useArticle;
