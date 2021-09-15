import React, { FC, useState } from "react";

import { Drawer } from "viniciussslima";

import JsxExample from "components/JsxExample";
import { minifyExample, example } from "./example";
import Table from "components/Table";
import props from "./props";

const DrawerComponent: FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <h1>Drawer</h1>
      <div>
        <button onClick={() => setOpenDrawer(true)}>Open drawer</button>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </Drawer>
      </div>
      <JsxExample jsx={example} reducedJsx={minifyExample} />
      <h3>Props</h3>
      <Table data={props} />
    </>
  );
};

export default DrawerComponent;
