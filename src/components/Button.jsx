import { twMerge } from "tailwind-merge";

const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
  className = "",
}) => {
  return (
    <div
      id={id}
      className={twMerge(
        `group relative z-10 w-fit cursor-pointer overflow-hidden animate-button px-7 py-2 text-black rounded-full ${containerClass}`,
        className
      )}
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
