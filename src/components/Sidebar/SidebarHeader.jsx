import { Typography ,Avatar } from "@mui/material"


const SidebarHeader = () => {

    return (
        <>
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
    </>
    )
}

export default SidebarHeader;