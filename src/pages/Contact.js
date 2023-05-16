/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Container from '../components/common/Container'
import {Box} from "@mui/material"
import Form from '../components/common/Form'

const Contact = () => {
    return (
        <>
            <Container>
                <Box sx={{
                    marginRight:"1rem"
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14428.343966240212!2d82.93917022316772!3d25.301314791563605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x398e3283c408381f%3A0x21232b7663c2bd03!2sLohta%20Bazar%2C%20Varanasi%2C%20Uttar%20Pradesh%20221107!3m2!1d25.300579!2d82.94381969999999!5e0!3m2!1sen!2sin!4v1676351067074!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        className="border-0 w-100"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        alt="map"
                    />
                </Box>
            </Container>
            <Form/>
        </>
    )
}

export default Contact
