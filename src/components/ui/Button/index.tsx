type proptypes = {
  type: "submit" | "button" | "reset";
  className?: string;
  onClick?: any;
  children?: React.ReactNode;
};

const Button = (props: proptypes) => {
  const {
    type,
    className = "w-full bg-blue-700 hover:bg-blue-800 rounded",
    onClick,
    children,
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} py-2 px-3 font-semibold whitespace-nowrap`}
    >
      {children}
    </button>
  );
};

export default Button;
