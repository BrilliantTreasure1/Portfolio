import { Typography , Box } from "@mui/material";

const TabPanel = (props) => {
    const { children, value,index,...others } = props;

    return(
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`sidebar-tab-${index}`}
        aria-labelledby={`tabpanel-${index}`}
        {...others}
        >
            {value === index && (
                <Box sx={{p:3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

export default TabPanel;