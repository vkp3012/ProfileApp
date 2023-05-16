import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import MenuButton from "../common/MenuButton";


const MainLayout = () => {
    return (
        <>
            <Box display="flex" minHeight="100vh">
                <MenuButton/>
                <Box
                    component="main"
                    flexGrow={1}
                    overflow="hidden"
                    minHeight="100vh"
                >
                    <Outlet/>
                </Box>
            </Box>
            <Footer/>
        </>
    )
}

export default MainLayout
