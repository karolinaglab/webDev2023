import './index.css'

/**
A form input component that can be used for various types of inputs such as text, email, and password.
* @param {string} type - The type of input element. Can be "text", "email", or "password".
* @param {string} name - The name attribute of the input element.
* @param {string} value - The value attribute of the input element.
* @param {function} onChange - The function to be called when the value of the input element changes.
* @param {string} placeholder - The placeholder text of the input element.
* @param {boolean} required - If true, the input element will be marked as required.
* @param {boolean} disabled - If true, the input element will be disabled.
* @param {string} error - The error message to display if the input is invalid.
* @returns {JSX.Element} - The rendered FormInput component.
*/
const FormInput = ({ type, name, value, onChange, placeholder, required, disabled, error }) => {
  return (
    <div class="formInputContainer">
    <input
      className={"formInput"}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
    {error && <p className="error">{error}</p>}
    </ div>
  );
};

export default FormInput;
