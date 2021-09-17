import React, { FC } from "react";

import { useHistory } from "react-router-dom";
import { List, ListItem } from "viniciussslima";

interface ComponentsListProps {
  closeDrawer?: () => void;
}

const ComponentsList: FC<ComponentsListProps> = ({ closeDrawer }) => {
  const history = useHistory();

  return (
    <List title={closeDrawer && "Components"} collapsible={!!closeDrawer}>
      <ListItem
        onClick={() => {
          history.push("/carrossel");
          if (closeDrawer) closeDrawer();
        }}
      >
        Carrossel
      </ListItem>
      <ListItem
        onClick={() => {
          history.push("/drawer");
          if (closeDrawer) closeDrawer();
        }}
      >
        Drawer
      </ListItem>
      <ListItem
        onClick={() => {
          history.push("/list");
          if (closeDrawer) closeDrawer();
        }}
      >
        List
      </ListItem>
      <ListItem
        onClick={() => {
          history.push("/loading");
          if (closeDrawer) closeDrawer();
        }}
      >
        Loading
      </ListItem>
      <ListItem>Menu</ListItem>
      <ListItem>Modal</ListItem>
      <ListItem>Navbar</ListItem>
      <ListItem>Paginator</ListItem>
      <ListItem>Switch</ListItem>
      <ListItem>Toast</ListItem>
      <ListItem>Tooltip</ListItem>
    </List>
  );
};

export default ComponentsList;
