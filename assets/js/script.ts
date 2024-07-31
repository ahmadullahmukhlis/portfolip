import $ from "jquery";
import imagesLoaded from "imagesloaded";
import Isotope from "isotope-layout";
import WOW from "wow.js";
import { gsap } from "gsap";

// Document Ready
$(document).ready(() => {
  "use strict";

  // Extra JS
  $(".nav-link-click").click(() => {
    $(".navbar-collapse").collapse("hide");
  });

  // Preloader JS & Document Load JS
  $(window).on("load", () => {
    alert();
    $(".loadersss").fadeOut();
    $("#preloader-areasss").delay(350).fadeOut("slow");

    // Project Filtering
    if ($(".project-masonry-active").length) {
      $(".project-masonry-active").imagesLoaded(() => {
        $(".project-masonry-active").isotope({
          itemSelector: ".item",
        });
      });
    }

    // Blog Standard
    if ($(".blog-standard-wrap").length) {
      $(".blog-standard-wrap").imagesLoaded(() => {
        $(".blog-standard-wrap").isotope({
          itemSelector: ".item",
        });
      });
    }
  });

  // Header Style JS
  const headerStyle = () => {
    if ($(".main-header").length) {
      const windowpos = $(window).scrollTop();
      const siteHeader = $(".main-header");
      const scrollLink = $(".scroll-top");

      if (windowpos >= 250) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  };
  headerStyle();

  // Magnific Popup JS
  const magnifPopup = () => {
    $(".work-popup").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: false, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function
        opener: (openerElement: JQuery) => {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  };
  magnifPopup();

  // Scroll to Up JS
  const progressPath = document.querySelector(
    ".progress-wrap path"
  ) as SVGPathElement;
  const pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  progressPath.style.strokeDashoffset = String(pathLength);
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";

  const updateProgress = () => {
    const scroll = $(window).scrollTop();
    const height = $(document).height() - $(window).height();
    const progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = String(progress);
  };
  updateProgress();
  $(window).scroll(updateProgress);

  const offset = 150;
  const duration = 550;
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
    } else {
      $(".progress-wrap").removeClass("active-progress");
    }
  });

  $(".progress-wrap").on("click", (event: JQuery.ClickEvent) => {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      duration
    );
    return false;
  });

  // Dropdown Menu JS
  const mobileWidth = 992;
  const navcollapse = $(".navigation li.dropdown");

  navcollapse.hover(() => {
    if ($(window).innerWidth() >= mobileWidth) {
      $(this).children("ul").stop(true, false, true).slideToggle(300);
      $(this).children(".megamenu").stop(true, false, true).slideToggle(300);
    }
  });

  // Submenu Dropdown Toggle
  if ($(".main-header .navigation li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>'
    );

    // Dropdown Button
    $(".main-header .navigation li.dropdown .dropdown-btn").on(
      "click",
      function () {
        $(this).prev("ul").slideToggle(500);
        $(this).prev(".megamenu").slideToggle(800);
      }
    );

    // Disable dropdown parent link
    $(".navigation li.dropdown > a").on("click", (e: JQuery.ClickEvent) => {
      e.preventDefault();
    });
  }

  // Submenu Dropdown Toggle
  if ($(".main-header .main-menu").length) {
    $(".main-header .main-menu .navbar-toggle").click(() => {
      $(this).prev().prev().next().next().children("li.dropdown").hide();
    });
  }

  // Testimonials Active
  if ($(".testimonials-wrap").length) {
    $(".testimonials-wrap").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      speed: 1000,
      focusOnSelect: false,
      prevArrow: ".testimonial-prev",
      nextArrow: ".testimonial-next",
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // Project Filter
  $(".project-filter li").on("click", function () {
    $(".project-filter li").removeClass("current");
    $(this).addClass("current");

    const selector = $(this).attr("data-filter") || "";
    $(".project-masonry-active").imagesLoaded(() => {
      $(".project-masonry-active").isotope({
        itemSelector: ".item",
        filter: selector,
        masonry: {
          columnWidth: ".item",
        },
      });
    });
  });

  // Fact Counter + Text Count - Our Success
  if ($(".counter-text-wrap").length) {
    $(".counter-text-wrap").appear(
      () => {
        const $t = $(this);
        const n = $t.find(".count-text").attr("data-stop");
        const r = parseInt(
          $t.find(".count-text").attr("data-speed") || "0",
          10
        );

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({ countNum: $t.find(".count-text").text() }).animate(
            { countNum: n },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  // Scroll to Top
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      const target = $(this).attr("data-target");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  // Nice Select
  $("select").niceSelect();

  // WOW Animation
  if ($(".wow").length) {
    const wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }
});

// Window Resize
$(window).on("resize", () => {
  const mobileWidth = 992;
  const navcollapse = $(".navigation li.dropdown");
  navcollapse.children("ul").hide();
  navcollapse.children(".megamenu").hide();
});

// Window Scroll
$(window).on("scroll", () => {
  // Header Style and Scroll to Top
  const headerStyle = () => {
    if ($(".main-header").length) {
      const windowpos = $(window).scrollTop();
      const siteHeader = $(".main-header");
      const scrollLink = $(".scroll-top");

      if (windowpos >= 100) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  };

  headerStyle();
});

// Scroller Animation
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller: Element) => {
    scroller.setAttribute("data-animated", "true");
    const scrollerInner = scroller.querySelector(
      ".scroller__inner"
    ) as HTMLElement;
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item: HTMLElement) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// Window Load
$(window).on("load", () => {
  const svg = document.getElementById("preloaderSvg") as SVGElement;
  const tl = gsap.timeline();
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
    delay: 1.5,
    y: -100,
    opacity: 0,
  });
  tl.to(svg, {
    duration: 0.5,
    attr: { d: curve },
    ease: "power2.easeIn",
  }).to(svg, {
    duration: 0.5,
    attr: { d: flat },
    ease: "power2.easeOut",
  });
  tl.to(".preloader", {
    y: -1500,
  });
  tl.to(".preloader", {
    zIndex: -1,
    display: "none",
  });
});
