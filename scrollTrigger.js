console.log("Scroll Trigger Import Success 2024");
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// // Animate From - Logo Animation
// $(".rl_section_header_s_three").each(function (index) {
//     let triggerElement = $(this);
//     let targetElement = $(".rl-heading-style-h1.is-white.section-two");
  
//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerElement,
//         // trigger element - viewport
//         start: "top top",
//         end: "bottom top",
//         scrub: 1
//       }
//     });
//     tl.to(targetElement, {
//       scale: 1.5,
//       y: 500,
//       ease: "quad",
//       duration: 1
//     });
//   });

  // Animate From To - Last Section Sticky Cirlce Animation
$(".sticky-circle-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".sticky-circle-element");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "18rem",
        height: "18rem",
        borderRadius: "18rem",
        duration: 1
      },
      {
        width: "100vw",
        height: "100vh",
        borderRadius: "0rem",
        duration: 1
      }
    );
  });

  // Light to Dark Color Change
$(".sticky-circle-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".rl_section_layout1.neutral");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        backgroundColor: "#edede9",
        duration: 1
      },
      {
        backgroundColor: "#1a3a32",
        duration: 1
      }
    );
  });

  // Move section header
  $(".sticky-circle-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".rl-heading-style-h2");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top center",
        end: "center bottom",
        scrub: 1
      }
    });
    tl.from(targetElement, {
        scale: 0.75,
        opacity: 0,
        y: 200,
        duration: 1
    });
  });

  // Reveal Text
$(".sticky-circle-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".rl-text-style-medium.circle-section");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "center bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        opacity: 0,
        duration: 1
      },
      {
        opacity: 1,
        duration: 1
      }
    );
  });

   // Reveal Graphics
$(".sticky-circle-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".rl-button-group-center-2");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        opacity: 0,
        duration: 1
      },
      {
        opacity: 1,
        duration: 1
      }
    );
  });