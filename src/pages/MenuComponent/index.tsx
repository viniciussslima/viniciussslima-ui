import React, { FC, useRef, useState } from "react";

import { Menu, MenuItem, Toast } from "viniciussslima";

import JsxExample from "components/JsxExample";
import { minifyExample, example } from "./example";
import Table from "components/Table";
import { MenuProps, MenuItemProps } from "./props";

const MenuComponent: FC = () => {
  const menuButton = useRef<HTMLButtonElement>(null);

  const [showMenu, setShowMenu] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");

  return (
    <>
      <h1>Menu</h1>
      <div>
        <button ref={menuButton} onClick={() => setShowMenu(true)}>
          Show menu
        </button>
        <Menu
          show={showMenu}
          onHide={() => setShowMenu(false)}
          anchor={menuButton.current}
        >
          <MenuItem
            onClick={() => {
              setToastText("Item 1 selected");
              setShowToast(true);
            }}
          >
            Item 1
          </MenuItem>
          <MenuItem
            onClick={() => {
              setToastText("Item 2 selected");
              setShowToast(true);
            }}
          >
            Item 2
          </MenuItem>
          <MenuItem
            onClick={() => {
              setToastText("Item 3 selected");
              setShowToast(true);
            }}
          >
            Item 3
          </MenuItem>
        </Menu>
        <Toast
          show={showToast}
          onHide={() => setShowToast(false)}
          text={toastText}
          type="info"
        />
      </div>
      <JsxExample jsx={example} reducedJsx={minifyExample} />
      <h3>Menu Props</h3>
      <Table data={MenuProps} />
      <h3>MenuItem Props</h3>
      <Table data={MenuItemProps} />
    </>
  );
};

export default MenuComponent;
