import React from 'react'
import Meta from '../components/common/Meta'
import Skills from './Skills'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from "../components/common/Container"
import { Box, Divider, Stack, Typography } from '@mui/material';

const Education = () => {

    return (
        <>
            <Meta title={"Eduction"}  />
            <Container>
                    <Typography 
                        component="h3"
                        className='fs-1'
                    >
                        Resume
                    </Typography>
                    <Divider className='border-2 bg-body-secondary w-75'/>
            </Container>
            <Box
                sx={{
                    width:"95%",
                    padding:"20px"
                }}
            >
                <Stack>
                    <Typography 
                        component="h1"
                        className='text-center'
                    >
                        Education
                    </Typography>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                August 2015 - 2019 May
                            </Typography>
                            <Typography variant="h5" component="div">
                                Bachelor of Electronics and Communication Engineering
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Detail's
                            </Typography>
                            <Typography variant="body2">
                                I completed studies in Electronics and Communication Engineering.
                                I did One course work as part of this program that was helping to develop my technical problem solving and development
                                of software and testing skills.
                            <br />
                            
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <h4 size="small">United College of Engineering and Research, Allahabad</h4>
                        </CardActions>
                    </Card>
                </Stack>
            </Box>
                <Box
                    sx={{
                        width:"95%",
                        padding:"20px"
                    }}
                >
                    <Stack>
                        <Typography component="h1" className='text-center'>Experience</Typography>
                        <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                January 2022 - July 2022
                            </Typography>
                            <Typography variant="h5" component="div">
                                Frontend Developer
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Detail's
                            </Typography>
                            <Typography variant="body2">
                                I completed the intern training program successfully.
                                This training work was helped to develop my technical problem solving and software development and testing skills.
                            <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <h4 size="small">PepCoding Education (OPC) Private Ltd.</h4>
                        </CardActions>
                        </Card>
                    </Stack>
                </Box>
                <Container>
                    <Skills/>
                </Container>
        </>
    )
}

export default Education
