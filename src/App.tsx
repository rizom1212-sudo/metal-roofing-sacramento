import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import RoofReplacement from './pages/RoofReplacement';
import RoofRepair from './pages/RoofRepair';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceAreas from './pages/ServiceAreas';
import ServiceAreaCity from './pages/ServiceAreaCity';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import MetalRoofing from './pages/MetalRoofing';
import CommercialRoofing from './pages/CommercialRoofing';
import RoofInspection from './pages/RoofInspection';
import GuttersSiding from './pages/GuttersSiding';
import EmergencyRoofRepair from './pages/EmergencyRoofRepair';
import CityServicePage from './pages/CityServicePage';
import NotFound from './pages/NotFound';
import { cityServicePaths } from './data/cityServicePages';

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
      <Route path="/roof-replacement" element={<RoofReplacement />} />
      <Route path="/roof-repair" element={<RoofRepair />} />
      <Route path="/metal-roofing" element={<MetalRoofing />} />
      <Route path="/commercial-roofing" element={<CommercialRoofing />} />
      <Route path="/roof-inspection" element={<RoofInspection />} />
      <Route path="/gutters-siding" element={<GuttersSiding />} />
      <Route path="/emergency-roof-repair" element={<EmergencyRoofRepair />} />
      {cityServicePaths.map(path => (
        <Route key={path} path={path} element={<CityServicePage />} />
      ))}
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
