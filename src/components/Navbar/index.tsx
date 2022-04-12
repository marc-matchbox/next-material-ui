import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { DropdownMenu } from "../DropDown";
import { useIntl } from "react-intl";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useLocale } from "@/hooks/useLocale";
import { useTheme } from "@/hooks/useTheme";
import ReactCountryFlag from "react-country-flag";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { intlDropdown } from "./intlDropdown";
import { THEMES } from "@/styles/themes";

type NavbarProps = {
  isOpenSidebar: boolean;
  setIsOpenSidebar: (value: boolean) => void;
};

export const Navbar = ({ setIsOpenSidebar, isOpenSidebar }: NavbarProps) => {
  const intl = useIntl();

  const { setLocale, locale } = useLocale();

  const { setTheme, theme: selectedTheme } = useTheme();

  const menuItems = [
    {
      title: intl.formatMessage({ id: "MY_ACCOUNT" }),
      onClick: () => {},
      icon: <PersonIcon />,
    },
    {
      title: intl.formatMessage({ id: "LOGOUT" }),
      onClick: () => {},
      icon: <LogoutIcon />,
      divider: true,
    },
  ];

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsOpenSidebar(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(isOpenSidebar && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <div>
            <IconButton color="inherit">
              {selectedTheme === THEMES.NATURE && (
                <LightModeIcon onClick={() => setTheme(THEMES.LIGHT)} />
              )}
              {selectedTheme === THEMES.LIGHT && (
                <DarkModeIcon onClick={() => setTheme(THEMES.DARK)} />
              )}
              {selectedTheme === THEMES.DARK && (
                <Brightness4Icon onClick={() => setTheme(THEMES.NATURE)} />
              )}
            </IconButton>
            <DropdownMenu menuItems={intlDropdown(intl, setLocale)}>
              <ReactCountryFlag
                countryCode={locale.split("-")[1]}
                svg
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
                title={locale}
              />
            </DropdownMenu>
            <DropdownMenu menuItems={menuItems}>
              <AccountCircle />
            </DropdownMenu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
