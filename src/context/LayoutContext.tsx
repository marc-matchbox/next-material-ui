import { createContext, ReactNode, useState } from "react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { sidebarConfig } from "@/config/sidebarConfig";
import { DrawerHeader } from "@/components/Sidebar/styled";

type LayoutContextProps = {
  setShowNavbar: (value: boolean) => void;
  setShowSidebar: (value: boolean) => void;
  setShowFooter: (value: boolean) => void;
};

export const LayoutContext = createContext({} as LayoutContextProps);

type LayoutContextProviderProps = {
  children: ReactNode;
};

export const LayoutContextProvider = ({
  children,
}: LayoutContextProviderProps) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <LayoutContext.Provider
      value={{ setShowNavbar, setShowSidebar, setShowFooter }}
    >
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {showNavbar && (
          <Navbar isOpenSidebar={isOpen} setIsOpenSidebar={setIsOpen} />
        )}
        {showSidebar && (
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            sidebarItems={sidebarConfig}
          />
        )}
        <Box component="main" sx={{ p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </LayoutContext.Provider>
  );
};
