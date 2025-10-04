const cartIco = document.querySelector(".cart-ico");

const cartContainer = document.querySelector(".cart-container");

const cartClose = document.querySelector(".cart-container .ico");

const cartClr = document.querySelector(".cart_btn");

const cartTray = document.querySelector(".cart_tray");

const filterToggle = document.querySelector(".photos_title #mob");

const filters = document.querySelector(".photos_filters");

const filterClose = document.querySelector(".content_title .ico");
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
const products = [
  {
    id: 1,
    name: "Red Bench",
    category: "people",
    price: 3.89,
    bestseller: true,
  },
  {
    id: 2,
    name: "Egg Balloon",
    category: "food",
    price: 93.89,
    bestseller: false,
  },
  {
    id: 3,
    name: "Man",
    category: "people",
    price: 100.0,
    bestseller: false,
  },
  {
    id: 4,
    name: "Architecture",
    category: "landmarks",
    price: 101.0,
    bestseller: false,
  },
  {
    id: 5,
    name: "Samurai King Resting",
    category: "pets",
    price: 10000.0,
    bestseller: true,
  },
  {
    id: 6,
    name: "Lonely Tree",
    category: "nature",
    price: 15.0,
    bestseller: false,
  },
  {
    id: 7,
    name: "City Lights",
    category: "cities",
    price: 45.0,
    bestseller: true,
  },
  {
    id: 8,
    name: "Golden Gate",
    category: "landmarks",
    price: 250.0,
    bestseller: false,
  },
  {
    id: 9,
    name: "Pasta Bowl",
    category: "food",
    price: 12.5,
    bestseller: false,
  },
  {
    id: 10,
    name: "Mountain Peak",
    category: "nature",
    price: 180.0,
    bestseller: true,
  },
  {
    id: 11,
    name: "Street Portrait",
    category: "people",
    price: 25.0,
    bestseller: false,
  },
  {
    id: 12,
    name: "Sleeping Cat",
    category: "pets",
    price: 8.99,
    bestseller: true,
  },
  {
    id: 13,
    name: "Tokyo Night",
    category: "cities",
    price: 199.0,
    bestseller: false,
  },
  {
    id: 14,
    name: "Coffee Cup",
    category: "food",
    price: 5.0,
    bestseller: false,
  },
  {
    id: 15,
    name: "Ocean Waves",
    category: "nature",
    price: 75.0,
    bestseller: false,
  },
  {
    id: 16,
    name: "Brooklyn Bridge",
    category: "landmarks",
    price: 300.0,
    bestseller: true,
  },
  {
    id: 17,
    name: "Golden Retriever",
    category: "pets",
    price: 18.0,
    bestseller: false,
  },
  {
    id: 18,
    name: "Sunset Boulevard",
    category: "cities",
    price: 65.0,
    bestseller: false,
  },
  {
    id: 19,
    name: "Forest Path",
    category: "nature",
    price: 22.0,
    bestseller: false,
  },
  {
    id: 20,
    name: "Vintage Car",
    category: "cities",
    price: 150.0,
    bestseller: true,
  },
  {
    id: 21,
    name: "French Baguette",
    category: "food",
    price: 3.5,
    bestseller: false,
  },
  {
    id: 22,
    name: "Puppy Eyes",
    category: "pets",
    price: 12.0,
    bestseller: true,
  },
  {
    id: 23,
    name: "Desert Dunes",
    category: "nature",
    price: 40.0,
    bestseller: false,
  },
  {
    id: 24,
    name: "Eiffel Tower",
    category: "landmarks",
    price: 210.0,
    bestseller: true,
  },
  {
    id: 25,
    name: "City Park",
    category: "cities",
    price: 55.0,
    bestseller: false,
  },
  {
    id: 26,
    name: "Sushi Platter",
    category: "food",
    price: 28.0,
    bestseller: false,
  },
  {
    id: 27,
    name: "Persian Cat",
    category: "pets",
    price: 30.0,
    bestseller: false,
  },
  {
    id: 28,
    name: "Old Library",
    category: "landmarks",
    price: 175.0,
    bestseller: false,
  },
  {
    id: 29,
    name: "Sunflower Field",
    category: "nature",
    price: 18.0,
    bestseller: true,
  },
  {
    id: 30,
    name: "Street Food",
    category: "food",
    price: 7.0,
    bestseller: false,
  },
];
