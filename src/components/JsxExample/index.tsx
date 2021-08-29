import React, { FC, useState } from "react";
import "./styles.css";

import { Tooltip } from "viniciussslima";
import { BsCode } from "react-icons/bs";

import CodeBlock from "components/CodeBlock";

interface JsxExampleProps {
  jsx: string;
  minifyJsx: string;
}

const JsxExample: FC<JsxExampleProps> = ({ jsx, minifyJsx }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <>
      <div className="jsx-example-title">
        <h3>Code example</h3>
        <Tooltip
          message={
            showCode ? "Mostrar código reduzido" : "Mostrar código completo"
          }
        >
          <BsCode
            className="show-button"
            onClick={() => setShowCode(!showCode)}
          />
        </Tooltip>
      </div>
      {showCode ? (
        <CodeBlock text={jsx} type="jsx" />
      ) : (
        <CodeBlock text={minifyJsx} type="jsx" />
      )}
    </>
  );
};

export default JsxExample;
