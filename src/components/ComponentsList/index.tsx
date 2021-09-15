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
          history.push("/Drawer");
          if (closeDrawer) closeDrawer();
        }}
      >
        Drawer
      </ListItem>
      <ListItem>List</ListItem>
      <ListItem>Loading</ListItem>
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
