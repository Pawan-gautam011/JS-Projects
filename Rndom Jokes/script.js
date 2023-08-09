const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const Url = {
    headers: {
      Accept: "application/json",
    },
  };

  displayLoader();
  const res = await fetch("https://icanhazdadjoke.com", Url);
  hideLoader();
  const data = await res.json();
  jokeEl.innerHTML = data.joke;

  function displayLoader() {
    document.querySelector(".lds-spinner").classList.add("active");
    document.querySelector(".btn").classList.add("hide");
  }
  function hideLoader() {
    document.querySelector(".lds-spinner").classList.remove("active");
    document.querySelector(".btn").classList.remove("hide");
  }
}
