declare global {
  interface props {
    name: string;
    type: string;
    defaultValue?: string;
    description: string;
    optional: boolean;
  }
}

export {};
