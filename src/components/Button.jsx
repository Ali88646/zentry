const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <div
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden animate-button px-7 py-2 text-black rounded-full ${containerClass} `}
    >
      {leftIcon}
      <span className="relative  inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </div>
  );
};

export default Button;
