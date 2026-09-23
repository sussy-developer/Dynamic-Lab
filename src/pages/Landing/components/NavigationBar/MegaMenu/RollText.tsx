import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './RollText.css';

function RollText({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Ensure children is treated as a string
  const textStr = typeof children === 'string' ? children : String(children);
  const letters = textStr.split('');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Attach hover listener to an outer anchor, button, or the element itself
    const triggerEl = el.closest('a') || el.closest('button') || el.closest('.test-link-item') || el;

    const onEnter = () => {
      if (timelineRef.current) timelineRef.current.kill();

      const wrappers = Array.from(el.querySelectorAll('.roll-char-wrapper'));
      const tl = gsap.timeline();

      wrappers.forEach((wrapper, index) => {
        const spans = wrapper.querySelectorAll('span');
        tl.to(
          spans,
          {
            yPercent: -100, // Move both spans UP by 100%
            duration: 0.3,
            ease: 'power3.out',
            overwrite: 'auto',
          },
          index * 0.015 // Stagger delay per character - sped up slightly for snappiness
        );
      });

      timelineRef.current = tl;
    };

    const onLeave = () => {
      if (timelineRef.current) timelineRef.current.kill();

      const wrappers = Array.from(el.querySelectorAll('.roll-char-wrapper'));
      const tl = gsap.timeline();

      wrappers.forEach((wrapper, index) => {
        const spans = wrapper.querySelectorAll('span');
        tl.to(
          spans,
          {
            yPercent: 0, // Reset back to original position
            duration: 0.3,
            ease: 'power3.out',
            overwrite: 'auto',
          },
          index * 0.015
        );
      });

      timelineRef.current = tl;
    };

    triggerEl.addEventListener('mouseenter', onEnter);
    triggerEl.addEventListener('mouseleave', onLeave);

    return () => {
      triggerEl.removeEventListener('mouseenter', onEnter);
      triggerEl.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <span ref={containerRef} className={`roll-text-container ${className}`}>
      {letters.map((char, i) => (
        <span key={i} className="roll-char-wrapper">
          {/* \u00A0 is a non-breaking space so spaces don't collapse */}
          <span className="roll-char-orig">{char === ' ' ? '\u00A0' : char}</span>
          <span className="roll-char-dupe">{char === ' ' ? '\u00A0' : char}</span>
        </span>
      ))}
    </span>
  );
}

export default RollText;
