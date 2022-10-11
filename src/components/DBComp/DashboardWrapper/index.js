import { Tab, Tabs } from '@mui/material'
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './styles.css'

const DashboardWrapper = ({ data }) => {
  const [value, setValue] = useState(0)
  const handleChange = (newValue) => {
    setValue(newValue)
  }


  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <div className='tabs-wrapper'>
      <Tabs 
      varient="fullWidth"
      value={value} 
      onChange={handleChange} 
      aria-label="basic tabs example">
        <Tab 
        label="Grid"
        sx={{
          color: 'white', width: '50vw', fontSize: '1.2rem',
          fontWeight: 600, fontFamily: 'Inter', textTransform: 'capitalize'
        }} />
        <Tab label="Item Two"
        sx={{
          color: 'white', width: '50vw', fontSize: '1.2rem',
          fontWeight: 600, fontFamily: 'Inter', textTransform: 'capitalize'
        }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        grid
      </TabPanel>
      <TabPanel value={value} index={1}>
        list
      </TabPanel>
      {data.map((item, i) => (
        <h1 key={i}>{item.id}</h1>
      ))}
    </div>
  )
}

export default DashboardWrapper