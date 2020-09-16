/*********************************** 
 SHOPPING CART AND IMAGES TO BE ADDED DYNAMICALLY ******************************************/

 const menu = [
  
  {
    id: 1,
    title: "5W-30",
    category: "Meguin",
    price: 6500,
    img: "../../images/Meguin_Images/5W30-Compatible.jpg",
    desc: `High-performance long life motor oil based on modern Low-SAPS Additive Technology and HC synthetic base oils offering a persuasive combination of outstanding properties. Can be used in VW vehicles with and without extended maintenance intervals (WIV), in FSI engines and diesel vehicles, incl. those with a diesel particulate filter (DPF) and turbocharger.`,
  },
  {
    id: 2,
    title: "5W-30",
    category: "Meguin",
    price: 4900,
    img: "../../images/Meguin_Images/5W30-Leichluf.jpg",
    desc: `Multigrade low-friction motor oil of the latest generation. Suitable for year-round use. Its combination of unconventional base oil components with the very latest additive technology guarantees low viscosity and high shear resistance. This product reliably prevents the formation of deposits, reduces frictional losses in the engine and optimally protects against wear.`,
  },
  {
    id: 3,
    title: "5W-40",
    category: "Meguin",
    price: 4700,
    img: "../../images/Meguin_Images/5W40.jpg",
    desc: `High-performance motor oil based on HC synthetic technology with a new special additive system (Low-SAPS Technology). Meets the high performance requirements and quality level of modern gasoline and diesel engines. In particular, it guarantees the effectiveness of the Euro 4/Euro 5 emission control systems over very long periods as well as low wear and good engine cleanliness. `,
  },
  {
    id: 4,
    title: "10W-40(1L)",
    category: "Meguin",
    price: 520,
    img: "../../images/Meguin_Images/10W40(1L).jpg",
    desc: `Premium low-friction motor oil. Its optimized combination of high-tech fluids, modern additive technology and synthetic components allows it to be used year-round in gasoline and diesel engines with and without turbochargers. Improves engine performance, reduces friction and wear and lowers fuel consumption.`,
  },
  {
    id: 5,
    title: "10W-40(4L)",
    category: "Meguin",
    price: 1770,
    img: "../../images/Meguin_Images/10W40(4L).jpg",
    desc: `Premium low-friction motor oil. Its optimized combination of high-tech fluids, modern additive technology and synthetic components allows it to be used year-round in gasoline and diesel engines with and without turbochargers. Improves engine performance, reduces friction and wear and lowers fuel.`,
  },
  {
    id: 6,
    title: "15W-40(1L)",
    category: "Meguin",
    price: 450,
    img: "../../images/Meguin_Images/15W40(1L).jpg",
    desc: `Multigrade oil of a high quality level. Suitable for year-round use. For all non-turbocharged, fast-running diesel and gasoline engines for which a multigrade oil compliant with API SF/CF is specified. Its package of additives ensures wear protection and engine cleanliness, among other benefits.`,
  },
  {
    id: 7,
    title: "15W-40(4L)",
    category: "Meguin",
    price: 1580,
    img: "../../images/Meguin_Images/15W40(4L).jpg",
    desc: `Multigrade oil of a high quality level. Suitable for year-round use. For all non-turbocharged, fast-running diesel and gasoline engines for which a multigrade oil compliant with API SF/CF is specified. Its package of additives ensures wear protection and engine cleanliness, among other benefits. Ideally suited for passenger cars (youngtimers), light commercial vehicles and old construction and agricultural machinery.`,
  },
  {
    id: 8,
    title: "Gear Oil 75W-90",
    category: "Meguin",
    price: 1490,
    img: "../../images/Meguin_Images/75W90.jpg",
    desc: `Fully synthetic multi-grade gearbox oil with anti-corrosion and high pressure properties for low and high temperatures. Reduction of friction helps reduce fuel consumption. Multi-purpose gearbox oil with a wide range of uses in vehicle gearboxes, in particular manual transmissions. At low temperatures it eliminates gear shifting problems and noise development in manual transmissions.`,
  },
  {
    id: 9,
    title: "ATF-Smooth",
    category: "Meguin",
    price: 1770,
    img: "../../images/Meguin_Images/ATF-Smooth.jpg",
    desc: `Automatic transmission oil based on high quality synthetic base oils combined with the latest additive technology to meet the requirements on the new generation of Mercedes-Benz NAT 2 passenger car automatic transmissions up to 7-speed automatic. Megol Getriebeoel ATF Smooth is an excellent problem solver with shifting problems.`,
  },
  {
    id: 10,
    title: "CVT-ATF Oil",
    category: "Meguin",
    price: 1450,
    img: "../../images/Meguin_Images/CVT-ATF-Oil.jpg",
    desc: `High-performance automatic gearbox oil specially formulated to be used in the new CVT transmission generation. The basis of selected base oils and special additives offers the best possible protection against foaming, necessary in CVT transmissions. It also features a good ageing and oxidation stability.`,
  },
  {
    id: 11,
    title: "Injection Cleaner",
    category: "Meguin",
    price: 399,
    img: "../../images/Meguin_Images/Injection-Cleaner.jpg",
    desc: `Highly effective combination of active agents for cleaning and protection. This product is formulated in accordance with the latest standard of fuel and additive technology and meets the requirements of today’s engines, fuels and running conditions. It is suitable for all gasoline fuel injection systems such as K-; KE- and L- Jetronic systems, etc.`,
  },
  {
    id: 12,
    title: "Radiator Cleaner",
    category: "Meguin",
    price: 399,
    img: "../../images/Meguin_Images/Radiator-Cleaner.jpg",
    desc: `A concentrate specially developed for cooling systems in general but particularly those in motor vehicles. Dissolves contaminations of limy and oil containing in radiators, heating systems, pipes and in engines. A modern formula that contains chelating agents with active cleaning agents. Suitable for all cooling water systems in motor vehicles, buses and commercial vehicles.`,
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
