import React from "react";

const Contact = () => {
  return (
    <div className=" flex item-center justify-center md:-mt-[80px] md:mb-[100px] ">
      <div className="bg-white rounded-xl items-center shadow-lg md:w-3/4 gap-2 z-10 xsm:w-full p-[5%] flex flex-col ">
        <div className="flex flex-col text-center text-gray-300 items-center justify-center">
          <h2 className="text-2xl font-bold text-black  ">Contact Us</h2>
          <p className="font-medium text-gray-500 my-[20px] max-w-md">
            Reach out to us for any questions, comments or feedback.
          </p>
        </div>
        <form className="flex gap-2 w-100 xsm:flex-col">
          <div className="form__group   field">
            <input
              type="text"
              className="form__field"
              placeholder="Name"
              required
            />
            <label className="form__label">Name</label>
          </div>
          <div className="form__group   field">
            <input
              type="text"
              className="form__field"
              placeholder="Name"
              required
            />
            <label className="form__label">Email Address</label>
          </div>
        </form>
        <div className="form__group   field">
          <textarea
            type="text"
            className="form__field form-control"
            placeholder="Name"
            required
          />
          <label className="form__label">Subject</label>
        </div>
        <div className="form__group  field">
          <textarea
            type="text"
            className="form__field"
            placeholder="Name"
            required
          />
          <label className="form__label">Message</label>
        </div>
        <button className="btn btn-outline-primary ">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
