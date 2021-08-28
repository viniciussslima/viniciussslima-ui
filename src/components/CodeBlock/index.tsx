import React, { FC, useState, useEffect } from "react";
import "./styles.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaClipboardList, FaClipboardCheck } from "react-icons/fa";

interface CodeBlockProps {
  text: string;
  type: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ text, type }) => {
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
      <SyntaxHighlighter
        language={type}
        style={a11yDark}
        customStyle={{
          background: "none",
          margin: "0px 50px 0px 0px",
          padding: 0,
        }}
      >
        {text}
      </SyntaxHighlighter>
      {!isCopied ? (
        <FaClipboardList className="clipboard" onClick={copyToClipboard} />
      ) : (
        <FaClipboardCheck className="clipboard-check" />
      )}
    </div>
  );
};

export default CodeBlock;
