import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, ListItemText, ListItemIcon, useMediaQuery, useTheme } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
export default function FacilityAccordion() {

    // Returns true if screen is desktop size (900px and up)
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div>

            {/* <Swiper
        centeredSlides={true}
        slidesPerView={4} // Shows 1 full slide + two half slides
        spaceBetween={5}   // Gap between the images
        loop={true}          // Recommended so you don't have empty space at the start/end
      >
        <SwiperSlide><img src={tgh} alt="Tampa General Hospital" /></SwiperSlide>
        <SwiperSlide><img src={stjoes} alt="St. Joseph's Hospital" /></SwiperSlide>
        <SwiperSlide><img src="img3.jpg" title="test" /></SwiperSlide>
      </Swiper> */}


            <Accordion defaultExpanded={isDesktop}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        '&.Mui-expanded': {
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            // Optional: keep the hover color even when expanded if you want it darker
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            },
                        },
                    }}
                >
                    <Typography sx={{ fontSize: { xs: '14px', sm: '14px', md: '24px' } }}>Tampa Area Hospitals</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '24px' } }}>
                        <Box
                            sx={{
                                display: { xs: 'block', sm: 'flex' },
                                gap: 4,
                                width: '100%',
                                alignItems: 'flex-start'
                            }}
                        >
                            {/* Left List */}
                            <List sx={{ flex: 1, py: 0 }}>
                                {[
                                    "Advent Health Carrollwood",
                                    "Advent Health Tampa",
                                    "Brandon Regional Hospital",
                                    "Encompass Rehabilation Hospital",
                                    "Kindred Hospital - Central (LTAC)"
                                ].map((hospital) => (
                                    <ListItem key={hospital} disableGutters sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                            <CircleIcon sx={{ fontSize: 6, color: 'text.secondary' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={hospital}
                                            primaryTypographyProps={{ variant: 'body2' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            {/* Right List */}
                            <List sx={{ flex: 1, py: 0 }}>
                                {[
                                    "Memorial Hospital of Tampa",
                                    "St. Joseph's Hospital - Main",
                                    "St. Joseph's Hospital - North",
                                    "Tampa General Hospital",
                                    "Tampa General Hospital Rehabilitation"
                                ].map((hospital) => (
                                    <ListItem key={hospital} disableGutters sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                            <CircleIcon sx={{ fontSize: 6, color: 'text.secondary' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={hospital}
                                            primaryTypographyProps={{ variant: 'body2' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded={isDesktop}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        '&.Mui-expanded': {
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            // Optional: keep the hover color even when expanded if you want it darker
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            },
                        },
                    }}
                >
                    <Typography sx={{ fontSize: { xs: '14px', sm: '14px', md: '24px' } }}>Skilled Nursing and Assisted Living Facilities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Box
                            sx={{
                                display: { xs: 'block', sm: 'flex' },
                                gap: 4,
                                width: '100%',
                                alignItems: 'flex-start'
                            }}
                        >
                            {/* Left List */}
                            <List sx={{ flex: 1, py: 0 }}>
                                {[
                                    "Bayshore Pointe Nursing and Rehab",
                                    "Canterbury Tower",
                                    "Carrollwood Care Center",
                                    "Gandy Crossing Rehabilitation and Healthcare Center",
                                ].map((hospital) => (
                                    <ListItem key={hospital} disableGutters sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                            <CircleIcon sx={{ fontSize: 6, color: 'text.secondary' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={hospital}
                                            primaryTypographyProps={{ variant: 'body2' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            {/* Right List */}
                            <List sx={{ flex: 1, py: 0 }}>
                                {[
                                    "Lakes at Lutz Healthcare and Rehabilitation",
                                    "Rehabilitation and Healthcare Center of Tampa",
                                    "Ybor City Healthcare and Rehab Center",
                                    "Allegro"
                                ].map((hospital) => (
                                    <ListItem key={hospital} disableGutters sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                            <CircleIcon sx={{ fontSize: 6, color: 'text.secondary' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={hospital}
                                            primaryTypographyProps={{ variant: 'body2' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}