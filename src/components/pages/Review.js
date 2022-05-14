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

export default function Review() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reviewNo, setReviewNo] = useState();

  useEffect(() => {
    async function review() {
      const db = getDatabase();
      const galleryRef = ref(db, `information/review/`);
      const galleryQuery = query(galleryRef, orderByKey());
      const snapShot = await get(galleryQuery);
      setReviewNo(snapShot.val().length);
    }

    review();
  }, []);

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
    <div>
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
  );
}
