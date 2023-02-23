import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import style from "../Footer/Footer.module.css"

const actions = [
  { icon: <InfoIcon />, name: 'service' },
  { icon: <InstagramIcon/>, name: 'Instagram' },
  { icon: <TwitterIcon />, name: 'Twitter' },
  { icon: <HomeIcon />, name: 'Home' },
];

export default function Footer() {

    const theme = createTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#871b28',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    });

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        className={style.footerPosition}
        sx={{ position: 'absolute', bottom: 10, right: 16, backgroundColor:"inherit" }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name} 
            
          />
        ))}
      </SpeedDial>
    </Box>
    </ThemeProvider>
  );
}

