const cartIco = document.querySelector(".cart-ico");

const cartContainer = document.querySelector(".cart-container");

const cartClose = document.querySelector(".cart-container .ico");

const cartClr = document.querySelector(".cart_btn");

const cartTray = document.querySelector(".cart_tray");

const filterToggle = document.querySelector(".photos_title #mob");

const filters = document.querySelector(".photos_filters");

const filterClose = document.querySelector(".content_title .ico");

//Event listeners

cartClose.addEventListener("click", () => {
  cartContainer.style.display = "none";
});

cartIco.addEventListener("click", () => {
  cartContainer.style.display = "flex";
});
cartClr.addEventListener("click", () => {
  cartTray.innerHTML = "";
});

filterToggle.addEventListener("click", () => {
  filters.style.display = "block";
});

filterClose.onclick = () => {
  filters.style.display = "none";
};

//Products array
const products = [
  {
    id: 1,
    name: "Red Bench",
    category: "people",
    price: 3.89,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 2,
    name: "Egg Balloon",
    category: "food",
    price: 93.89,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 3,
    name: "Man",
    category: "people",
    price: 100.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 4,
    name: "Architecture",
    category: "landmarks",
    price: 101.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 5,
    name: "Samurai King Resting",
    category: "pets",
    price: 10000.0,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 6,
    name: "Lonely Tree",
    category: "nature",
    price: 15.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 7,
    name: "City Lights",
    category: "cities",
    price: 45.0,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 8,
    name: "Golden Gate",
    category: "landmarks",
    price: 250.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 9,
    name: "Pasta Bowl",
    category: "food",
    price: 12.5,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 10,
    name: "Mountain Peak",
    category: "nature",
    price: 180.0,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 11,
    name: "Street Portrait",
    category: "people",
    price: 25.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 12,
    name: "Sleeping Cat",
    category: "pets",
    price: 8.99,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 13,
    name: "Tokyo Night",
    category: "cities",
    price: 199.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 14,
    name: "Coffee Cup",
    category: "food",
    price: 5.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 15,
    name: "Ocean Waves",
    category: "nature",
    price: 75.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 16,
    name: "Brooklyn Bridge",
    category: "landmarks",
    price: 300.0,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 17,
    name: "Golden Retriever",
    category: "pets",
    price: 18.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 18,
    name: "Sunset Boulevard",
    category: "cities",
    price: 65.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 19,
    name: "Forest Path",
    category: "nature",
    price: 22.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 20,
    name: "Vintage Car",
    category: "cities",
    price: 150.0,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 21,
    name: "French Baguette",
    category: "food",
    price: 3.5,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 22,
    name: "Puppy Eyes",
    category: "pets",
    price: 12.0,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 23,
    name: "Desert Dunes",
    category: "nature",
    price: 40.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 24,
    name: "Eiffel Tower",
    category: "landmarks",
    price: 210.0,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 25,
    name: "City Park",
    category: "cities",
    price: 55.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 26,
    name: "Sushi Platter",
    category: "food",
    price: 28.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 27,
    name: "Persian Cat",
    category: "pets",
    price: 30.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 28,
    name: "Old Library",
    category: "landmarks",
    price: 175.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 29,
    name: "Sunflower Field",
    category: "nature",
    price: 18.0,
    bestseller: true,
    image: "./assets/img/placeholder.png",
  },
  {
    id: 30,
    name: "Street Food",
    category: "food",
    price: 7.0,
    bestseller: false,
    image: "./assets/img/placeholder.png",
  },
];

//Initialize the page to 1 so the first few indexes ALWAYS render in renderCards()
let currentPage = 1;
//Items per page
const itemsPerPage = 6;
//Set filtered products array to have all the objects in the products array
let filProducts = [...products];

