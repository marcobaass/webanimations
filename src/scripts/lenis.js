import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, DrawSVGPlugin);


// --- Debugging
console.log("Global GSAP instance (from lenis.js):", gsap);
console.log("Is ScrollTrigger registered globally?", !!gsap.plugins.scrollTrigger);
// ------------------------------------------

// Initializing Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
  lerp: 0.08
});

// Connect Lenis to ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// Request Animation Frame (RAF) loop for Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ScrollTrigger defaults (all ScrollTriggers will use document.documentElement as scroller)
ScrollTrigger.defaults({
  scroller: document.documentElement
});


console.log("Lenis and GSAP ScrollTrigger initialized globally!");
