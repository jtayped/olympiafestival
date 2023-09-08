import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("global");
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="flex items-center justify-center w-full p-10">
      <div className="flex flex-col w-full max-w-[900px]">
        <h2 className="font-accent text-3xl sm:text-5xl">
          {t("contact.title")}
        </h2>
        <form className="mt-2" action={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-2 md:gap-4 md:grid md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor={t("contact.inputs.name.name")}>
                {t("contact.inputs.name.name")}
              </label>
              <input
                type="text"
                name={t("contact.inputs.name.name")}
                placeholder={t("contact.inputs.name.placeholder")}
                className="contact-input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor={t("contact.inputs.email.name")}>
                {t("contact.inputs.email.name")}
              </label>
              <input
                type="text"
                name={t("contact.inputs.email.name")}
                placeholder={t("contact.inputs.email.placeholder")}
                className="contact-input"
              />
            </div>
            <div className="flex-col hidden md:flex">
              <label htmlFor={t("contact.inputs.number.name")}>
                {t("contact.inputs.number.name")}
              </label>
              <input
                type="text"
                name={t("contact.inputs.number.name")}
                placeholder={t("contact.inputs.number.placeholder")}
                className="contact-input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor={t("contact.inputs.reason.name")}>
                {t("contact.inputs.reason.name")}
              </label>
              <select
                name={t("contact.inputs.reason.name")}
                className="contact-input"
              >
                {t("contact.inputs.reason.reasons", {
                  returnObjects: true,
                }).map((reason, index) => (
                  <option key={index} value="reason">
                    {reason}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor={t("contact.inputs.message.name")}>
                {t("contact.inputs.message.name")}
              </label>
              <textarea
                name={t("contact.inputs.message.name")}
                cols="30"
                rows="10"
                className="contact-input"
                placeholder={t("contact.inputs.message.placeholder")}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
