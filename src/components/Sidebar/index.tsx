import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { SidebarProps } from "./sidebarType";
import { Drawer, DrawerHeader } from "./styled";
import { useMemo, useState } from "react";

export const Sidebar = ({ isOpen, setIsOpen, sidebarItems }: SidebarProps) => {
  const router = useRouter();
  const theme = useTheme();
  const [isOpenIfNotPinned, setIsOpenIfNotPinned] = useState(false);

  const openSidebar = useMemo(
    () => isOpen || isOpenIfNotPinned,
    [isOpen, isOpenIfNotPinned]
  );

  return (
    <Drawer
      variant="permanent"
      role="presentation"
      onMouseEnter={() => setIsOpenIfNotPinned(true)}
      onMouseLeave={() => setIsOpenIfNotPinned(false)}
      open={openSidebar}
    >
      <DrawerHeader>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MenuIcon /> : <MenuOpenIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sidebarItems.map(({ title, icon, divider, path }) => (
          <>
            {divider ? (
              <>
                <ListItem>{title}</ListItem>
                <Divider />
              </>
            ) : (
              <ListItemButton
                key={title}
                sx={{
                  minHeight: 48,
                  justifyContent: openSidebar ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => router.replace(path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: openSidebar ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  sx={{ opacity: openSidebar ? 1 : 0 }}
                />
              </ListItemButton>
            )}
          </>
        ))}
      </List>
    </Drawer>
  );
};
