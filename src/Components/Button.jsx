import React from 'react';

/**
 * A reusable button component with support for icons and custom styling.
 *
 * @param {object} props - The component props.
 * @param {React.Node} props.children - The text or content to display inside the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to customize the button's appearance.
 * @param {React.ReactElement} [props.icon=null] - An optional icon element (e.g., an <img> or <svg>) to display.
 * @param {'left' | 'right'} [props.iconPosition='left'] - The position of the icon relative to the text.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The button's type attribute.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 */
const Button = ({
  children,
  onClick,
  className = '',
  icon = null,
  iconPosition = 'left',
  type = 'button',
  disabled = false,
  ...props // Pass any other native button attributes
}) => {
  // Base classes for all buttons
  const baseClasses =
    'inline-flex items-center justify-center font-semibold cursor-pointer rounded-full px-6 py-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Classes for disabled state
  const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses} ${className}`}
      {...props}
    >
      {/* Render icon on the left if specified */}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}

      {/* Button Text/Content */}
      {children}

      {/* Render icon on the right if specified */}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
