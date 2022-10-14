import * as React from "react";
import "./dbStyles.css";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Grid from "../GridComp/GridComp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import List from "../ListComp/List";
function DashboardWrapper({ data }) {
  const [value, setValue] = React.useState(0);

  const style = {
    color: "white",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#3a80e9",
      },
    },
  });

  return (
    <div className="tabs-wrapper">
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <TabList
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            textColor="primary"
          >
            <Tab label="Grid" sx={style} />
            <Tab label="List" sx={style} />
          </TabList>
          {/* <TabPanel value={0}>
            <div className="grid-flex">
              {data.length === 0 ?
                (<p>No Crypto Currencies found</p>) :
                (data.map((coin, i) => (
                  <Grid coin={coin} key={i} />
                )))}
            </div>
          </TabPanel> */}
          <TabPanel value={0}>
            <table className="list-table">
            {data.length === 0 ?
                (<p>No Crypto Currencies found</p>) :
                (data.map((coin, i) => <List coin={coin} key={i} />
              ))}
              </table>
          </TabPanel>
          <TabPanel value={1}>
            <table className="list-table">
            {data.length === 0 ?
                (<p>No Crypto Currencies found</p>) :
                (data.map((coin, i) => <List coin={coin} key={i} />
              ))}
              </table>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}

export default DashboardWrapper;