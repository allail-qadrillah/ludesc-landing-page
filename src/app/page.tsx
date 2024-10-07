'use client';

import React, { useState, useCallback } from 'react';
import BorderNav from '@/components/themebuilder/2-NavSide/02-BorderNav';
import SidebarMapMenu from '@/components/elements/SidebarMapMenu';
import ScrollRevealSection from '@/components/elements/ScrollRevealSection';
import Achievement from '@/components/pages/Achivement/page';
import OurVisionPage from '@/components/pages/Vision/page';
import Product from '@/components/pages/Product/page';
import Home from '@/components/pages/Home/page';
import Team from '@/components/pages/Team/team';
import { sidebarMap } from '@/constant/sidebar';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionVisible = (id: string) => {
    setActiveSection(id);
  };

  const handleSidebarClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    },
    []
  );

  return (
    <div className="relative">
      <div className="fixed top-0 right-0 bottom-0 w-1/6 z-20 py-32 hidden md:block">
        <nav>
          {sidebarMap.map((item, index) => (
            <React.Fragment key={index}>
              <SidebarMapMenu
                number={item.number}
                href={item.href}
                text={item.text}
                isActive={activeSection === item.href.slice(1)}
                onClick={e => handleSidebarClick(e, item.href.slice(1))}
              />
              {activeSection === item.href.slice(1) && <BorderNav />}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* ScrollRevealSection components for each pages */}
      <div>
        <div id="home">
          <ScrollRevealSection id="home" onVisible={handleSectionVisible}>
            <Home />
          </ScrollRevealSection>
        </div>
        <div id="vision">
          <ScrollRevealSection id="vision" onVisible={handleSectionVisible}>
            <OurVisionPage />
          </ScrollRevealSection>
        </div>
        <div id="product">
          <ScrollRevealSection id="product" onVisible={handleSectionVisible}>
            <Product />
          </ScrollRevealSection>
        </div>
        <div id="achivement">
          <ScrollRevealSection id="achivement" onVisible={handleSectionVisible}>
            <Achievement />
          </ScrollRevealSection>
        </div>
        <div id="team">
          <ScrollRevealSection id="team" onVisible={handleSectionVisible}>
            <Team />
          </ScrollRevealSection>
        </div>
      </div>
    </div>
  );
}
