import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked } = evt.target;
    const valueToUSe = type === "checkbox" ? checked : value;
    change(name, valueToUSe);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Build Your Own Pizza</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
          <div>{errors.toppings}</div>
          <div>{errors.glutenFree}</div>
        </div>
      </div>

      <div className="form-group inputs">


        {/* ////////// DropDown Input ////////// */}
        <label>
          Choice Of Size
          <select onChange={onChange} value={values.size} name="size">
            <option value="">- Select an option -</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>
          Original Red
          <input
            type="radio"
            name="civil"
            value="originalRed"
            onChange={onChange}
            checked={values.civil === "originalRed"}
          />
        </label>

        <label>
          Garlic Ranch
          <input
            type="radio"
            name="civil"
            value="garlicRanch"
            onChange={onChange}
            checked={values.civil === "GarlicRanch"}
          />
        </label>
        <label>
          BBQ Sauce
          <input
            type="radio"
            name="civil"
            value="bbqSauce"
            onChange={onChange}
            checked={values.civil === "bbqSauce"}
          />
        </label>
        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="civil"
            value="spinachAlfredo"
            onChange={onChange}
            checked={values.civil === "spinachAlredo"}
          />
        </label>
      </div>
    </form>
  );
}
