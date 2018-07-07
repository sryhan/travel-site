import MobileMenu from './modules/MobileMenu';
import RevealOnSCroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu(); 
new RevealOnSCroll($(".feature-item"), "85%");
new RevealOnSCroll($(".testimonial"), "60%");