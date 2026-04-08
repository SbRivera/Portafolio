import { useEffect, useRef, RefObject } from 'react';
import { animate, stagger } from 'animejs';

interface ScrollAnimationOptions {
  translateY?: number[];
  translateX?: number[];
  opacity?: number[];
  scale?: number[];
  delay?: number;
  duration?: number;
  easing?: string;
  stagger?: number;
  threshold?: number;
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T> => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const params: Record<string, any> = {
      duration: options.duration ?? 800,
      ease: 'outCubic',
      delay: options.delay ?? 0,
    };

    if (options.translateY) params.translateY = options.translateY;
    else params.translateY = [30, 0];

    if (options.translateX) params.translateX = options.translateX;
    if (options.scale) params.scale = options.scale;
    params.opacity = options.opacity ?? [0, 1];

    // Set initial invisible state immediately
    element.style.opacity = '0';
    if (options.translateY !== null) {
      element.style.transform = `translateY(30px)`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(element, params);
            observer.unobserve(element);
          }
        });
      },
      { threshold: options.threshold ?? 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return elementRef;
};

export const useStaggerAnimation = <T extends HTMLElement>(
  childSelector: string,
  options: ScrollAnimationOptions = {}
): RefObject<T> => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll<HTMLElement>(childSelector);
    children.forEach((child) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(children, {
              translateY: [20, 0],
              opacity: [0, 1],
              duration: options.duration ?? 600,
              ease: 'outCubic',
              delay: stagger(options.stagger ?? 100, { start: options.delay ?? 0 }),
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold: options.threshold ?? 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childSelector]);

  return containerRef;
};
