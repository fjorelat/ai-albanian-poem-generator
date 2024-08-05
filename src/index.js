function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Profound is solitude in two glasses of wine.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
