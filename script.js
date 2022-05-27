const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "LOMO CURVO",
      price: 2000,
      colors: [
        {
          code: "#B8555D",
          img: "/img/curvo1.jpg",
        },
        {
          code: "#B84103",
          img: "/img/curvo2.jpg",
        },
        {
            code: "#FF6261",
            img: "/img/curvo3.jpg",
          },
      ],
    },
    
    {
        id: 2,
        title: "CUADERNOS Y AGENDAS CON TAPAS BORDADAS",
        price: 3000,
        colors: [
          {
            code: "#D0A357",
            img: "/img/bordado1.jpg",
          },
          {
            code: "#8DA366",
            img: "/img/bordado2.jpg",
          },
          {
              code: "#CFC5BD",
              img: "/img/bordado3.jpg",
            },
        ],
      },

      {
        id: 3,
        title: "RECETARIOS DE COCINA",
        price: 2000,
        colors: [
          {
            code: "#50698E",
            img: "/img/recetario1.jpg",
          },

          {
            code: "#EDDF40",
            img: "/img/recetario2.jpg",
          },

          {
            code: "#CA5053",
            img: "/img/recetario1.jpg",
          },
        ],
      },

      {
        id: 4,
        title: "ANOTADORES POCKET",
        price: 1500,
        colors: [
          {
            code: "#0B91E4",
            img: "/img/pocket1.jpg",
          },
          {
            code: "#68154E",
            img: "/img/pocket2.jpg",
          },
          {
              code: "#00AC6F",
              img: "/img/pocket3.jpg",
            },
        ],
      },
      
      {
        id: 4,
        title: "ÁLBUMES",
        price: 3000,
        colors: [
          {
            code: "Gryffindor",
            img: "/img/album1.jpg",
          },
          {
            code: "Hufflepuff",
            img: "/img/album2.jpg",
          },
          {
              code: "Ravenclaw",
              img: "/img/album3.jpg",
            },
        ],
      },
  ];


let choosenProduct = products [0]
  
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductInside= document.querySelectorAll(".inside");

menuItems.forEach((item,index) => {
    item.addEventListener("click", () => {
        // cambia la slider
        wrapper.style.transform = `translateX(${-100 * index}vw)`;


        // cambia al elegir el producto

        choosenProduct = products [index]

    // cambiar text 

    currentProductTitle.textContent = choosenProduct.title;

    currentProductPrice.textContent = "$" + choosenProduct.price;

    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => { 
        color.style.backgroundColor = choosenProduct.colors[index].code;
    })

    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
  

  currentProductInside.forEach((inside, index) => {
    inside.addEventListener("click", () => {
      currentProductInside.forEach((inside) => {
        inside.style.backgroundColor = "white";
        inside.style.color = "black";
      });
      inside.style.backgroundColor = "black";
      inside.style.color = "white";
    });
  });


  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
  
  











