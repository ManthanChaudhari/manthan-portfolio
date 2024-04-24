import React from "react";

function Button({ text = "", className = "" , link = "#" }) {
  return (
    <div>
      <button className={`text-white  px-3 py-2  ${className}`}>
        <a href={link}>{text}</a>
      </button>
    </div>
  );
}

export default Button;