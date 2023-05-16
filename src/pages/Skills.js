import React from 'react'
import { Box, Typography,Card,Divider } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CircularProgress from '@mui/material/CircularProgress';
import Skill from "../data/Skill.json"
import Container from '../components/common/Container';

const Skills = () => {
    return (
        <>
            <Typography variant="h4">
                SKILL'S
            </Typography>
            <Divider className='border-2 bg-body-secondary' sx={{width:"95%"}}/>
            
            <Container>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {
                        Skill.map((item)=>(
                            <Card sx={{ 
                                    maxWidth: 275,
                                    display:"flex",
                                    alignItems:"center",
                                    marginLeft:"1rem",
                                    padding:"10px"
                                }}
                                key={item.id}
                            >
                            <CardHeader
                                title={item.title}
                            />
                            <Box sx={{
                                    position: "relative",
                                    display: "inline-block",
                                    width: "max-content"
                                }}
                            >
                            <CircularProgress variant="determinate" value={item.value} color="success" size={50} />
                            <Box sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Typography
                                variant="caption"
                                component="div"
                                fontWeight="700"
                                sx={{ marginTop: "-5px" }}
                                >
                                {Math.floor(item.value * 10) / 10}%
                                </Typography>
                            </Box>
                            </Box>
                        </Card>
                        ))
                    }
                </Box>
            </Container>   
        </>
    )
}

export default Skills
