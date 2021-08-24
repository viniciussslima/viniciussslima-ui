import React, { FC, useState } from "react";
import "./styles.css";

import { FaClipboardList, FaClipboardCheck } from "react-icons/fa";
import { useEffect } from "react";

interface CodeBlockProps {
  text: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [isCopied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
    });
  };

  return (
    <div className="code-block">
      <pre>{text}</pre>
      {!isCopied ? (
        <FaClipboardList className="clipboard" onClick={copyToClipboard} />
      ) : (
        <FaClipboardCheck className="clipboard-check" />
      )}
    </div>
  );
};

export default CodeBlock;
