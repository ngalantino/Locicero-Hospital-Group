import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import hero from '../../assets/main-hero-overlay.png';
import hospitalGroupLogo from '../../assets/LHG-logo-1024x344.png';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Banner() {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'white.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${hero})`, // Replace with your PNG
                height: '100vh', // Adjust height as needed
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >

            <Container maxWidth="lg" sx={{
                height: '100vh',      // Matches your hero height
                display: 'flex',     // Makes it easy to center content
                flexDirection: 'column',
                justifyContent: { xs: 'end', md: 'center' }
            }}>
                <Grid container spacing={4} alignItems="center" sx={{ padding: '40px' }}>
                    {/* Left Side: Text */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#064b83', fontSize: { xs: '24px' } }}>
                            Bridging care from facilities to home
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, color: '#064b83', fontSize: { xs: '14px' } }}>
                            Providing Services at Hospitals, Long-Term Acute Care, Skilled Nursing and Assisted Living Facilities.
                        </Typography>

                    </Grid>

                    {/* Right Side: Featured Image */}
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'block', md: 'block' }, justifyContent: '' }}>
                        <Box
                            component="img"
                            src={hospitalGroupLogo} // Replace with a secondary PNG/Graphic
                            sx={{ width: '100%', maxWidth: 500, height: 'auto' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}