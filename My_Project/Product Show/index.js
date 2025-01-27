const container = document.getElementById("container");
let data = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((finalData) => {
    displayData(finalData);
  })
  .catch((error) => {
    console.log(error);
  });

const displayData = (data) => {
  data.forEach((product) => {
    let div = document.createElement("div");

    let productImg = document.createElement("img");
    let title = document.createElement("h4");
    let price = document.createElement("p");

    productImg.src = product.image;

    title.innerText = product.title;
    price.innerText = `USD: ${product.price}`;

    div.append(productImg, title, price);
    container.append(div);
  });
};
