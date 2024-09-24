
import React from 'react';

interface ButtonProps {
  link?: string; // Use optional chaining to allow for a link prop
  text: React.ReactNode;
  className?: string;
  onClick?: () => void; // Add this line to accept onClick prop
}

const Button: React.FC<ButtonProps> = ({ link, text, className, onClick }) => {
  return (
    <button
      onClick={onClick} // Use onClick here
      className={className}
    >
      {link ? (
        <a href={link} className="block w-full">
          {text}
        </a>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
