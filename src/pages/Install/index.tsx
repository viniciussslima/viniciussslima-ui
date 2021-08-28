import React from "react";

import CodeBlock from "components/CodeBlock";

const Install = () => {
  return (
    <>
      <h1>How to install</h1>
      <p>To install just run the follow command in your project</p>
      <CodeBlock text="yarn add viniciussslima" type="bash" />
      <p>or</p>
      <CodeBlock text="npm i viniciussslima" type="bash" />
    </>
  );
};

export default Install;