//Function to render the cards to the .grid container
const renderCards = (page) => {
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  const startAt = (page - 1) * itemsPerPage;
  const endAt = startAt + itemsPerPage;
  const rendered = filProducts.slice(startAt, endAt);

  console.log(rendered);

  rendered.forEach((c) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<div class="preview">
                  <img src=${c.image} alt="Preview Image" />
                  <div class="card-cart_btn">ADD TO CART</div>
                 ${c.bestseller ? `<div class="desc">Best seller</div>` : " "}
                </div>
                <div class="txt">
                  <p class="txt_category">${c.category}</p>
                  <p class="txt_name">${c.name}</p>
                  <p class="txt_price">$ ${c.price}</p>
                </div>`;

    grid.appendChild(card);
    const btn = card.querySelector(".card-cart_btn");
    btn.addEventListener("click", () => {
      addToCart(c);
    });
  });
};

//function to dynamically set number of pages and render pagination buttons based on the amount of elements in the filter array
const pagination = () => {
  const container = document.querySelector(".pagination");
  const pagePrev = document.querySelector("#page_prev");
  const pageNext = document.querySelector("#page_next");

  container.querySelectorAll(".pagination_btn").forEach((btn) => btn.remove());

  const totalPages = Math.ceil(filProducts.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.classList.add("pagination_btn");
    btn.textContent = i;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      currentPage = i;
      renderCards(currentPage);
      pagination();
    });

    container.insertBefore(btn, pageNext);
  }

  pagePrev.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderCards(currentPage);
      pagination();
    }
  };

  // Next button
  pageNext.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCards(currentPage);
      pagination();
    }
  };
};

//function to apply the filter the preset filProducts
const applyFilters = () => {
  const categories = document.querySelectorAll(".list_cat .cat .check");
  const prices = document.querySelectorAll(".price .check");

  let selectedCats = [];
  let selectedPrices = [];

  categories.forEach((cat) => {
    if (cat.checked) {
      if (cat.value === "premium") {
        selectedCats.push("premium");
      } else {
        selectedCats.push(cat.value);
      }
    }
  });

  prices.forEach((pb) => {
    if (pb.checked) {
      selectedPrices.push(pb.value);
    }
  });

  //Filter the products

  filProducts = products.filter((product) => {
    let catMatch = true;
    let priceMatch = true;

    //Check for the selected categories in products

    if (selectedCats.length > 0) {
      if (selectedCats.includes("premium")) {
        if (!product.bestseller) return false;
      } else if (!selectedCats.includes(product.category)) {
        return false;
      }
    }
    //check for the selected price range
    if (selectedPrices.length > 0) {
      priceMatch = selectedPrices.some((range) => {
        const price = product.price;
        if (range === "<20") return price < 20;
        if (range === "20-100") return price >= 20 && price <= 100;
        if (range === "100-200") return price > 100 && price <= 200;
        if (range === ">200") return price > 200;
      });
    }

    return catMatch && priceMatch;
  });

  currentPage = 1;
  renderCards(currentPage);
  pagination();
};

//function to handle Mobile and desktop filtering
const filterListener = () => {
  const isMobile = window.innerWidth <= 1239;
  const catBox = document.querySelectorAll(".list_cat .cat .check");
  const priceBox = document.querySelectorAll(".price .check");
  const saveBtn = document.querySelector("#save");
  const clrBtn = document.querySelector("#clear");

  //Condition to apply filters on save ONLY for mobile devices
  if (isMobile) {
    console.log("mobile!");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        applyFilters();
        filters.style.display = "none";
      });
    }
    if (clrBtn) {
      clrBtn.addEventListener("click", () => {
        catBox.forEach((cb) => (cb.checked = false));
        priceBox.forEach((cb) => (cb.checked = false));
        filProducts = [...products];
        currentPage = 1;
        pagination();
        renderCards(currentPage);
        filters.style.display = "none";
      });
    }
  } else {
    [...catBox, ...priceBox].forEach((box) => {
      box.addEventListener("change", () => {
        applyFilters();
      });
    });
  }
};

//funtion to add to cart
const addToCart = (obj) => {
  const cartItem = document.createElement("div");
  cartItem.classList.add("tray-item");

  cartItem.innerHTML = `
  <div class="info">
                <p class="title">${obj.name}</p>
                <p class="txt">$${obj.price}</p>
              </div>
              <div class="img">
                <img src=${obj.image} alt="" />
              </div>
  `;

  cartTray.appendChild(cartItem);
};

//execute all the functions ONLY after the DOM completes loading
document.addEventListener("DOMContentLoaded", () => {
  pagination();
  renderCards(currentPage);
  filterListener();
});
