import React, { useRef, useEffect } from 'react';

interface ScrollRevealSectionProps {
  id: string;
  children: React.ReactNode;
  onVisible: (id: string) => void;
}

const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  id,
  children,
  onVisible
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(id);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, onVisible]);

  return (
    <div ref={sectionRef} className="min-h-screen">
      {children}
    </div>
  );
};

export default ScrollRevealSection;
