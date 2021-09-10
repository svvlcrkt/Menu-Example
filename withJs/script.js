// If we want to assign buttons with dynamically, how can we do this?
// get only unique categories - HARDEST ONE

// unique categories means that we don't want to see all 10 categories, we want to see only 4 category names so we should reduce categories.

// iterate over categories return buttons
// make sure to select buttons when they are available

//items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
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
  {

    //if we add new item later, then item will be assign automatically
    id:10,
    title:"steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id:11,
    title:"spring soup",
    category: "chefs-advice",
    price: 10,
    img: "./images/item-11.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium qui minima laborum quam fugiat dignissimos tenetur hic, aperiam cum.`

  },
];

// const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');
//(***) 
$(document).ready(function(){
  displayMenuItems(menu);  
  displayMenuButtons();
})

function displayMenuItems(menuItems){

  let displayMenu = menuItems.map(function(item){
    //item is a parameter
    //map() method is used to iterate over an array 
    //and calling function on every element of array.
    // console.log(item);
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>  
            <p class="item-text">
                ${item.desc}
            </p>  
        </div>
    </article>`;
  });
// the join method creates and returns a new string by 
// concatenating all of the elements in an array
//if we can not add '' or " " in join method, then "," is between articles.
displayMenu = displayMenu.join("");
// console.log(displayMenu);
//(***) 
$('.section-center').html(displayMenu);

//jquery text method sets or returns text content of selected elements, 
//but html method sets or returns content of selected elements.

}

function displayMenuButtons(){

  // related to unique categories
  // const categories = menu.map(function(item){
  //   return item.category;
  // }) 
  // if we write in this way, then function returns 10 categories. But we don't want this.
  // Let's use reduce function instead of map.
  //reduce has 2 parameters; callback function and initial value.
  const categories = menu.reduce(function(values, item){
    //item; items in the menu and values; is an array (acc)
    console.log(item);
    console.log(values);
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },['all']);
  // ['all'] is an initial value.
  // console.log(categories);
  // this code shows 10 categories but we want to see unique categories 
  // related to unique categories
  const categoryBtns = categories.map(function(category){
    return `<button type="button" 
    class="filter-btn" 
    data-id=${category}>${category}</button>`
  }).join("");
  //why can we write in this way?
  //we wrote const, so we can not reassign categoryBtns.

  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');

  // filter items
filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    console.log(e.target);
    const category = e.currentTarget.dataset.id;
    // The JavaScript filter array function is used to 
    // filter an array based on specified criteria. After 
    // filtering it returns an array with the values that 
    // pass the filter.
    console.log(menu);
    const menuCategory = menu.filter(function(menuItem){  
      console.log(menuItem); //menuItem is menu
      // console.log(menuItem.category);
      if(menuItem.category === category){ //get all items from the menu that match the id of the button I clicked
        return menuItem;  
      }
    });
    // console.log(menuCategory);
    if(category === 'all'){  //if category all, then function displays all items.
      displayMenuItems(menu);
    }
    else{  //if category is breakfast, lunch or shakes, then function displays same ids items
      displayMenuItems(menuCategory);
    }
  })
})
  
}

