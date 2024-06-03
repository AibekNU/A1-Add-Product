const ITEMS = [
  {
    img: "Tshirt_noun.jpg",
    title: "Tshirt",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 100,
  },
  {
    img: "Tshirt_noun.jpg",
    title: "Tshirt",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 100,
  },
  {
    img: "Tshirt_noun.jpg",
    title: "Tshirt",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 100,
  },
  {
    img: "Tshirt_noun.jpg",
    title: "Tshirt",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 100,
  },
  {
    img: "Tshirt_noun.jpg",
    title: "Tshirt",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 100,
  },
  {
    img: "Tshirt_noun.jpg",
    title: "Tshirt",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 100,
  },
  {
    img: "Tshirt_noun.jpg",
    title: "Tshirt",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 100,
  },
  {
    img: "Tshirt_noun.jpg",
    title: "Tshirt",
    descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 100,
  },
];


const allBoxx = document.querySelector(".all__boxx");

ITEMS.forEach((item) => {
    const tovar = document.createElement('div');
    tovar.classList.add("box1");
    tovar.innerHTML = `
        <img src="${item.img}" alt="">
        <h3>${item.title}</h3>
        <p>${item.descrip}</p>
        <h4>Price: $${item.price}</h4>
        <button>Add</button>
    `;
    allBoxx.appendChild(tovar);
});
