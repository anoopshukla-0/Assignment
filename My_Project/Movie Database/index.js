const container = document.getElementById("container");
const input = document.getElementById("inputText");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  let inputText = input.value.trim();
  if (!inputText) {
    alert("Please enter a movie name!");
    return;
  }
  fetchData(inputText);
});

const fetchData = async (inputText) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=231214a8&t=${inputText}`
    );
    const data = await response.json();
    if (data.Response === "False") {
      // If the movie is not found or there's an error
      displayError(data.Error);
    } else {
      // If the movie is found
      displayMovie(data);
    }
  } catch (error) {
    console.log(error);
    displayError("An error occurred while fetching data.");
  }
};

const displayMovie = (data) => {
  container.innerHTML = "";
  let div = document.createElement("div");
  let poster = document.createElement("img");
  let title = document.createElement("h4");
  let plot = document.createElement("p");

  poster.src = data.Poster === "N/A" ? "placeholder.jpg" : data.Poster; // Handle missing poster
  title.innerText = data.Title;
  plot.innerText = data.Plot;

  div.append(poster, title, plot);
  container.append(div);
};

const displayError = (message) => {
  container.innerHTML = `<p class="error-message">${message}</p>`;
};