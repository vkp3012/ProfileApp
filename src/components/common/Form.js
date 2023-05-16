import React, { useState } from 'react'
import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField,Typography } from "@mui/material";
import Container from './Container';

const Form = () => {
    const [username,setUserName] = useState("")
    const [subject,setSubject] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")

    const handleSubmit = event => {
        alert(`${username} ${email} ${message}`)
        event.preventDefault();
    }

    return (
        <Container>       
            <Typography
                component="h1"
                fontSize="2rem"
            >
                Message Me
            </Typography>
            <Box 
                component="form" 
                sx={{
                        '& > :not(style)': { m: 1, width: '55ch' },
                        marginRight:"2rem"
                    }}
                    // noValidate
                    // autoComplete="off"
                    onSubmit={handleSubmit}
            >
                <Stack spacing={1}>
                    <TextField
                        type="text"
                        placeholder='Name'
                        name="username"
                        fullWidth
                        value={username}
                        onChange={(e)=>setUserName(e.target.value)}
                        color="success"
                    />
                    <TextField
                        type="text"
                        placeholder='Subject'
                        name="username"
                        fullWidth
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                        color="success"
                    />
                    <TextField
                        type="email"
                        placeholder='Email'
                        name="username"
                        fullWidth
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        color="success"
                    />
                    <TextField
                        type="phone"
                        placeholder='Phone No.'
                        name="username"
                        fullWidth
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        color="success"
                    />
                    <TextField
                        type="text"
                        placeholder='Message'
                        name="username"
                        fullWidth
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        color="success"
                        multiline
                        rows={4}
                    />
                </Stack>
                <LoadingButton
                    type="submit"
                    Width="20%"
                    size="large"
                    variant="contained"
                    sx={{ marginTop: 1 }}
                    // loading={isLoginRequest}
                >
                    send Message
                </LoadingButton>
            </Box>
        </Container>
    )
}

export default Form
