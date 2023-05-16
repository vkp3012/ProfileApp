import React ,{ useState } from 'react'
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs"

const UserMenu = () => {
    const { user } = useSelector((state)=>state.user);
    const [anchorEl,setAnchorEl] = useState(null);
    const toggleMenu = (e) => setAnchorEl(e.currenttarget) 
    return (
        <>
            {user && (
                <>
                    <Typography
                        variant="h6"
                        sx = {{cursor:"pointer",useSelector:"none"}}
                        onClick = {toggleMenu}
                    >
                        {user.displayName}
                    </Typography>
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={()=>{setAnchorEl(null)}}
                        PaperProps={{sx : { padding: 0 }}}
                    >
                        {
                            menuConfigs.user.map((item,index)=>(
                                <ListItemButton
                                    component = {Link}
                                    to = {item.path}
                                    kay= {index}
                                    onClick={()=>setAnchorEl(null)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText 
                                        disableTypography 
                                        primary = {
                                            <Typography textTransform="uppercase">{item.display}</Typography>
                                        }
                                    />
                                </ListItemButton>
                            ))
                        }
                    </Menu>
                </>
            )}
        </>
    )
}

export default UserMenu
