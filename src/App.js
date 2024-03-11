import { ThemeProvider,createTheme } from "@mui/material/styles"
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react"
import { HelmetProvider,Helmet } from "react-helmet-async"
import createcache from "@emotion/cache"
import { prefixer } from "stylis"

import './App.css';


//NOTE create custom theme
const theme = createTheme({
  direction : rtl,
  typography : {
    fontFamily : "vazir"
  }
})

//NOTE create rtl cache
const cacheRTL = createcache({
  key :"muirtl"
  ,stylisPlugins: [prefixer,rtlPlugin]
})

function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>BrilliantTreasur</title>
          </Helmet>
        </HelmetProvider>
          <div className="App">
       
          </div>
  
    </ThemeProvider>
    </CacheProvider>
    
);
}

export default App;
