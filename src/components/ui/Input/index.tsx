type proptypes = {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  onChange?: any;
  disabled?: boolean;
  required?: boolean;
};

const Input = (props: proptypes) => {
  const { type, name, placeholder, className, onChange, disabled, required } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${className} w-full py-2 px-3 border border-gray-300 rounded-md`}
      disabled={disabled}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
