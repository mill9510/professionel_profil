document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = `${e.clientX + window.scrollX}px`;
  cursor.style.top = `${e.clientY + window.scrollY}px`;
});

//Linjen henter alle elementerne på siden, som har klassen "slide-in" og gemmer dem som const "sliders".
const sliders = document.querySelectorAll(".slide-in");
//Bestemmer hvordan og hvor meget elementerne vises på skærmen
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

//Udløser appear ved scroll
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
