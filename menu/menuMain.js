// initial item
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshz wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

// nav buttons
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function(e) {
    const btnToggle = e.currentTarget.parentElement.parentElement;
    btnToggle.classList.toggle('show-nav');
  })
})

// menu

const menuContainer = document.querySelector('.menu-container');
const menuBtnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', function() {
  getDisplayMenu(menu);
  getMenuCategoryBtns();

})

function getDisplayMenu(menuItem) {
  const displayMenu = menuItem.map(function(item) {
    return`<article class="menu">
    <img src=${item.img} class="menu__photo" alt="${item.title}">
    <div class="menu__info">
        <header class="menu__header">
            <h3 class="menu__title">${item.title}</h3>
            <h3 class="menu__price">$${item.price}</h3>
        </header>
        <div class="menu__desc">
            <div class="menu__text">${item.desc}</div>
        </div>
    </div>
</article>`
  }).join('');

  menuContainer.innerHTML = displayMenu;
}

function getMenuCategoryBtns() {
  
  // declaring menu category buttons
  const category = menu.reduce(function(a,b) {
    if(!a.includes(b.category)) {
      a.push(b.category);
    }
    return a;
  }, ['all'])  
  const categoryBtn = category.map(function(item) {
    return `<button class="filter-btn" type="button" data-id="${item}">${item}</button>`
  }).join('');

  menuBtnContainer.innerHTML = categoryBtn;
  
  // menu category buttons
  const displayCategoryBtn = menuBtnContainer.querySelectorAll('.filter-btn');

  displayCategoryBtn.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
      const btnClicked = e.currentTarget.dataset.id;

      const filterCategory = menu.filter(function(item) {
        if(btnClicked === item.category) {
          return item;
        }
      })

      if(btnClicked === 'all') {
        getDisplayMenu(menu);
      } else {
        getDisplayMenu(filterCategory);
      }
    })
  })

}