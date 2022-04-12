export type ItemList = {
  title: string;
  path: string;
  icon?: Element | JSX.Element;
  divider?: boolean;
};

export type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  sidebarItems: ItemList[];
};
