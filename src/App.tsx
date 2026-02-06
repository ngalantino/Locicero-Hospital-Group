// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Blog from './blog/Blog.tsx';
// import About from './blog/pages/About.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './blog/components/ScrollToTop.tsx';



export default function App() {
  return (

    <BrowserRouter basename="/Locicero-Hospital-Group">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Blog />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>

  );
}
