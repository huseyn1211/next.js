
const Input = ({ label, className = '', ...props }) => {
  return (
    <div className={`input-wrapper`}>
      {label && <label>{label}</label>}
      <input className={`input-base ${className}`} {...props} />
    </div>
  );
};

export default Input;
