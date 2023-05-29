import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FacebookSharp, Home } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import style from "../../styles/Footer.module.css";
import Link from "next/link";

export default function Footer({
  shareURL = "https://wasemeshi-next.vercel.app",
}) {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#871b28",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          className={style.footerPosition}
          sx={{
            position: "absolute",
            bottom: 10,
            right: 16,
            backgroundColor: "inherit",
          }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            icon={<FacebookSharp size={32} />}
            onClick={() => {
              // Facebookでシェアする処理
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${shareURL}`,
                "_blank"
              );
            }}
          />
          <SpeedDialAction
            icon={<TwitterIcon size={32} />}
            onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?url=${shareURL}&hashtags=Wasemeshi`,
                "_blank"
              );
            }}
          />
          <SpeedDialAction
            icon={
              <Link href="/">
                <Home />
              </Link>
            }
          />
        </SpeedDial>
      </Box>
    </ThemeProvider>
  );
}
