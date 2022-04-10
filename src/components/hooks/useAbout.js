import { get, getDatabase, query, ref, orderByKey } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAbout(whatAbout) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stuffResult, setStuffResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const db = getDatabase();
      const stuffRef = ref(db, `about/${whatAbout}`);
      const stuffQuery = query(stuffRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        const snapShot = await get(stuffQuery);
        setLoading(false);
        if (snapShot.exists())
          setStuffResult([...Object.values(snapShot.val())]);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, [whatAbout]);

  return {
    loading,
    error,
    stuffResult,
  };
}
