import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageMeta from './PageMeta';
import SkipLink from './SkipLink';

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
    const viewportBottom = window.innerHeight;

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

    sectionTargets.forEach(target => {
      if (target.getBoundingClientRect().top < viewportBottom) {
        target.classList.add('is-visible');
        return;
      }
      target.classList.add('reveal-on-scroll');
      observer.observe(target);
    });

    staggerTargets.forEach((target, index) => {
      if (target.getBoundingClientRect().top < viewportBottom) {
        target.classList.add('is-visible');
        return;
      }
      target.classList.add('stagger-reveal');
      target.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      sectionTargets.forEach(target => {
        target.classList.remove('reveal-on-scroll', 'is-visible');
      });
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
      <SkipLink />
      <PageMeta />
      <Navbar />
      <ScrollReveal />
      <main
        id="main-content"
        className="flex-1"
        style={isHome ? undefined : { paddingTop: 'var(--prc13-header-offset, 126px)' }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
