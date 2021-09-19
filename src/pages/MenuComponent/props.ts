const MenuProps: Array<props> = [
  {
    name: "show",
    type: "boolean",
    description: "If true, shows menu",
    optional: false,
  },
  {
    name: "onHide",
    type: "() => void",
    description: "Function to be called when menu is hidden",
    optional: false,
  },
  {
    name: "anchor",
    type: "HTMLElement | null",
    description: "Anchor element to attach menu to",
    optional: false,
  },
  {
    name: "children",
    type: "ReactNode | ReactNodeArray",
    description: "Menu content",
    optional: false,
  },
];

const MenuItemProps: Array<props> = [
  {
    name: "children",
    type: "string",
    description: "Menu item",
    optional: false,
  },
  {
    name: "onClick",
    type: "() => void",
    description: "Function to be called when items was clicked",
    optional: false,
  },
];

export { MenuProps, MenuItemProps };
