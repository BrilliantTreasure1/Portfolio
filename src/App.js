import { useEffect, useState } from 'react';


import MainLayouts from './components/layouts/mainlayouts';
import './App.css';
import Sidebar from './components/UI/sidebar';
import PagesContainer from './components/UI/pagesContainer';
import Page from './components/Tabs/Page';
import { Typography,useMediaQuery } from '@mui/material';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  const[value ,setvalue] = useState(0);

  const handleChange = (event, newValue ) => {
    setvalue(newValue);
  }

  const [mode, setmode] = useState()
  const perferDarkTheme = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(()  => {
    setmode(perferDarkTheme ? "dark" : "light")
  },[])

  const handleThemeChange = () => {
    setmode(prevMode => prevMode ==="light" ? "dark" : "light")
    console.log(mode);
  } 

  return (
    <MainLayouts mode={mode}>
        <Sidebar value={value} handleChange={handleChange} handleThemeChange={handleThemeChange}/>    
        <PagesContainer>
          <Page value={value} index={0}>
              <Home/>
          </Page>
          <Page value={value} index={1}>
              <About/>
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
