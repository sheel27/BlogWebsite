import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80);
    width: 80%;
    height: 50vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-position: left 0px bottom -200px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
        text-align: center;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner style={{marginTop: "20px !important"}}/>
            <Wrapper>
                <Typography variant="h3">Blog - Code to help</Typography>
                <Text variant="h5">
                If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/sheel27" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">Reach out to me on Instagram
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/27_sheel_72/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send an Email 
                        <Link href="mailto:sheelparikh277@gmail.com" target="_blank" color="inherit">
                            <Email />
                        </Link>
                        to built web application and something like that.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;