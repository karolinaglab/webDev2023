import React from "react";
import "./index.css";

/**
A customizable button component with support for text, click events, links, and styling variations.
* @param {ReactNode} children - The content of the button.
* @param {function} onClick - The click event handler for the button.
* @param {string} href - The href for the button if it should behave as a link.
* @param {string} className - The CSS class name to be added to the button element.
* @param {string} type - The type of the button (e.g. "button", "submit", "reset").
* @param {string} variant - The styling variant for the button: "filled", "text".
* @param {string} color - The color for the button: "primary", "secondary").
* @param {boolean} disabled - Whether the button should be disabled.
* @returns {JSX.Element} - The rendered Button component.
*/
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
  const buttonClasses = [variant, `${variant}-${color}`, className].join(" ");

  if (disabled) {
    buttonClasses.push(styles.disabled);
  }

  if (href) {
    return (
      <a className={buttonClasses} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
