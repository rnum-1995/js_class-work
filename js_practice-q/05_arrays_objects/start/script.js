// 練習問題 05: 配列とオブジェクト

const products = [
  { name: "りんご", price: 100 },
  { name: "みかん", price: 50 },
  { name: "ぶどう", price: 200 },
];

let totalPrice = 0;

// for文を使用して、products配列の要素を繰り返し取得し、
// 全ての商品のpriceをtotalPriceに加算してください
// ※ forEachやmapなどは使用せず、基本的なfor文を使用してください

for (let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}

console.log("合計金額は " + totalPrice + " 円です");
