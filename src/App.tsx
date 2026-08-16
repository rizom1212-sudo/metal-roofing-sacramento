import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MetalRoofing from './pages/MetalRoofing';
import MetalRoofInstallation from './pages/MetalRoofInstallation';
import MetalRoofReplacement from './pages/MetalRoofReplacement';
import MetalRoofRepair from './pages/MetalRoofRepair';
import StandingSeamMetalRoofing from './pages/StandingSeamMetalRoofing';
import ResidentialMetalRoofing from './pages/ResidentialMetalRoofing';
import CommercialMetalRoofing from './pages/CommercialMetalRoofing';
import MetalRoofInspection from './pages/MetalRoofInspection';

const About = lazy(() => import('./pages/About'));
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'));
const ServiceAreaCity = lazy(() => import('./pages/ServiceAreaCity'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return <div className="min-h-[50vh] bg-cream" aria-hidden />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalytics />
      <Layout>
        <Suspense fallback={<RouteFallback />}>
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
