import { useState } from 'react';


import MainLayouts from './components/layouts/mainlayouts';
import './App.css';
import Sidebar from './components/UI/sidebar';
import PagesContainer from './components/UI/pagesContainer';
import Page from './components/Tabs/Page';
import { Typography } from '@mui/material';
import Home from './components/pages/Home';

function App() {
  const[value ,setvalue] = useState(0);

  const handleChange = (event, newValue ) => {
    setvalue(newValue);
  }



  return (
    <MainLayouts>
        <Sidebar value={value} handleChange={handleChange} />    
        <PagesContainer>
          <Page value={value} index={0}>
              <Home/>
          </Page>
          <Page value={value} index={1}>
              <Typography variant='h5'>2</Typography>
          </Page>
          <Page value={value} index={2}>
              <Typography variant='h5'>3</Typography>
          </Page>
          <Page value={value} index={3}>
              <Typography variant='h5'>4</Typography>
          </Page>
          <Page value={value} index={4}>
              <Typography variant='h5'>5</Typography>
          </Page>
        </PagesContainer>
    </MainLayouts>
);
}

export default App;
