import { useState } from "react";

const SmartText = ({ text, length = 100 }) => {
  const [showLess, setShowLess] = useState(true);
  if (text.length < length) return <p>{text}</p>;
  return showLess ? (
    <p>
      {text.slice(0, 100)}...
      <span>
        <a
          onClick={() => {
            setShowLess(false);
          }}
        >
          Read More
        </a>
      </span>
    </p>
  ) : (
    <p>
      {text}
      <span>
        <a
          onClick={() => {
            setShowLess(true);
          }}
        >
          Read Less
        </a>
      </span>
    </p>
  );
};

export default SmartText;
