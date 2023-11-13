import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebase/config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  // const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessageRef = collection(db, "message");
    const clientsMessage = {
      name: name,
      subject: subject,
      email: email,
      message: message,
    };

    try {
      const newDocRef = await addDoc(userMessageRef, clientsMessage);
      console.log(`Document written with ID: ${newDocRef.id}`);
    } catch (err) {
      console.log(`Failed to submit ${err}`);
    }
  };
  return (
    <div className=" flex item-center justify-center md:-mt-[80px] md:mb-[100px] ">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl items-center shadow-lg md:w-3/4 gap-2 z-10 xsm:w-full p-[5%] flex flex-col "
      >
        <div className="flex flex-col text-center text-gray-300 items-center justify-center">
          <h2 className="text-2xl font-bold text-black  ">Contact Us</h2>
          <p className="font-medium text-gray-500 my-[20px] max-w-md">
            Reach out to us for any questions, comments or feedback.
          </p>
        </div>
        <section className="flex gap-2 w-100 xsm:flex-col">
          <div className="form__group   field">
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form__field"
              placeholder="Name"
              required
            />
            <label className="form__label">Name</label>
          </div>
          <div className="form__group   field">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form__field"
              placeholder="Email"
              required
            />
            <label className="form__label">Email Address</label>
          </div>
        </section>
        <div className="form__group   field">
          <textarea
            type="text"
            rows="4"
            cols="50"
            name="message"
            id="message"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="form__field form-control"
            placeholder="Subject"
            required
          />
          <label className="form__label">Subject</label>
        </div>
        <div className="form__group  field">
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form__field"
            placeholder="Name"
            required
          />
          <label className="form__label">Message</label>
        </div>
        <button type="submit" className="btn btn-outline-primary ">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
