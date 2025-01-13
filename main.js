const btn = document
  .querySelector("#btn")
  .addEventListener("click", function () {
    this.remove();
  });

const img = document.createElement("img");
img.setAttribute("src", "img/photo-1.jpg");
document.body.appendChild(img);

function doSomethings() {
  console.log("container clicked");
}

const products = [
  {
    name: "Laptop",
    category_tree: [{ title: "Electronics" }, { title: "Computers" }],
  },
  {
    name: "Phone",
    category_tree: [{ title: "Electronics" }, { title: "Mobile Devices" }],
  },
];

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const infoButton = document.createElement("button");
  infoButton.textContent = "ინფო";
  infoButton.classList.add("button", "info");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "წაშლა";
  deleteButton.classList.add("button", "delete");

  const categoryInfo = document.createElement("div");
  categoryInfo.classList.add("category-info");
  categoryInfo.innerHTML = product.category_tree
    .map((cat) => `<div>${cat.title}</div>`)
    .join("");

  productCard.appendChild(productName);
  productCard.appendChild(infoButton);
  productCard.appendChild(deleteButton);
  productCard.appendChild(categoryInfo);

  deleteButton.addEventListener("click", () => {
    productCard.remove();
  });

  infoButton.addEventListener("click", () => {
    categoryInfo.style.display =
      categoryInfo.style.display === "none" ? "block" : "none";
  });

  return productCard;
}

const productsContainer = document.getElementById("products-container");
products.forEach((product) => {
  const productCard = createProductCard(product);
  productsContainer.appendChild(productCard);
});