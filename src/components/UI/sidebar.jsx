import { Typography , Box, Divider,Avatar , Hidden, Tabs, Tab , Drawer } from "@mui/material"
import { grey } from "@mui/material/colors"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { 
    HomeRounded, 
    Face2Rounded,
    TextSnippetRounded, 
    TerminalRounded,
    CopyrightRounded,
    ConnectWithoutContactRounded 
    } from "@mui/icons-material"

    import { useState } from "react"

const Sidebar = ( {value , handleChange} ) => {

    const [drawerOpen , setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    }

    const tabProps = ( index ) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controlers" : `tabpanel-${index}`
        }
    }

    return (
        <Grid2
        xs={0}
        sm={0}
        md={3}
        lg={2} 
        xl={2} 
        sx={{backgroundColor : grey[900] }}
        >   
        <Drawer 
        variant="temporary" 
        onClose={() => setDrawerOpen(false)}
        sx={{
            "& MuiDrawer-paper" : {
                width:300,
            }
        }}>
           
        <Box 
        sx={{
            justifyContent: "center",
            textAlign: "center",
            fontFamily : "vazir",
            textcolor : "whitesmoke"
        }}>
            <Hidden mdDown>
              <Avatar
                src=""
                sx={{height : 100 , width:100, margin: "0 auto"}}
                >
              </Avatar>
 
            </Hidden>
           
            <Typography variant="h8" sx={{color: "whitesmoke"}}>
                        ابوالفضل گنج تابش
            </Typography>
            <br/>
            <Typography variant="h8" sx={{color: "whitesmoke"}}>
                        برنامه نویس و توسعه دهنده وب
            </Typography>
            <Divider variant="middle" sx={{mt:2 , color: "whitesmoke"}}/>

            <Tabs 
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            >
                <Tab label="صفحه اصلی"
                 icon={<HomeRounded />} 
                 sx={{color:"whitesmoke"}} 
                 iconPosition="start"
                  {...tabProps(0)}
                   />

                <Tab label="درباره من " 
                icon={<Face2Rounded />} 
                sx={{color:"whitesmoke"}} 
                iconPosition="start" 
                {...tabProps(1)} 
                />

                <Tab label="رزومه من " 
                icon={<TextSnippetRounded />}
                 sx={{color:"whitesmoke"}} 
                 iconPosition="start" 
                 {...tabProps(2)} 
                 />

                <Tab label=" نمونه کار ها " 
                icon={<TerminalRounded />} 
                sx={{color:"whitesmoke"}} 
                iconPosition="start" 
                {...tabProps(3)} 
                />

                <Tab label="   ارتباط با من " 
                icon={<ConnectWithoutContactRounded />} 
                sx={{color:"whitesmoke"}} 
                iconPosition="start" 
                {...tabProps(4)} 
                />


            </Tabs>
                <Divider variant="middle" sx={{mt : 2}} />
             <Box 
                sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignContent: "center",
                height: 100,
             }}
             > 
            <Typography variant="subtitle2" color="whitesmoke">
                طراحی شده توسطه {""}
                BrilliantTreasure
            </Typography>

            <Typography variant="caption" color="whitesmoke">
                copy right 2023
                <CopyrightRounded sx={{verticalAlign : "middle" , height: 16}}/>
            </Typography>
            
        </Box>

        </Box>
            
        
        </Drawer>

        </Grid2>
    )
}

export default Sidebar;