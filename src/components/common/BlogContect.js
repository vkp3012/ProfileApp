import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function Blog() {
    return (
        <>
            <Container maxWidth="lg">
                <main>
                <Grid container spacing={4}>
                    {/* {featuredPosts.map((post) => (
                    ))} */}
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    {/* <Main title="From the firehose" posts={posts} />
                    <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        archives={sidebar.archives}
                        social={sidebar.social}
                    /> */}
                </Grid>
                </main>
            </Container>
        </>
    );
}