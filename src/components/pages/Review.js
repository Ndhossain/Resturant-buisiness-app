import { useState } from "react";
import MessageForm from "../MessageForm";
import { getDatabase, ref, set } from "firebase/database";

export default function Review() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getDatabase();
    const messageRef = ref(
      db,
      `information/review/${1}`
    );

    await set(messageRef, {
      email: email,
      name: name,
      message: message,
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
