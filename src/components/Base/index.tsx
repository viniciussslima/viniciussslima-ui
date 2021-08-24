import React, { ReactNode, FC, useState, useCallback } from "react";
import "./styles.css";

import { Navbar, Drawer, List, ListItem } from "viniciussslima";
import { MdMenu } from "react-icons/md";
import { useHistory } from "react-router-dom";

interface BaseProps {
  children: ReactNode;
}

const Base: FC<BaseProps> = ({ children }) => {
  const [isDrawerOpen, setIsDraweOpen] = useState(false);

  const history = useHistory();

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
          <ListItem onClick={() => history.push("/")}>How to install</ListItem>
        </List>
      </Drawer>
      <div className="content">{children}</div>
    </div>
  );
};

export default Base;
