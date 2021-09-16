// ListProps {
//   title?: string;
//   collapsible?: boolean;
//   initOpen?: boolean;
//   children: ReactNode | Array<ReactNode>;
// }

const listProps: Array<props> = [
  {
    name: "children",
    type: "ReactNode | Array<ReactNode>",
    description: "List items",
    optional: false,
  },
  {
    name: "title",
    type: "string",
    description: "List title",
    optional: true,
  },
  {
    name: "collapsible",
    type: "boolean",
    description: "If true, list is collapsible",
    defaultValue: "false",
    optional: true,
  },
  {
    name: "initOpen",
    type: "boolean",
    description: "If true, list is open by default",
    defaultValue: "false",
    optional: true,
  },
];

const listItemProps: Array<props> = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "List item",
    optional: false,
  },
  {
    name: "onClick",
    type: "() => void",
    description: "Function when click the item",
    optional: true,
  },
];

export { listProps, listItemProps };
