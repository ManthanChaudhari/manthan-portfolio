import React from "react";

function Button({ text = "", className = "" , link = "#" , downloadFile = false}) {
  return (
    <div>
      <button className={` px-3 py-2  ${className}`}>
        <a href={link}>{text}</a>
      </button>
    </div>
  );
}

export default Button;
