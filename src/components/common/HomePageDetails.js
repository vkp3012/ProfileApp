import { Box, Button, Divider, Stack, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import uiConfigs from "../../configs/ui.configs"
import Background from "../../images/home_hero.png"
import { BsLinkedin,BsGithub,BsTwitter,BsFillTelephoneFill} from "react-icons/bs"

const HomePageDetails = () => {
    const theme = useTheme();
    return (
        <Box sx={{
        position: "relative",
        color: "primary.contrastText",
        "&::before": {
            content: '""',
            width: "100%",
            height: "20%",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: "none",
            ...uiConfigs.style.gradientByImage[theme.palette.mode]
        }
        }}>
        <Swiper
            grabCursor={true}
            loop={true}
            style={{ width: "100%", height: "100%" }}
        >
            <SwiperSlide>
                <Box sx={{
                paddingTop: {
                    xs: "250%",
                    sm: "100%",
                    md: "90%",
                    lg: "50%"
                },
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundImage: `url(${Background})`
                }} />
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    ...uiConfigs.style.horizontalGradientByImage[theme.palette.mode]
                }} />
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    paddingX: { sm: "10px", md: "2rem", lg: "10rem" }
                }}>
                <Box sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    paddingX: "30px",
                    color: "text.primary",
                    width: { sm: "unset", md: "30%", lg: "40%" }
                }}>
                    <Stack spacing={4} direction="column">
                    {/* title */}
                    <Typography
                        variant="h4"
                        fontSize={{ xs: "2rem", md: "2rem", lg: "3rem" }}
                        fontWeight="700"
                        sx={{
                        ...uiConfigs.style.typoLines(2, "left")
                        }}
                    >
                        Hello 👨‍💻 I'm,<strong>Vivek Kumar Patel</strong>.
                    </Typography>
                    {/* title */}

                    <Stack direction="row" spacing={1} alignItems="center">

                        <Divider orientation="vertical"/>
                    </Stack>

                    {/* overview */}
                    <Typography variant="body1" sx={{
                        ...uiConfigs.style.typoLines(3)
                    }}>
                        "A Web Developer actively looking for a new position. I love to explore
                        new technologies and always try to enhance my skills through develop
                        some projects.I am a passionate Full Stake Software developer and
                        I interested to study updated technologies and tackle complex problems."
                    </Typography>
                    {/* overview */}

                    {/* buttons */}
                    <Stack direction="row" spacing={0.1} >
                        <Button
                            size="large"
                            startIcon={<BsLinkedin />}
                            sx={{ width: "max-content" }}
                            component="a"
                            href="https://www.linkedin.com/in/vkp9935/"
                        />
                        <Button
                            size="large"
                            startIcon={<BsGithub />}
                            sx={{ width: "max-content" }}
                            component="a"
                            href="https://github.com/vkp3012"
                        />
                        <Button
                            size="large"
                            startIcon={<BsTwitter />}
                            sx={{ width: "max-content" }}
                            component="a"
                            href="https://twitter.com/vivekpatel_er"
                        />
                        <Button
                            size="large"
                            startIcon={<BsFillTelephoneFill />}
                            sx={{ width: "max-content" }}
                            component="a"
                            href="tel: +91 9935162491"
                        />
                    </Stack>
                    {/* buttons */}
                    </Stack>
                </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
        </Box>
    );
};

export default HomePageDetails;