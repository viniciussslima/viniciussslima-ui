import React, { FC, useState, useEffect } from "react";

import { Loading } from "viniciussslima";

import JsxExample from "components/JsxExample";
import { minifyExample, example } from "./example";
import Table from "components/Table";
import props from "./props";

const LoadingComponent: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => setIsLoading(false), 3000);
    }

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <>
      <h1>Loading</h1>
      <div>
        <button onClick={() => setIsLoading(true)}>Open loading</button>
        <Loading isLoading={isLoading} />
      </div>
      <JsxExample jsx={example} reducedJsx={minifyExample} />
      <h3>Loading Props</h3>
      <Table data={props} />
    </>
  );
};

export default LoadingComponent;
