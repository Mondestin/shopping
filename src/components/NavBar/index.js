import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Home from "../../pages/home";
import NewItem from "../../pages/newitem";
import { useTheme } from '@mui/material/styles';
import Shopping from "../Shopping";

const Navbar = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <nav>
        <div>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <AppBar position="static">
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  textColor="inherit"
                  indicatorColor="secondary"
                  centered
                >
                  <Tab label="Home" value="1" />
                  <Tab label="Shopping" value="2" />
                  <Tab label="Item" value="3" />
                </TabList>
              </AppBar>
            </Box>
            <TabPanel value="1">
              <Home />
            </TabPanel>
            <TabPanel value="2">
              <Shopping/>
            </TabPanel>
            <TabPanel value="3">
              <NewItem />
            </TabPanel>
          </TabContext>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
