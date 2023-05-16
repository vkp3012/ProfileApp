/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Meta from '../components/common/Meta'
import { Box, Button, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import dataConfig  from "../data/data.config.js"
import Container from '../components/common/Container';


const Project = () => {
    return (
        <>
            <Meta title={'Project'} />
            <Container>
                <Box sx={{
                        width:"95%",
                        alignItems:"center",
                        padding:"20px"
                    }}
                >
                    {
                        dataConfig.data.map((item)=>(
                            <Box key={item.id} mt="10px">
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="340"
                                        src={item.image}
                                    />
                                    
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.details}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small"><a href={item.website}>Website Link</a></Button>
                                        <Button size="small"><a href={item.gitLink}>GitHub Link</a></Button>
                                    </CardActions>
                                </Card>
                            </Box>            
                        ))
                    } 
                </Box>
            </Container>
        </>
    )
}

export default Project
