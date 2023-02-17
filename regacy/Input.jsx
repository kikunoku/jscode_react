import React from "react";

export default Input;

const Input = ({ title, type, id, placeholder, required }) => {
  return (
    <div className="inputBox">
      <div className="inputName">
        {title}
        {required} && <span className="required">*</span>
      </div>
      <div className="inputFiedl">
        <input
          className="input"
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};
