gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
      return gsap.to(targets, { duration: config.duration, opacity: 1 });
    },
    defaults: { duration: 1 }, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
  });
  
  const mainTitle = document.querySelector(".main-title");
  
  gsap.registerPlugin(ScrollTrigger); 
  
  // metodo set: seta os estilos iniciais do teu elemento
  
  const buttonSign = document.querySelector(".button-sign");
  const heroWoman = document.querySelector(".hero-woman")
  const mainLeft = document.querySelector(".main-left")
  
  gsap.set(buttonSign, {
    y: 0
  });
  
  
  // metodo to: seta o estilo final
  // gsap.to(buttonSign, {
  //   duration: 2, 
  //   opacity: 1
  // });
  
  // metodo from: config iniciais - diferenca que faz a animacao
  
  gsap.from(
    buttonSign,
    {
      scale: 0.5,
      opacity: 0,
      duration: 2
    }
  );
  
  gsap.from(heroWoman, {
    delay: .8,
    x: 200,
    opacity: 0,
    duration: 2
  }
  );
  gsap.from(mainLeft, {
    delay: .8,
    x: -200,
    opacity: 0,
    duration: 2
  }
  );
  
  // metodo from to: de um ponto ao outro
  
  gsap.fromTo(buttonSign, 2,
    {
      //from
      x: 300,
      opacity: 0,
      // rotate: 0
    
    },
    { // to
      x: 0,
      opacity: 1,
      delay: 1
      // repeat: -1,
      // yoyo: true,
      // rotate: 720
    },
  );
  
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
  
  // Loops: repeat -1
  
  // Functions Eventos, Callbacks: onStart, onUpdate, onComplete, onRepeat
  
  buttonSign.addEventListener("mouseover", function () {
    gsap.fromTo(buttonSign, {
      opacity: 1,
      scale: 1
    }, {
      opacity: 0.8,
      scale: 1.2,
      duration: 1,
    })
  })
  
  const anchors = document.querySelectorAll("a");
  const navbar = document.querySelector(".navbar")
  
  gsap.from(navbar, 2, {
    y: -100,
    delay: 1,
  opacity: 0
  })
  
  // timeline
  const card1 = document.querySelector(".card-1");
  const card2 = document.querySelector(".card-2");
  const card3 = document.querySelector(".card-3");
  var tlCards = gsap.timeline();
  
  tlCards.from(card1, {
    delay: 1,
    x: -500,
    opacity: 0
  }, "first-card").from(card2,  {
    x: -500,
    opacity: 0,
  }, "second-card").from(card3, {
    x: -500,
    opacity: 0,
  }, "thid-card")
  
  // time line 2
  
  // play, pause, restart, resume, reverse, start, timeScale(controla o tempo da animacao)
  
  
  const controls = [
    { label: "play", action: () => tlCards.play() },
    { label: "resume", action: () => tlCards.resume() },
    { label: "restart", action: () => tlCards.restart() },
    { label: "reverse", action: () => tlCards.reverse() },
    { label: "timeScale", action: (time) => tlCards.timeScale(time)},
    { label: "pause", action: () => tlCards.pause() }
  ]
  
  const app = document.querySelector("#app");
  
  controls.forEach(element => {
    const button = document.createElement("button");
    button.textContent = element.label;
    button.id = `button-${element.label}`;
    card1.appendChild(button)
    button.addEventListener("click", function () {
      if (element.label === "timeScale") {
        return element.action(10);
      }
  
      element.action();
    })
  });
  
// Scroll Trigger

const titleSection2 = document.querySelector(".title-section-2");
const subtitleSection2 = document.querySelector(".subtitle-section-2");

gsap.from(titleSection2, {
    x: -titleSection2.clientWidth,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: subtitleSection2,
      markers: true,
      start: 'top 80%',
      end: 'center 50%',
      scrub: 2
      }
})


gsap.from(subtitleSection2, {
    x: subtitleSection2.clientWidth,
    duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: subtitleSection2,
    start: 'top 80%',
    end: 'center 50%',
    scrub: 2
    // toggleActions: 'play reverse play reverse',
    // play, pause, resume, reverse, restart, reset, complete, none
    // OnEnter OnLeave OnEnterBack OnLeaveBack
    // pin: deixa o elemento fixo
    }
})
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  