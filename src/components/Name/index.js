import React from "react";
import PropTypes from "prop-types";

const Name = ({ onChange, value }) => {
  return (
    <div className="field">
      <label htmlFor="name">name:</label>
      <input
        id="name"
        type="text"
        onChange={onChange}
        maxLength="25"
        value={value}
        placeholder="Alexa"
        required
      />
    </div>
  );
};

Name.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.object
};
export default Name;
