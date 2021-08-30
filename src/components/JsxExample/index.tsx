import React, { FC, useState } from "react";
import "./styles.css";

import { Tooltip } from "viniciussslima";
import { BsCode } from "react-icons/bs";

import CodeBlock from "components/CodeBlock";

interface JsxExampleProps {
  jsx: string;
  reducedJsx: string;
}

const JsxExample: FC<JsxExampleProps> = ({ jsx, reducedJsx }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <>
      <div className="jsx-example-title">
        <h3>Code example</h3>
        <Tooltip message={showCode ? "Show reduced code" : "Show full code"}>
          <BsCode
            className="show-button"
            onClick={() => setShowCode(!showCode)}
          />
        </Tooltip>
      </div>
      {showCode ? (
        <CodeBlock text={jsx} type="jsx" />
      ) : (
        <CodeBlock text={reducedJsx} type="jsx" />
      )}
    </>
  );
};

export default JsxExample;
