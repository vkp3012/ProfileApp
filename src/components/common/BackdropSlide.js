import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import NavigationSwiper  from "./NavigationSwiper";

const BackdropSlide = ({ backdrops }) => {
    return (
        <NavigationSwiper>
            {[...backdrops].splice(0,10).map((item,index)=>(
                <SwiperSlide>
                    <Box sx={{
                        paddingTop: "60%",
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        backgroundImage: `url(../../../../images/home_hero.png)`
                    }}/>
                </SwiperSlide>
            ))}
        </NavigationSwiper>
    )
}

export default BackdropSlide;