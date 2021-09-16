import React, { FC } from "react";

import { List, ListItem } from "viniciussslima";

import JsxExample from "components/JsxExample";
import { minifyExample, example } from "./example";
import Table from "components/Table";
import { listProps, listItemProps } from "./props";

const ListComponent: FC = () => {
  return (
    <>
      <h1>List</h1>
      <List>
        <ListItem onClick={() => console.log("item 1")}>Item 1</ListItem>
        <List collapsible title="Item 2">
          <ListItem onClick={() => console.log("item 2.1")}>Item 2.1</ListItem>
        </List>
        <List title="Item 3">
          <ListItem onClick={() => console.log("item 3.1")}>Item 3.1</ListItem>
        </List>
        <List collapsible initOpen title="Item 4">
          <ListItem onClick={() => console.log("item 4.1")}>Item 4.1</ListItem>
          <List title="Item 4.2">
            <ListItem onClick={() => console.log("item 4.2.1")}>
              Item 4.2.1
            </ListItem>
          </List>
        </List>
      </List>
      <JsxExample jsx={example} reducedJsx={minifyExample} />
      <h3>List Props</h3>
      <Table data={listProps} />
      <h3>ListItem Props</h3>
      <Table data={listItemProps} />
    </>
  );
};

export default ListComponent;
