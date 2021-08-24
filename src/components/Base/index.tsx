import React, { ReactNode, FC, useState } from "react";
import "./styles.css";

import { Navbar, Drawer, List, ListItem } from "viniciussslima";
import { MdMenu } from "react-icons/md";
import { useCallback } from "react";

interface BaseProps {
  children: ReactNode;
}

const Base: FC<BaseProps> = ({ children }) => {
  const [isDrawerOpen, setIsDraweOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setIsDraweOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDraweOpen(false);
  }, []);

  return (
    <div>
      <Navbar>
        <MdMenu className="menu-button" onClick={openDrawer} />
      </Navbar>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <List>
          <ListItem onClick={closeDrawer}>How install</ListItem>
        </List>
      </Drawer>
      {children}
    </div>
  );
};

export default Base;
