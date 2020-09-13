/*********************************** 
 SHOPPING CART AND IMAGES TO BE ADDED DYNAMICALLY ******************************************/

const menu = [
  {
    id: 1,
    title: "10W30",
    category: "Liquimoly/Street",
    price: 15.99,
    img: "./images/Liquimoly_Images/Street/10W30.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "10W40",
    category: "Liquimoly/Street",
    price: 13.99,
    img: "./images/Liquimoly_Images/Street/10W40.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "15W50(1L)",
    category: "Liquimoly/Street",
    price: 6.99,
    img: "./images/Liquimoly_Images/Street/15W50(1L).jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "15W50(4L)",
    category: "Liquimoly/Street",
    price: 20.99,
    img: "./images/Liquimoly_Images/Street/15W50(4L).jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "20W50",
    category: "Liquimoly/Street",
    price: 22.99,
    img: "./images/Liquimoly_Images/Street/20W50.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "5W40",
    category: "Liquimoly/Street-Race",
    price: 18.99,
    img: "./images/Liquimoly_Images/Street%20Race/5W40.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "10W40",
    category: "Liquimoly/Street-Race",
    price: 8.99,
    img: "./images/Liquimoly_Images/Street%20Race/10W40.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "10W50",
    category: "Liquimoly/Street-Race",
    price: 12.99,
    img: "./images/Liquimoly_Images/Street%20Race/10W50.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "10W60",
    category: "Liquimoly/Street-Race",
    price: 16.99,
    img: "./images/Liquimoly_Images/Street%20Race/10W60.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Brake Fluid",
    category: "Brake-Fluid",
    price: 39.99,
    img: "./images/Liquimoly_Images/brake-fluid.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/5W30-Compatible.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/5W30-Leichluf.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/5W40.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/10W40(1L).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/10W40(4L).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/15W40(1L).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 17,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/15W40(4L).jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/75W90.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 19,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/ATF-Smooth.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 20,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/CVT-ATF-Oil.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 21,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/Injection-Cleaner.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 22,
    title: "5W30",
    category: "Meguin",
    price: 39.99,
    img: "./images/Meguin_Images/Radiator-Cleaner.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//======================== For the Cart Property ========================//

// Variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// Cart
let cart = [];

//======================== End of Cart Property ========================//

//======================== For the Menu Loading ========================//
// Load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);

  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button id=${category} class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter Items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    let result = `
      
        <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4 class="text-white font-weight-bolder">${item.title}</h4>
              <h4 class="price text-success">₹${item.price}</h4>
            </header>
            <p class="item-text text-muted">${item.desc}</p>
            <p></p>
          </div>
          <button class="bag-btn" data-id=${item.id}>
              <i class="fas fa-shopping-cart"></i>Buy Now
            </button>
        </article>
      
    `;
    return result;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
//======================== End of Menu Loading ========================//
