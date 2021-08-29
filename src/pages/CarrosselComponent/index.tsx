import React, { FC } from "react";

import { Carrossel, CarrosselItem } from "viniciussslima";

import JsxExample from "components/JsxExample";
import { minifyExample, example } from "./example";

const CarrosselComponent: FC = () => {
  return (
    <>
      <h1>Carrossel</h1>
      <Carrossel itemWidth={500} height={100} space={10} qty={2} timeout={3000}>
        <CarrosselItem
          style={{
            backgroundColor: "aqua",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1
        </CarrosselItem>
        <CarrosselItem
          style={{
            backgroundColor: "aqua",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2
        </CarrosselItem>
        <CarrosselItem
          style={{
            backgroundColor: "aqua",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3
        </CarrosselItem>
      </Carrossel>
      <JsxExample jsx={example} minifyJsx={minifyExample} />
    </>
  );
};

export default CarrosselComponent;
