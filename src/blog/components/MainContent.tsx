import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'swiper/swiper.css';
import krl from '../../assets/drlocicerowithstaff.jpg';
import hospital from '../../assets/hospital-250x333.png';



export default function MainContent() {
  return (
    <div>

      <Box sx={{ display: 'flex', position: 'relative', p: { xs: 3, md: 6 }, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box>
          <Typography sx={{
            fontSize: { xs: '14px', md: '24px' },
            fontWeight: 700,
            fontStyle: 'italic'
          }}
            color="#064b83">
            Multi-Disciplinary Care Team
          </Typography>
          <Typography sx={{
            ml: '12px',
            mr: '12px'
          }}>
            <p>Our Care Team is available to patients of LoCicero Medical Group as well as patients of other primary care practices.  Our goal is to provide efficient and timely care to patients with acute medical problems in a hospital setting, and to assist with the transition of care to the patient's home or skilled nursing facility.</p>

            <p>We have created a Multi-Disciplinary Hospitalist Care Team to meet the challenges of hospital care in the current healthcare environment.</p>

            <p>Our team consists of Primary Care/Internal Medicine Physicians, Board Certified Advanced Registered Nurse Practitioners (ARNP's), a Registered Clinical Pharmacist, a Board Certified Intensivist Physician, and Board Certified Specialty Physicians.</p>
          </Typography>
          <Typography sx={{
            fontSize: { xs: '14px', md: '24px' },
            fontWeight: 700,
            fontStyle: 'italic'
          }}
            color="#064b83">
            ACO and CIN Participation Experience
          </Typography>
          <Typography sx={{
            ml: '12px',
            mr: '12px'
          }}>
            <p>We are sensitive to ACO and CIN value-based network goals.  Our team's communication will facilitate transition of care billing and help avoid hospital readmissions.  Our accurate medical coding will help you achieve better patient management.</p>
          </Typography>
        </Box>
        <Box
          component="img"
          src={krl}
          alt="LoCicero Health"
          sx={{
            height: 350,
            width: 350,
            mr: 2,
            objectFit: 'contain' // Ensures the PNG doesn't stretch weirdly
          }}
        />
      </Box>


      <Box sx={{
        display: 'flex', 
        position: 'relative', p: { xs: 3, md: 6 }, 
        flexDirection: { xs: 'column-reverse', md: 'row' }, 
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyItems: 'center'
      }}>
        <Box
          component="img"
          src={hospital}
          alt="LoCicero Health"
          sx={{
            height: 350,
            width: 350,
            mr: 2,
            objectFit: 'contain', // Ensures the PNG doesn't stretch weirdly
          }}
        />
        <Box>
          <Typography sx={{
            fontSize: { xs: '14px', md: '24px' },
            fontWeight: 700,
            fontStyle: 'italic'
          }}
            color="#064b83">
            Hospital and Skilled Nursing Telehealth Services
          </Typography>
          <Typography sx={{
            ml: '12px',
            mr: '12px'
          }}>
            <p>LoCicero Hospital Group offers secure, user-friendly hospital telehealth services to patients in local hospitals and skilled nursing facilities.</p>

            <p>LoCicero Hospital Group uses the Guardian Telemedicine platform which supports HIPAA-compliant, face-to-face video conferencing between hospitalists and patients in hospitals or skilled nursing facilities.</p>

            <p>Our hospital telehealth services complement our in-person hospital care by facilitating easy and secure communication between patients and hospitalists.</p>

            <p>Through secure video conferencing with patients, our hospitalists can coordinate care, conduct ongoing monitoring, and deliver time-sensitive instructions without delays. This service can be especially helpful where consultation across various disciplines is required.</p>
          </Typography>
        </Box>

      </Box>
    </div>
  );
}
