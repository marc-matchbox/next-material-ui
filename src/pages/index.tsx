import { useTheme } from "@/hooks/useTheme";
import { THEMES } from "@/styles/themes";
import { Button } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const Home: NextPage = () => {
  const { theme, setTheme, setDirection } = useTheme();
  const router = useRouter();

  return (
    <>
      <Button
        startIcon={<AddCircleOutline />}
        color="primary"
        variant="contained"
        onClick={() => {
          setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
        }}
      >
        Alterar Tema
      </Button>
    </>
  );
};

export default Home;
