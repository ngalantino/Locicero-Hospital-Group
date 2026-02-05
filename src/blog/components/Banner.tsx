import { Box, Paper } from '@mui/material';
import banner from '../../assets/banner.jpg';
// import hospitalGroupLogo from '../../assets/LHG-logo-1024x344.png';

export default function Banner() {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${banner})`, // Replace with your PNG
                height: '60vh', // Adjust height as needed
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* This Box adds a dark overlay so text is readable */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />

            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 } }}>
                {/* <Box
                    component="img"
                    src={hospitalGroupLogo}
                    alt="LoCicero Health"
                    sx={{
                        height: 350,
                        width: 350,
                        mr: 2,
                        objectFit: 'contain' // Ensures the PNG doesn't stretch weirdly
                    }}
                /> */}
                {/* <Typography variant="h5" color="inherit">
                    Building a faster site with React and MUI.
                </Typography> */}
            </Box>
        </Paper>
    );
}