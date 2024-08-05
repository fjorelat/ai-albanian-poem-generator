function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemInput = document.querySelector("#poem-input");
  let apiKey = `ff1abb1045b3665675062f6f00tc644o`;
  let context =
    "You are a romantic poem expert and love to write short poems in Greek language.Your mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Generate A Greek poem about ${poemInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context:v${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generatePoem);
