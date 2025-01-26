const container = document.getElementById("container")
const filters = document.getElementById("filters")

let products = []

const fetchData = async () => {
    const response = await fetch("http://localhost:8080/products")
    products = await response.json()
    console.log(products)
    renderData(products)
}

const filterData = (category) => {
    if(category === "all"){
        renderData(products)
        return;
    }

    const filteredData = products.filter((item)=>item.category === category)
    renderData(filteredData)
}

const sortData = (order) => {
    let sortedData;
    if(order === "low-to-high"){
        sortedData = products.sort((a,b)=>a.price-b.price)
    } else if(order === "high-to-low") {
        sortedData = products.sort((a,b)=>b.price-a.price)
    }
    renderData(sortedData)
}

const renderData = (data) => {
    container.innerHTML = "" 
    data.forEach((item) => {
        const div = document.createElement("div")
        const img = document.createElement("img")
        const title = document.createElement("h4")
        const price = document.createElement("p")

        img.src = item.image
        title.textContent = item.title
        price.textContent = `USD: $ ${item.price}`

        div.append(img, title, price)
        container.append(div)
    })
}

const filterSelect = document.createElement("select");
filterSelect.innerHTML = `
  <option value="all">All Categories</option>
  <option value="men's clothing">Men's Clothing</option>
  <option value="jewelery">Jewelery</option>
  <option value="electronics">Electronics</option>
  <option value="women's clothing">Women's Clothing</option>
`;
filterSelect.addEventListener("change", (event) => filterData(event.target.value));
filters.append(filterSelect)

const priceSelect = document.createElement("select");
priceSelect.innerHTML = `
  <option value="">Sort By</option>
  <option value="low-to-high">Price Low to High</option>
  <option value="high-to-low">Price High to Low</option>
`;
priceSelect.addEventListener("change", (event) => sortData(event.target.value));
filters.append(priceSelect)

fetchData()