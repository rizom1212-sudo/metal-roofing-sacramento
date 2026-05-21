import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageMeta from './PageMeta';
import SkipLink from './SkipLink';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionTargets = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    const staggerTargets = Array.from(new Set([
      ...Array.from(document.querySelectorAll<HTMLElement>('[data-stagger-item]')),
      ...Array.from(document.querySelectorAll<HTMLElement>('main .card-brand')),
    ]));
    const targets = [...sectionTargets, ...staggerTargets];
    if (!targets.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    sectionTargets.forEach(target => target.classList.add('reveal-on-scroll'));
    staggerTargets.forEach((target, index) => {
      target.classList.add('stagger-reveal');
      target.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(target => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    targets.forEach(target => {
      if (target.getBoundingClientRect().top < window.innerHeight * 0.75) {
        target.classList.add('is-visible');
        return;
      }

      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      sectionTargets.forEach(target => target.classList.remove('reveal-on-scroll', 'is-visible'));
      staggerTargets.forEach(target => {
        target.classList.remove('stagger-reveal', 'is-visible');
        target.style.transitionDelay = '';
      });
    };
  }, [pathname]);

  return null;
}

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <SkipLink />
      <PageMeta />
      <Navbar />
      <ScrollReveal />
      <main
        id="main-content"
        className={`flex-1 mobile-page-bottom md:pb-0 ${
          isHome ? 'pt-0' : 'pt-[126px] md:pt-[132px]'
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
