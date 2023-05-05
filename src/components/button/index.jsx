import React from "react";
import "./index.css";

const Button = ({
  children,
  onClick,
  href,
  className,
  type = "button",
  variant = "filled",
  color = "primary",
  disabled = false,
}) => {
  const buttonClasses = [variant, `${variant}-${color}`, className];

  if (disabled) {
    buttonClasses.push(styles.disabled);
  }

  if (href) {
    return (
      <a className={buttonClasses.join(" ")} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses.join(" ")}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
