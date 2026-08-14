import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceAreas from './pages/ServiceAreas';
import ServiceAreaCity from './pages/ServiceAreaCity';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import MetalRoofing from './pages/MetalRoofing';
import MetalRoofInstallation from './pages/MetalRoofInstallation';
import MetalRoofReplacement from './pages/MetalRoofReplacement';
import MetalRoofRepair from './pages/MetalRoofRepair';
import StandingSeamMetalRoofing from './pages/StandingSeamMetalRoofing';
import ResidentialMetalRoofing from './pages/ResidentialMetalRoofing';
import CommercialMetalRoofing from './pages/CommercialMetalRoofing';
import MetalRoofInspection from './pages/MetalRoofInspection';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalytics />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/metal-roofing" element={<MetalRoofing />} />
      <Route path="/metal-roof-installation" element={<MetalRoofInstallation />} />
      <Route path="/metal-roof-replacement" element={<MetalRoofReplacement />} />
      <Route path="/metal-roof-repair" element={<MetalRoofRepair />} />
      <Route path="/standing-seam-metal-roofing" element={<StandingSeamMetalRoofing />} />
      <Route path="/residential-metal-roofing" element={<ResidentialMetalRoofing />} />
      <Route path="/commercial-metal-roofing" element={<CommercialMetalRoofing />} />
      <Route path="/metal-roof-inspection" element={<MetalRoofInspection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service-areas" element={<ServiceAreas />} />
      <Route path="/service-areas/:slug" element={<ServiceAreaCity />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
