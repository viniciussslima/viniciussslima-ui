const minifyExample = `<List>
  <ListItem onClick={() => console.log("item 1")}>Item 1</ListItem>
  <List collapsible title="Item 2">
    <ListItem onClick={() => console.log("item 2.1")}>
      Item 2.1
    </ListItem>
  </List>
  <List title="Item 3">
    <ListItem onClick={() => console.log("item 3.1")}>
      Item 3.1
    </ListItem>
  </List>
  <List collapsible initOpen title="Item 4">
    <ListItem onClick={() => console.log("item 4.1")}>
      Item 4.1
    </ListItem>
    <List title="Item 4.2">
      <ListItem onClick={() => console.log("item 4.2.1")}>
        Item 4.2.1
      </ListItem>
    </List>
  </List>
</List>`;

const example = `import React from "react";
import { List, ListItem } from "viniciussslima"

const ListExample = () => {
    return (
        <List>
          <ListItem onClick={() => console.log("item 1")}>Item 1</ListItem>
          <List collapsible title="Item 2">
            <ListItem onClick={() => console.log("item 2.1")}>
              Item 2.1
            </ListItem>
          </List>
          <List title="Item 3">
            <ListItem onClick={() => console.log("item 3.1")}>
              Item 3.1
            </ListItem>
          </List>
          <List collapsible initOpen title="Item 4">
            <ListItem onClick={() => console.log("item 4.1")}>
              Item 4.1
            </ListItem>
            <List title="Item 4.2">
              <ListItem onClick={() => console.log("item 4.2.1")}>
                Item 4.2.1
              </ListItem>
            </List>
          </List>
        </List>
    )
}`;

export { minifyExample, example };
