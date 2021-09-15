/*
  open: boolean;
    onClose: React.MouseEventHandler<HTMLElement>;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    closeButton?: boolean;
    closeIcon?: string;
    closeIconStyle?: CSSProperties;
    disableBackdropClick?: boolean;
    children: ReactNode;
    */

const props: Array<props> = [
  {
    name: "open",
    type: "boolean",
    description: "If true, the drawer is open",
    optional: false,
  },
  {
    name: "onClose",
    type: "React.MouseEventHandler<HTMLElement>",
    description: "The function to call when the drawer is closed",
    optional: false,
  },
  {
    name: "containerStyle",
    type: "React.CSSProperties",
    description: "The style of the container",
    optional: true,
  },
  {
    name: "contentStyle",
    type: "React.CSSProperties",
    description: "The style of the content",
    optional: true,
  },
  {
    name: "closeButton",
    type: "boolean",
    description: "If true, a close button will be displayed",
    optional: true,
  },
  {
    name: "closeIcon",
    type: "string",
    description: "The icon to use for the close button",
    optional: true,
  },
  {
    name: "closeIconStyle",
    type: "React.CSSProperties",
    description: "The style of the close button",
    optional: true,
  },
  {
    name: "disableBackdropClick",
    type: "boolean",
    description: "If true, the backdrop will not close the drawer",
    optional: true,
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content of the drawer",
    optional: false,
  },
];

export default props;
