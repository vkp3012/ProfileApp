import React from 'react'
import { Typography, useTheme } from '@mui/material';
const Logo = () => {
    const theme = useTheme();

    return (
        <div>
            <Typography 
                fontWeight="300" 
                fontSize="1.7rem"
            >
                Vivek
                <span 
                    style={{ 
                        color: theme.palette.secondary.main,
                        fontWeight:"600" 
                        }}
                    >
                        Patel
                    </span>
            </Typography>
        </div>
    )
}

export default Logo
