import MobileMenu from './modules/MobileMenu';
import RevealOnSCroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu(); 
new RevealOnSCroll($(".feature-item"), "85%");
new RevealOnSCroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();