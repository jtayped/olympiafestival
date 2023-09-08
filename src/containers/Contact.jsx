import React from "react";

const Contact = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="flex items-center justify-center w-full">
      <form action={(e) => handleSubmit(e)}></form>
    </div>
  );
};

export default Contact;
