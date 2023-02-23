import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import BentoIcon from '@mui/icons-material/Bento';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';


export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 400, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab icon={<RamenDiningIcon sx={{width:"80px"}}/>}label="Ramen" sx={{fontSize:"10px"}}/>
        <Tab icon={<BentoIcon sx={{width:"80px"}}/>}label="Bento" sx={{fontSize:"10px"}}/>
        <Tab icon={<EmojiFoodBeverageIcon sx={{width:"80px"}}/>}label="Cafe" sx={{fontSize:"10px"}}/>
        <Tab icon={<SportsBarIcon sx={{width:"80px"}}/>}label="Beer" sx={{fontSize:"10px"}}/>
        {/* <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" /> */}
      </Tabs>
    </Box>
  );
}