const props: Array<props> = [
  {
    name: "height",
    type: "number",
    description: "Height of carrossel",
    optional: false,
  },
  {
    name: "itemWidth",
    type: "number",
    description: "Width of carrossel item",
    optional: false,
  },
  {
    name: "qty",
    type: "number",
    description: "Quantity of carrossel items",
    optional: true,
  },
  {
    name: "space",
    type: "number",
    description: "Space between carrossel items",
    optional: true,
  },
  {
    name: "timeout",
    type: "number",
    defaultValue: "0",
    description: "Timeout to pass carrossel items",
    optional: true,
  },
  {
    name: "children",
    type: "React.ReactNode | React.ReactNodeArray",
    description: "Carrossel items",
    optional: false,
  },
];

export default props;
