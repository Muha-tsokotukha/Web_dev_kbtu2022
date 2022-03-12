export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  amazon_link: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    img: "https://m.media-amazon.com/images/I/71bfERiBXSL._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/TracFone-iPhone-Prepaid-Smartphone-Locked/dp/B08WJNJQYW/ref=sr_1_1?crid=11SVNB8JBCSG2&keywords=iphone+xr&qid=1647084646&sprefix=iphone+xr+ca%2Caps%2C366&sr=8-1"
  },
  {
    id: 2,
    name: 'Phone Mini A52',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img: "https://m.media-amazon.com/images/I/71ei4H2B0-L._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/Samsung-Galaxy-A52s-5G-Unlocked/dp/B09GRGVMBB/ref=sr_1_17?crid=5DXC994T3AZ6&keywords=samsung&qid=1647084752&sprefix=sams%2Caps%2C616&sr=8-17"
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Apple iPhone 12 Pro Max',
    img: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_1?crid=KHMHIKAWRF58&keywords=iphone+12+pro&qid=1647084805&sprefix=iphone+12+pr%2Caps%2C343&sr=8-1"
  },
  {
    id: 4,
    name: 'Samsung Galaxy S20',
    price: 700,
    description: 'FE 5G (128GB, 6GB) 6.5" AMOLED, Snapdragon 865, IP68 Water Resistant',
    img: "https://m.media-amazon.com/images/I/514ByLfO+oL._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/Samsung-Factory-Unlocked-Smartphone-Pro-Grade/dp/B08FYTSXGQ/ref=sr_1_1?crid=2H7CEE2SM5PZQ&keywords=samsung+galaxy+s20&qid=1647085003&sprefix=samsung+galaxy+s22%2Caps%2C350&sr=8-1"
  },
  {
    id: 5,
    name: 'Samsung galaxy S22 ',
    price: 999,
    description: 'long battery life, bright display',
    img: "https://m.media-amazon.com/images/I/81Ulnpn3ZpL._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/Samsung-Snapdragon-Resistant-Unlocked-International/dp/B09PLNBG4H/ref=sr_1_5?crid=1UH9CU0G7W8H&keywords=samsung+galaxy+s22&qid=1647084971&sprefix=samsung+galaxy+s22%2Caps%2C362&sr=8-5"
  },
  {
    id: 6,
    name: 'Xiaomi 11T',
    price: 432,
    description: '108mp tripple camera, NFC dual sim',
    img: "https://m.media-amazon.com/images/I/51Wr13eabnL._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/Xiaomi-11T-Compatible-Unlocked-Meteorite/dp/B09JX9HG77/ref=sr_1_1?crid=2U8K4BQZB0EWN&keywords=xiaomi+11t&qid=1647085028&sprefix=xiaomi+1%2Caps%2C283&sr=8-1"
  },
  {
    id: 7,
    name: 'Xiaomi redmi 9A',
    price: 299,
    description: '2Gb + 32 gb',
    img: "https://m.media-amazon.com/images/I/81oPj2JzHDL._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/Xiaomi-Display-Unlocked-Global-Version/dp/B08CGXVPXW/ref=sr_1_1?crid=G5H4WN31MXOQ&keywords=xiaomi+redmi+9a&qid=1647085051&sprefix=xiaomi+redmi+%2Caps%2C309&sr=8-1"
  },
  {
    id: 8,
    name: 'Phone Standard',
    price: 1000,
    description: 'Apple iPhone 12 Pro Max',
    img: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_1?crid=KHMHIKAWRF58&keywords=iphone+12+pro&qid=1647084805&sprefix=iphone+12+pr%2Caps%2C343&sr=8-1"
  },
  {
    id: 9,
    name: 'One plus nord200',
    price: 800,
    description: '5G Enabled (5G service only available on T-Mobile and Google Fi)',
    img: "https://m.media-amazon.com/images/I/71DCZOdq92S._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/OnePlus-Unlocked-Android-Smartphone-Charging/dp/B07XWGWPH5/ref=sr_1_1?crid=1P2VKRCR5ET7H&keywords=oneplus+nord+200&qid=1647085115&sprefix=oneplus+nord+20%2Caps%2C273&sr=8-1"
  },
  {
    id: 10,
    name: 'One plus nord100',
    price: 500,
    description: '120Hz Fluid Display, Hasselblad Triple Camera, 65W Ultra Fast Charge',
    img: "https://m.media-amazon.com/images/I/41OGxSEvX+S._AC_UY218_.jpg",
    amazon_link : "https://www.amazon.com/OnePlus-Unlocked-Smartphone-Hasselblad-Wireless/dp/B08Y727NMK/ref=sr_1_2?crid=TODOI6APATYZ&keywords=oneplus&qid=1647084105&sprefix=one%2Caps%2C445&sr=8-2&th=1"
  },
  

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/