import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import hero from '../../assets/banner.jpg';
import hospitalGroupLogo from '../../assets/LHG-logo-1024x344.png';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

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
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero})`, // Replace with your PNG
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
                justifyContent: { xs: 'center', md: 'center' }
            }}>
                <Grid container spacing={4} alignItems="center" sx={{ padding: '0px', backgroundColor: 'none', borderRadius: '20px', p: '40px' }}>
                    {/* Left Side: Text */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h2" sx={{
                            pl: 4,              // 1. Push everything right (padding)
                            textIndent: '-2rem', // 2. Pull first line back left (negative indent)
                            lineHeight: 1.0,
                            fontFamily: 'Inter Tight',
                            fontWeight: '600',
                            mb: 1,
                            color: 'white',
                            fontSize: { xs: '2rem', md: '3rem' },
                            letterSpacing: '0.0em'
                        }}>
                            Bridging care from facilities to home
                        </Typography>
                        <Divider sx={{ borderBottomWidth: 2, borderRadius: 1 }} />
                        <Typography variant="h5" sx={{ pl: 8, textIndent: '-2rem', fontFamily: 'Inter Tight', mb: 4, opacity: 0.9, color: 'white', fontSize: { xs: '12px', md: '14px' }, mt: 1 }}>
                            Providing Services at Hospitals, Long-Term Acute Care, Skilled Nursing and Assisted Living Facilities.
                        </Typography>

                    </Grid>

                    {/* Right Side: Featured Image */}
                    {/* <Grid size={{ xs: 12, md: 6 }} sx={{
                        display: { xs: 'block', md: 'block' }, justifyContent: '' 
                    }}>
                        <Box
                            component="img"
                            src={hospitalGroupLogo} // Replace with a secondary PNG/Graphic
                            sx={{ width: '100%', maxWidth: 500, height: 'auto' }}
                        />
                    </Grid> */}
                </Grid>
            </Container>
        </Paper>
    );
}