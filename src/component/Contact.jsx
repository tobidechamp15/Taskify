import React from "react";

const Contact = () => {
  return (
    <div className=" flex item-center justify-center md:-mt-[80px] ">
      <div className="bg-white rounded-xl items-center shadow-lg md:w-3/4 gap-2 xsm:w-full p-[5%] flex flex-col ">
        <div className="flex gap-2 w-100 ">
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
        </div>
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
