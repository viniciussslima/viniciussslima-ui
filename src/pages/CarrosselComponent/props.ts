const carrosselProps: Array<props> = [
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
    optional: false,
  },
  {
    name: "children",
    type: "React.ReactNode | React.ReactNodeArray",
    description: "Carrossel items",
    optional: false,
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
];

const carrosselItemProps: Array<props> = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "Carrossel item",
    optional: false,
  },
  {
    name: "style",
    type: "React.CSSProperties",
    description: "Style of carrossel item",
    optional: true,
  },
];

export { carrosselProps, carrosselItemProps };
