import {Tabs, Tab  } from "@mui/material"
import { 
    HomeRounded, 
    Face2Rounded,
    TextSnippetRounded, 
    TerminalRounded,
    ConnectWithoutContactRounded 
    } from "@mui/icons-material"


const SidebarTab = ({value , handleChange, handleDrawer}) =>{

    const tabProps = ( index ) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controlers" : `tabpanel-${index}`
        }
    }

    return(

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
             onClick={handleDrawer}
             iconPosition="start"
              {...tabProps(0)}
               />

            <Tab label="درباره من " 
            icon={<Face2Rounded />} 
            sx={{color:"whitesmoke"}} 
            onClick={handleDrawer}
            iconPosition="start" 
            {...tabProps(1)} 
            />

            <Tab label="رزومه من " 
            icon={<TextSnippetRounded />}
             sx={{color:"whitesmoke"}} 
             onClick={handleDrawer}
             iconPosition="start" 
             {...tabProps(2)} 
             />

            <Tab label=" نمونه کار ها " 
            icon={<TerminalRounded />} 
            sx={{color:"whitesmoke"}}
            onClick={handleDrawer}
            iconPosition="start" 
            {...tabProps(3)} 
            />

            <Tab label="   ارتباط با من " 
            icon={<ConnectWithoutContactRounded />} 
            sx={{color:"whitesmoke"}}
            onClick={handleDrawer}
            iconPosition="start" 
            {...tabProps(4)} 
            />


        </Tabs>
    )
}

export default SidebarTab;