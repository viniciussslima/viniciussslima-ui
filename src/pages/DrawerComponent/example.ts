const minifyExample = `<div>
    <button onClick={() => setOpenDrawer(true)}>Open drawer</button>
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </Drawer>
</div>`;

const example = `import React, { useState } from "react";
import { Drawer } from "viniciussslima"

const DrawerExample = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div>
            <button onClick={() => setOpenDrawer(true)}>Open drawer</button>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </Drawer>
        </div>
    )
}
`;

export { minifyExample, example };
