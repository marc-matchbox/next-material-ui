import { ReactNode } from "react";

export type DropdownItem = {
  title: string;
  icon?: any;
  onClick: (evt?: any) => void;
  divider?: boolean;
};

export type DropdownMenuProps = {
  menuItems: DropdownItem[];
  children: ReactNode;
};
