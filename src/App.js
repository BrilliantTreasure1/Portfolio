import { useState } from 'react';

import MainLayouts from './components/layouts/mainlayouts';
import './App.css';
import Sidebar from './components/UI/sidebar';
import ContentContainer from './components/UI/contentContainer';
import TabPanel from './components/Tabs/TabPanel';
import { Typography } from '@mui/material';

function App() {
  const[value ,setvalue] = useState(0);

  const handleChange = (event, newValue ) => {
    setvalue(newValue);
  }

  return (
    <MainLayouts>
        <Sidebar value={value} handleChange={handleChange} />    
        <ContentContainer>
          <TabPanel value={value} index={0}>
              <Typography variant='h5'>1</Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
              <Typography variant='h5'>2</Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
              <Typography variant='h5'>3</Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
              <Typography variant='h5'>4</Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
              <Typography variant='h5'>5</Typography>
          </TabPanel>
        </ContentContainer>
    </MainLayouts>
);
}

export default App;
