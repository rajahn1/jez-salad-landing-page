gsap.registerPlugin(ScrollTrigger); 

const allButtons = document.querySelectorAll("button")
const mainTitle = document.querySelector(".main-title");
const buttonSign = document.querySelector(".button-sign");

const heroWoman = document.querySelector(".hero-woman");
const mainLeft = document.querySelector(".main-left");

const sectionCards = document.querySelector(".section-cards");

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const anchors = document.querySelectorAll("a");
const navbar = document.querySelector(".navbar");

const titleSection2 = document.querySelector(".title-section-2");
const subtitleSection2 = document.querySelector(".subtitle-section-2");

const aboutUsLeft = document.querySelector(".about-us-left");
const aboutUsRight = document.querySelector(".customer-wrapper");

gsap.fromTo(mainTitle, 1, {
  x: -100,
  opacity: 0,
  
},
  {
    x: 0,
    opacity: 1,
    delay: 1
}
);

gsap.from(navbar, 1, {
  y: -100,
  delay: 1,
opacity: 0
})

gsap.fromTo(buttonSign, 1,
  {
    x: 300,
    opacity: 0,
  
  },
  { 
    x: 0,
    opacity: 1,
    delay: 1
  },
);

gsap.from(heroWoman, {
  delay: .8,
  x: 200,
  opacity: 0,
  duration: 1
}
);
gsap.from(mainLeft, {
  delay: .8,
  x: -200,
  opacity: 0,
  duration: 1
}
);

gsap.from(titleSection2, {
    x: -titleSection2.clientWidth,
    opacity: 0,
    scrollTrigger: {
      trigger: titleSection2,
      start: 'top 100%',
      end: 'center 70%',
      scrub: 2
      }
})


gsap.from(subtitleSection2, {
    x: subtitleSection2.clientWidth,
  opacity: 0,
  scrollTrigger: {
    trigger: subtitleSection2,
    start: 'center 100%',
    end: 'top 70%',
    scrub: 2
    // toggleActions: 'play reverse play reverse',
    // play, pause, resume, reverse, restart, reset, complete, none
    // OnEnter OnLeave OnEnterBack OnLeaveBack
    // pin: deixa o elemento fixo
    }
})

const tlCards = gsap.timeline({
    scrollTrigger: {
        trigger: sectionCards,
        start: 'top 90%',
        end: 'center 70%',
        scrub: 1
    }
});

tlCards.from(card1, {
    x: -500,
    opacity: 0
}, "first-card").from(card2, {
    x: -500,
    opacity: 0,
}, "second-card").from(card3, {
    x: -500,
    opacity: 0,
}, "third-card");


gsap.from(aboutUsLeft, {
    x: -(aboutUsLeft.clientWidth),
    opacity: 0,
    scrollTrigger: {
        trigger: aboutUsLeft,
        start: 'top 100%',
        end: 'center 80%',
        scrub: 1
        }
})

const customersReviews = document.querySelectorAll(".customer-review");
const tlCustomersReviews = gsap.timeline({
  scrollTrigger: {
    trigger: aboutUsRight,
    start: 'top 90%',
    end: 'center 70%',
    scrub: 1
  }
}) 

customersReviews.forEach(element => {
  tlCustomersReviews.from(element, {
    x: 500,
    opacity: 0
  })
});

const menuSection = document.querySelector(".menu-section");

const foodsDescriptions = document.querySelectorAll(".food-container");
const tlFoodDescriptions = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: menuSection,
    start: 'top 90%',
    end: 'center 60%',
    scrub: 1
  }
})

foodsDescriptions.forEach(element => {
  tlFoodDescriptions.from(element, {
    y: 500,
    opacity: 0
  })
});



allButtons.forEach((button) => {
  if (button.classList.contains("ignore")) return;
  const hoverButtonAnimation = gsap.to(button, {
    paused: true,
    opacity: 0.9,
    backgroundColor: "#FAFAFA",
    color: "#FB9333",
    borderColor: "#FB9333",
    transform: button.classList.contains("button-sign") ? "translateY(-10px)" : "translateY(0px)",
  });

  button.addEventListener("mouseenter", () => hoverButtonAnimation.play());
  button.addEventListener("mouseleave", () => hoverButtonAnimation.reverse());
  button.addEventListener("click", () => {
    gsap.to(button, { scale: 1.1, duration: 0.1, ease: "power1.out", onComplete: () => {
      gsap.to(button, { scale: 1, duration: 0.1, ease: "power1.in" });
    }});
  });   
});



















































