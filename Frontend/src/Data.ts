type ProductData = {
  id: number;
  img: string;
  name: string;
  price: string;
  info: string;
  toppings: string;
  active: boolean;
};

export const productData: ProductData[] = [
  {
    id: 1,
    img: "/images/cookie-choco-plain.png",
    name: "Chocolate Cookie",
    price: "₦ 1,500",
    info: "order contains a Pack of 4 Chocolate cookies",
    toppings: "none",
    active: false,
  },
  {
    id: 2,
    img: "/images/cupcake-vanila-plain.png",
    name: "Vanilla Cupcake",
    price: "₦ 4,500",
    info: "order contains a Pack of 4 Vanilla cookies",
    toppings: "none",
    active: false,
  },
  {
    id: 3,
    img: "/images/brownie-choco-plain.png",
    name: "Chocolate Brownie",
    price: "₦ 3,500",
    info: "order contains a Slice of Chocolate Fudge brownies",
    toppings: "none",
    active: false,
  },
  {
    id: 4,
    img: "/images/cookie-vanila-chips.png",
    name: "Chocolate Cookie",
    price: "₦ 1,500",
    info: "order contains a pack of 4 Chocolate cookies",
    toppings: "Chocolate-Chips",
    active: false,
  },
  {
    id: 5,
    img: "/images/cupcake-choco-plain.png",
    name: "Chocolate Cupcake",
    price: "₦ 4,500",
    info: "order contains a pack of 4 Chocolate Cupcakes",
    toppings: "none",
    active: false,
  },
  {
    id: 6,
    img: "/images/gummies.png",
    name: "Infused Gummies",
    price: "₦ 4,500",
    info: "order contains a pack of 6 Highly Infused THC Gummies",
    toppings: "none",
    active: false,
  },
  {
    id: 7,
    img: "/images/cake-choco.png",
    name: "Cake Slice",
    price: "₦ 2,500",
    info: "order contains a Slice of Chocolate Cake",
    toppings: "none",
    active: false,
  },
  {
    id: 8,
    img: "/images/cake-vanila.png",
    name: "Cake Slice",
    price: "₦ 2,500",
    info: "order contains a slice of Vanilla Cake",
    toppings: "none",
    active: false,
  },
  {
    id: 9,
    img: "/images/cookie-vanila-m&m.png",
    name: "Vanila Cookie",
    price: "₦ 4,500",
    info: "order contains a pack of 4 Vanilla cookies",
    toppings: "M&Ms",
    active: false,
  },
];
