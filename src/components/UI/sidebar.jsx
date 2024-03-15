import { Drawer,Fab ,Box } from "@mui/material"
import { grey,red } from "@mui/material/colors"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { MenuRounded   } from "@mui/icons-material"



    import DrawerContent from "./Drawercontent"
    import { useState } from "react"

const Sidebar = ({value , handleChange}) => {

    const [drawerOpen , setDrawerOpen] = useState(false);

 

    return (
        <Grid2
        xs={0}
        sm={0}
        md={3}
        lg={2} 
        xl={2} 
        sx={{backgroundColor : grey[900] }}
        > 
        <Box
        sx={{
            display:{
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none"
            }
        }}>
            <Fab aria-label="sidebar" size="small" sx={{m :2 , backgroundColor: grey[800]}} onClick={() => setDrawerOpen(true)}>
                <MenuRounded/>
            </Fab>
        </Box>

        <DrawerContent value={value} handleChange={handleChange} />

            <Drawer 
            open={drawerOpen}
            variant="temporary" 
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper" : {
                    width:300,
                    backgroundColor: grey[900],
                },
                
            }}>
           <DrawerContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen} />
           </Drawer>
        
        
        </Grid2>
    )
}

export default Sidebar;