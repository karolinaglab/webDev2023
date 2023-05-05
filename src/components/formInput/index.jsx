import './index.css'

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
