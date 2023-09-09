import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

// EmailJS
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [t, i18n] = useTranslation("global");

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [reason, setReason] = useState(
    t("contact.inputs.reason.reasons.0.value")
  );
  const [message, setMessage] = useState("");

  function send(event) {
    event.preventDefault();

    // Error handling
    if (!name) {
      setError(t("contact.inputs.name.error"));
    } else if (!email) {
      setError(t("contact.inputs.email.error"));
    } else if (!message) {
      setError(t("contact.inputs.message.error"));
    } else {
      emailjs
        .sendForm(
          "service_5wfmyl9",
          "template_2fh850m",
          form.current,
          "B7hcLfaU_FcnlgJPM"
        )
        .then(() => {
          form.current.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  }
  return (
    <div className="flex items-center justify-center w-full p-10">
      <div className="flex flex-col w-full max-w-[800px]">
        <h2 className="font-accent text-3xl sm:text-5xl">
          {t("contact.title")}
        </h2>
        <form ref={form} className="mt-2" onSubmit={(e) => send(e)}>
          <div className="flex flex-col gap-2 md:gap-4 md:grid md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="from_name">{t("contact.inputs.name.name")}</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                name="from_name"
                placeholder={t("contact.inputs.name.placeholder")}
                className="contact-input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">{t("contact.inputs.email.name")}</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder={t("contact.inputs.email.placeholder")}
                className="contact-input"
              />
            </div>
            <div className="flex-col hidden md:flex">
              <label htmlFor="number">{t("contact.inputs.number.name")}</label>
              <input
                type="text"
                onChange={(e) => setNumber(e.target.value)}
                name="number"
                placeholder={t("contact.inputs.number.placeholder")}
                className="contact-input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="reason">{t("contact.inputs.reason.name")}</label>
              <select
                onChange={(e) => setReason(e.target.value)}
                name="reason"
                className="contact-input px-4"
              >
                {t("contact.inputs.reason.reasons", {
                  returnObjects: true,
                }).map((reason, index) => (
                  <option
                    className="text-black"
                    key={index}
                    value={reason.value}
                  >
                    {reason.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="message">
                {t("contact.inputs.message.name")}
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                rows="10"
                className="contact-input"
                placeholder={t("contact.inputs.message.placeholder")}
              ></textarea>
            </div>
            {error ? <p className="text-red-500 text-xs">{error}</p> : null}
            <button
              type="submit"
              className="bg-white text-black font-accent py-1 text-lg"
            >
              {t("contact.submitBtn")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
