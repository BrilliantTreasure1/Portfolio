import { useCallback } from 'react';
import { Box } from '@mui/material';
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import {links} from "../../constants/particles"


const Home = () => {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine)
      },[])
    
      const particlesLoaded = useCallback(async container => {
        await console.log(container);
      },[])

    return(
        <>
         <Box
        sx={{ 
        backgroundImage: {
        lg:`url(${require("../../../src/assets/ph1.png")})` ,
        xl:`url(${require("../../../src/assets/ph1.png")})` ,
        md:`url(${require("../../../src/assets/1.jpg")})`,
        sm:`url(${require("../../../src/assets/1.jpg")})` ,
        xs:`url(${require("../../../src/assets/1.jpg")})`},  
        backgroundPosition: "center",  
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        height:{
            xl: "100vh",
            lg: "100vh",
            md: "100vh",
            sm: "100vh",
            xs: "100vh",
        }  ,
        backgroundColor:"black"
        }}>
            
      </Box>
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links}/>
        </>
       
    )
}

export default Home;