const minifyExample = `<div>
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
</div>`;

const example = `import React, { useRef, useState } from "react";
import { Menu, MenuItem } from "viniciussslima"

const MenuExample = () => {
    const menuButton = useRef<HTMLButtonElement>(null);

    const [showMenu, setShowMenu] = useState(false);

    return (
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
                        setShowToast(true);'
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
    )
}
`;

export { minifyExample, example };
