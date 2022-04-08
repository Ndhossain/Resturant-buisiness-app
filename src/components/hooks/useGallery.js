import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useGallery() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [galleryResult, setGalleryResult] = useState([]);

  useEffect(() => {
    async function fetch() {
      const db = getDatabase();
      const galleryRef = ref(db, `gallery`);
      const galleryQuery = query(galleryRef, orderByKey());

      try {
        setLoading(true);
        setError(false);

        const snapShot = await get(galleryQuery);
        setLoading(false);

        if (snapShot.exists()) {
          setGalleryResult([...Object.values(snapShot.val())]);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetch();
  }, []);

  return {
    loading,
    error,
    galleryResult,
  };
}
