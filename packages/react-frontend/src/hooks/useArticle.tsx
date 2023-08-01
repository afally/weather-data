import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleType } from "../types";
import config from "../config/config.dev";

function useArticle() {
  const [data, setData] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // In future read environment variables using .env

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = config.VALID_API_KEY;
        const response = await axios.get(
          `http://localhost:3001/?apiKey=${apiKey}`
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
