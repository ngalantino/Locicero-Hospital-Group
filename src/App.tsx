// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Blog from './blog/Blog.tsx';
import About from './blog/pages/About.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function Copyright() {
//   return (
//     <Typography
//       variant="body2"
//       align="center"
//       sx={{
//         color: 'text.secondary',
//       }}
//     >
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

export default function App() {
  return (
    // <Container maxWidth="sm">
    //   <Box sx={{ my: 4 }}>
    //     <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
    //       Material UI Vite example in TypeScript
    //     </Typography>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container>
    <BrowserRouter basename="/Locicero-Hospital-Group">
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}
