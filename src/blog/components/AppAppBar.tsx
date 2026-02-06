import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import lhealthLogo from '../../assets/locicero_logo_transparent-300x220.png';
import { Link as RouterLink } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import { IconButton, Tooltip, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from 'react';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  // backdropFilter: 'blur(24px)',
  // border: '1px solid',
  // borderColor: (theme.vars || theme).palette.divider,
  // backgroundColor: theme.vars
  //   ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.1)`
  //   : alpha(theme.palette.background.default, 0.4),
  // backgroundColor: 'rgba(255,255,255,0.6)',
  // boxShadow: (theme.vars || theme).shadows[1],
  // padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: isScrolled? 'rgba(6,75,131,1)' : 'transparent',
        backgroundImage: 'none',
        // mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters sx={{ 
          pt: '16px',
          pb: '16px',
          backgroundColor: isScrolled? 'rgba(6,75,131,0.8)' : 'transparent',
          backdropFilter: isScrolled? 'blur(24px)' : 'none',
          border: isScrolled? '1px solid' : 'none',
          borderColor: isScrolled? 'rgba(6,75,131,0.6)' : 'none',
          }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <ButtonBase component={RouterLink} to="/">
              <Box
                component="img"
                src={lhealthLogo}
                alt="LoCicero Health"
                sx={{
                  height: 40,
                  width: 100,
                  mr: 2,
                  objectFit: 'contain' // Ensures the PNG doesn't stretch weirdly
                }}
              />
            </ButtonBase>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {/* <Link component={RouterLink} to="/about">
              <Button variant="text" color="info" size="small">
                About
              </Button>
              </Link>
              <Link component={RouterLink} to="/hospitals">
              <Button variant="text" color="info" size="small">
                Hospitals
              </Button>
              </Link>
              <Link component={RouterLink} to="/snf">
              <Button variant="text" color="info" size="small">
                Skilled Nursing & Assisted Living
              </Button>
              </Link>
              <Link component={RouterLink} to="/staff">
              <Button variant="text" color="info" size="small">
                Staff
              </Button>
              </Link>
              <Link component={RouterLink} to="/contact">
              <Button variant="text" color="info" size="small">
                Contact
              </Button>
              </Link> */}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >

            <Stack direction="row" spacing={1}>
              <Tooltip title="813-873-1072" arrow>
                <IconButton
                  color="inherit"
                  href="tel:8138731072" // Replaces with your actual phone number
                  aria-label="call"
                >
                  <PhoneIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="info@locicerohospitalgroup.com" arrow>
                <IconButton
                  color="inherit"
                  href="mailto:info@locicerohospitalgroup.com" // Replace with your email
                  aria-label="email"
                >
                  <EmailIcon />
                </IconButton>
              </Tooltip>
            </Stack>


          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>

            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>


                <Stack direction="row" spacing={1}>
                  <Tooltip title="Call Us" arrow>
                    <IconButton
                      color="inherit"
                      href="tel:8138731072" // Replaces with your actual phone number
                      aria-label="call"
                    >
                      <PhoneIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Email Us" arrow>
                    <IconButton
                      color="inherit"
                      href="mailto:info@locicerohospitalgroup.com" // Replace with your email
                      aria-label="email"
                    >
                      <EmailIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Divider sx={{ my: 3 }} />

              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
