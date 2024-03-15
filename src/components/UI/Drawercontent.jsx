import { Typography , Box, Divider,Avatar , Hidden, Tabs, Tab , Drawer } from "@mui/material"
import { 
    HomeRounded, 
    Face2Rounded,
    TextSnippetRounded, 
    TerminalRounded,
    CopyrightRounded,
    ConnectWithoutContactRounded 
    } from "@mui/icons-material"
import { grey } from "@mui/material/colors"


const DrawerContent = ({value , handleChange , setDrawerOpen}) =>{ 

    const tabProps = ( index ) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controlers" : `tabpanel-${index}`
        }
    }

    return(
             
        <Box 
        sx={{
            justifyContent: "center",
            textAlign: "center",
            fontFamily : "vazir",
            textcolor : "whitesmoke"
        }}>

              <Avatar
                src=""
                sx={{height : 100 , width:100, margin: "0 auto", display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none"
                }}}
                >
              </Avatar>

           
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
                 onClick={() => setDrawerOpen(false)}
                 iconPosition="start"
                  {...tabProps(0)}
                   />

                <Tab label="درباره من " 
                icon={<Face2Rounded />} 
                sx={{color:"whitesmoke"}} 
                onClick={() => setDrawerOpen(false)}
                iconPosition="start" 
                {...tabProps(1)} 
                />

                <Tab label="رزومه من " 
                icon={<TextSnippetRounded />}
                 sx={{color:"whitesmoke"}} 
                 onClick={() => setDrawerOpen(false)}
                 iconPosition="start" 
                 {...tabProps(2)} 
                 />

                <Tab label=" نمونه کار ها " 
                icon={<TerminalRounded />} 
                sx={{color:"whitesmoke"}}
                onClick={() => setDrawerOpen(false)}
                iconPosition="start" 
                {...tabProps(3)} 
                />

                <Tab label="   ارتباط با من " 
                icon={<ConnectWithoutContactRounded />} 
                sx={{color:"whitesmoke"}}
                onClick={() => setDrawerOpen(false)}
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
            
    )
}

export default DrawerContent;