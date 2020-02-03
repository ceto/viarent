import $ from "jquery";
import "what-input";
import "slick-carousel";

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// $(document).foundation();

$(".banner-carousel").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: false,
  dots: true,
  appendDots: $('.main__three')
});

