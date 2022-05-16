import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  set,
} from "firebase/database";
import { useEffect, useState } from "react";
import MessageForm from "../MessageForm";
import ReviewSlider from "../ReviewSlider";

export default function Review() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reviewResult, setReviewResult] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reviewNo, setReviewNo] = useState();

  useEffect(() => {
    async function review() {
      const db = getDatabase();
      const galleryRef = ref(db, `information/review/`);
      const galleryQuery = query(galleryRef, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapShot = await get(galleryQuery);
        setLoading(false);
        if (snapShot.exists()) {
          setReviewNo(snapShot.val().length);
          setReviewResult([...Object.values(snapShot.val())]);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    review();
  }, []);

  console.log(reviewResult);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getDatabase();
    console.log(db);
    const messageRef = ref(db, `information/review/${reviewNo ? reviewNo : 0}`);

    console.log(messageRef);

    await set(messageRef, {
      profession: email,
      name: name,
      review: message,
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div style={{marginBottom: `60px`}}>
      <h1 style={{marginBottom: `30px`, textAlign: `center`}}>Customar Review</h1>
        <ReviewSlider loading={loading} error={error} reviewResult={reviewResult} />
      </div>
      <div>
        <h1 style={{marginBottom: `30px`, textAlign: `center`}}>Give us a Review</h1>
      <div style={{ display: `flex`, justifyContent: `center` }}>
        <MessageForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
          messageHolder={`Give us a Review`}
          detailsHolder={`Proffesion`}
        />
      </div>
      </div>
    </>
  );
}
