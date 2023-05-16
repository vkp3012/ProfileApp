import React from 'react'
import { Link } from "react-router-dom"
import { BsLinkedin,BsGithub,BsTwitter} from "react-icons/bs"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ProfileImg from "../../images/profile1.jpg"
import { Box,Stack } from '@mui/material';

const Profile = () => {
    return (
        <Box>
            <Stack>
                <Card sx={{padding:"10px"}}>
                    <CardActions sx={{display:"flex",flexDirection:"column"}}>
                        <CardMedia 
                            component="img"
                            height="294"
                            image={ProfileImg}
                            alt="Paella dish"
                        />
                        <Box sx={{
                            alignItems:"center",
                            display:"flex",
                            justifyContent:"center"
                        }}>
                            <Typography component="h1" fontWeight="900" fontSize="1rem">
                                Vivek Kumar Patel
                            </Typography>
                        </Box>
                        <Typography component="div">
                            <a href='https://www.linkedin.com/in/vkp9935/' alt="linkedin" className="py-2 m-1 fs-3"><BsLinkedin/></a>
                            <a href='https://github.com/vkp3012' alt="github"className="py-2 m-1 fs-3"><BsGithub/></a>
                            <a href='https://twitter.com/vivekpatel_er' alt="twitter" className=" py-2 m-1 fs-3"><BsTwitter/></a>      
                        </Typography>
                    </CardActions>
                    <CardContent>
                        <Typography color="text.secondary" component="h1" fontWeight="900">
                            I'm Vivek Kumar Patel. I'm from Varanasi Uttar Pradesh. 
                            I have done my B.Tech with 70.22% from United College of Engineering 
                            and Research Allahabad in 2019 and since then, I have been working as a 
                            Frontend Developer as Intern. During my Intern, I completed several projects on Frontend Developer, where I excelled in my work and even got certificates for the same. Now, I am interested in expanding my career graph by joining your reputed organization as a Frontend Developer where I also look forward to attaining people management opportunity in my area of work
                        </Typography>
                        <Typography>
                            <button className='button p-2 m-2'>
                                <a href='https://drive.google.com/file/d/1DWEG4xb_DakS6EXtLTZVN86jylctulBR/view' >
                                    DOWNLOAD CV                                          
                                </a> 
                            </button>
                            <button className='button p-2'>
                                <Link to="/contact">HIRE ME </Link> 
                            </button>
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    )
}

export default Profile
