import React from "react";

import { List, ListItem } from "viniciussslima";
import { useHistory } from "react-router";

import CodeBlock from "components/CodeBlock";

const Install = () => {
  const history = useHistory();

  return (
    <>
      <h1>How to install</h1>
      <p>To install just run the follow command in your project</p>
      <CodeBlock text="yarn add viniciussslima" type="bash" />
      <p>or</p>
      <CodeBlock text="npm i viniciussslima" type="bash" />
      <h1>Components</h1>
      <List>
        <ListItem onClick={() => history.push("/carrossel")}>
          Carrossel
        </ListItem>
        <ListItem>CarrosselItem</ListItem>
        <ListItem>Drawer</ListItem>
        <ListItem>List</ListItem>
        <ListItem>ListItem</ListItem>
        <ListItem>Loading</ListItem>
        <ListItem>Menu</ListItem>
        <ListItem>MenuItem</ListItem>
        <ListItem>Modal</ListItem>
        <ListItem>Navbar</ListItem>
        <ListItem>Paginator</ListItem>
        <ListItem>Switch</ListItem>
        <ListItem>Toast</ListItem>
        <ListItem>Tooltip</ListItem>
      </List>
    </>
  );
};

export default Install;
