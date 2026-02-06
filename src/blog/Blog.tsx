import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Banner from './components/Banner.tsx';
import FacilityAccordion from './components/Accordion.tsx';

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Banner />
      <AppAppBar />

      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4, mt: '10px' }}
      >

        <FacilityAccordion />

        <MainContent />
      </Container>
      <Footer />
    </AppTheme>
  );
}
