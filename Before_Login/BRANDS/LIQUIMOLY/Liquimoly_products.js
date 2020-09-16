/*********************************** 
 SHOPPING CART AND IMAGES TO BE ADDED DYNAMICALLY ******************************************/

const menu = [
  {
    id: 1,
    title: "10W-30",
    category: "Liquimoly/Street",
    price: 917,
    img: "../../images/Liquimoly_Images/Street/10W30.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "10W-40",
    category: "Liquimoly/Street",
    price: 781,
    img: "../../images/Liquimoly_Images/Street/10W40.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "15W-50(1L)",
    category: "Liquimoly/Street",
    price: 840,
    img: "../../images/Liquimoly_Images/Street/15W50(1L).jpg",
    desc: `Developed for air and water-cooled 4-stroke engines exposed to normal to extreme operating conditions. For sporting applications. Suitable for engines with or without a wet clutch. Made and bottled in Germany. 6000 KM oil change interval. Synthetic technology engine oil. Smoother engine operations `,
  },
  {
    id: 4,
    title: "15W-50(4L)",
    category: "Liquimoly/Street",
    price: 3394,
    img: "../../images/Liquimoly_Images/Street/15W50(4L).jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "20W-50",
    category: "Liquimoly/Street",
    price: 776,
    img: "../../images/Liquimoly_Images/Street/20W50.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "5W-40",
    category: "Liquimoly/Street-Race",
    price: 1468,
    img: "../../images/Liquimoly_Images/Street%20Race/5W40.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "10W-40",
    category: "Liquimoly/Street-Race",
    price: 999,
    img: "../../images/Liquimoly_Images/Street%20Race/10W40.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "10W-50",
    category: "Liquimoly/Street-Race",
    price: 1499,
    img: "../../images/Liquimoly_Images/Street%20Race/10W50.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "10W-60",
    category: "Liquimoly/Street-Race",
    price: 1599,
    img: "../../images/Liquimoly_Images/Street%20Race/10W60.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Fork Oil 15W-Heavy (500ML)",
    category: "Fork-Oil",
    price: 763,
    img: "../../images/Liquimoly_Images/fork-oil-15W-heavy.jpeg",
    desc: `Full synthetic fork oil and shock-absorber oil. Reduces shear losses and provides sure handling performance even after long use. Prevents foam formation and seal hardening. Good corrosion and wear protection provide long service life.`,
  },
  {
    id: 11,
    title: "Fork Oil 10W-Medium (500ML)",
    category: "Liquimoly/Street-Race",
    price: 763,
    img: "../../images/Liquimoly_Images/fork-oil-10W-medium.jpeg",
    desc: `Full synthetic fork oil and shock-absorber oil. Reduces shear losses and provides sure handling performance even after long use. Prevents foam formation and seal hardening. Good corrosion and wear protection provide long service life.`,
  },
  {
    id: 12,
    title: "Fork Oil 5W-Light (500ML)",
    category: "Liquimoly/Street-Race",
    price: 763,
    img: "../../images/Liquimoly_Images/fork-oil-5W-light.jpeg",
    desc: `Full synthetic fork oil and shock-absorber oil. Reduces shear losses and provides sure handling performance even after long use. Prevents foam formation and seal hardening. Good corrosion and wear protection provide long service life.`,
  },
  
  {
    id: 14,
    title: "Chain Lube (250ML)",
    category: "Others",
    price: 899,
    img: "../../images/Liquimoly_Images/chain-lube.jpg",
    desc: `Fully synthetic chain grease. Extremely adhesive and water resistant. Excellent creeping and lubrication behavior. Especially suitable for high-speed chains. Reduces chain elongation and provides long chain service life. Optimal effectiveness only with unmixed use. We recommend cleaning the chain with Motorbike Chain and Brake.`,
  },
  {
    id: 15,
    title: "Brake Fluid DOT-4 (250mL)",
    category: "Others",
    price: 291,
    img: "../../images/Liquimoly_Images/Brake%20Fluid/Brake-Fluid-Dot-4.jpg",
    desc: `Synthetic brake fluid based on glycol ethers, alkyl poly glycols and glycol ether esters. It contains inhibitors to prevent the corrosion of metallic brake components and to reduce oxidation at increased temperatures. The brake fluid has a high wet and dry boiling point, thus ensuring safe braking even after the absorption of some moisture over an extended period of use.`,
  },
  {
    id: 16,
    title: "Brake Fluid Dot 5.1 (250ML)",
    category: "Others",
    price: 431,
    img: "../../images/Liquimoly_Images/Brake%20Fluid/Brake-Fluid-Dot-5_1.jpg",
    desc: `Synthetic brake fluid based on glycol ethers, alkyl polyglycols and polyglycol esters. It contains inhibitors to prevent the corrosion of metallic brake components and to reduce oxidation at increased temperatures. The brake fluid enjoys excellent wet and dry boiling points, thus guaranteeing safe braking.`,
  },
  
  {
    id: 17,
    title: "Chain Lube (250ML)",
    category: "Others",
    price: 899,
    img: "../../images/Liquimoly_Images/chain-lube.jpg",
    desc: `Fully synthetic chain grease. Extremely adhesive and water resistant. Excellent creeping and lubrication behavior. Especially suitable for high-speed chains. Reduces chain elongation and provides long chain service life. Optimal effectiveness only with unmixed use. We recommend cleaning the chain with Motorbike Chain and Brake.`,
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
              <h4 class="text-white font-weight-bolder item-title">${item.title}</h4>
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
