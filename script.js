function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.querySelector(".product-name").textContent.toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function showDetails(name, price, pros, cons) {
  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalPrice").textContent = price;

  const prosList = document.getElementById("modalPros");
  prosList.innerHTML = "";
  pros.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    prosList.appendChild(li);
  });

  const consList = document.getElementById("modalCons");
  consList.innerHTML = "";
  cons.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    consList.appendChild(li);
  });

  document.getElementById("detailsModal").style.display = "block";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}
