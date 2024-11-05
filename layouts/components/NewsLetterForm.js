import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    resetForm();
  };

  return (
    <>
      <form action="#" className="py-6" onSubmit={handleSubmit}>
        <fieldset className="relative">
          <input
            className="w-full h-12 px-5 py-3 pr-12 border-none newsletter-input form-input rounded-3xl bg-theme-light text-dark placeholder:text-xs dark:bg-darkmode-theme-dark"
            type="text"
            placeholder="Type And Hit Enter"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="absolute text-xl transition duration-75 -translate-y-1/2 top-1/2 right-5" />
        </fieldset>
        <button className="w-full mt-4 d-block btn btn-primary" type="submit">
          Sign In
        </button>
      </form>
      {status === "sending" && (
        <div className="mt-4 text-purple-600">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mt-4 text-red-700"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div className="mt-4 text-green-700">Subscribed !</div>
      )}
    </>
  );
}

export default CustomForm;
