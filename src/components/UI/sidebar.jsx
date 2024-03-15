import { useState } from "react"
import { Drawer} from "@mui/material"
import { grey } from "@mui/material/colors"

    import SidebarContainer from "../Sidebar/SidebarContainer"
    import DrawerContent from "./Drawercontent"
    import FloatActionButton from "../Sidebar/FloatActionButton"
    

const Sidebar = ({value , handleChange}) => {

    const [drawerOpen , setDrawerOpen] = useState(false);

    const handleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

 

    return (
        
       <SidebarContainer>
        {/*SidebarContainer ^^^=>> Grid */}

       {/* FAB */}
       <FloatActionButton handleDrawer={handleDrawer} />

        <DrawerContent value={value} handleChange={handleChange}/>

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
           <DrawerContent value={value} handleChange={handleChange} handleDrawer={handleDrawer} />
           </Drawer>
        
       </SidebarContainer>
       
    )
}

export default Sidebar;