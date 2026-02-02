// ==========================================
// ES6+ 演習問題
// ==========================================

// 1. 基礎構文
// ------------------------------------------

// 1-1. テンプレートリテラル
// 変数 name と age を宣言し、テンプレートリテラルを使って
// 「私の名前は〇〇です。〇〇歳です。」という文字列をコンソールと画面(#ex-1-1)に出力してください。
const yamada = "Yamada";
const age = 25;

// [ここにコードを書く]
const ans1_1 = document.getElementById('ex-1-1');
ans1_1.innerText = `私の名前は${yamada}です。${age}歳です。`;


// 1-2. アロー関数
// 関数 double をアロー関数で記述し、引数の数値を2倍にして返してください。
// 結果をコンソールと画面(#ex-1-2)に出力してください。

// [ここにコードを書く]
const ans1_2 = document.getElementById('ex-1-2');
const double = (x) => x * 2;
ans1_2.innerText = double(2);

// 1-3. アロー関数と this
// 以下のオブジェクト person を完成させ、
// greet メソッド内で setTimeout を使い、1秒後に "Hello, [name]" とコンソールに出力してください。
// ※画面出力は不要です（コンソールのみで確認）
const person = {
  name: "Suzuki",
  greet: function () {
    // [ここにコードを書く]
    setTimeout(() => { console.log(`Hello, ${this.name}`) }, 1000)
  }
};
person.greet();

// 2. データ操作
// ------------------------------------------

// 2-1. 分割代入
// 以下のオブジェクト user から name と email を分割代入で取り出し、
// コンソールと画面(#ex-2-1)に出力してください。
const user = {
  id: 1,
  name: "Suzuki",
  email: "suzuki@example.com",
  age: 30
};

// [ここにコードを書く]
const ans2_1 = document.getElementById('ex-2-1');
const { name, email } = user;
console.log(name, email);
ans2_1.innerHTML = `${name},${email}`;


// 2-2. スプレッド構文
// 以下の配列 classA, classB を結合し、さらに "Takeda" を追加した
// 新しい配列 allStudents を作成し、コンソールと画面(#ex-2-2)に出力してください。
const classA = ["Tanaka", "Sato"];
const classB = ["Suzuki", "Honda"];

// [ここにコードを書く]
const allStudents = [...classA, ...classB, "Takeda"];
console.log(allStudents);
const ans2_2 = document.getElementById('ex-2-2');
allStudents.forEach(student => ans2_2.innerText += `「${student}」`);



// 3. 配列操作
// ------------------------------------------
const scores = [50, 85, 92, 45, 76];

// 3-1. filter
// 80点以上の点数だけを集めた配列 highScores を作成し、
// コンソールと画面(#ex-3-1)に出力してください。

// [ここにコードを書く]
const highScores = scores.filter(v => v >= 80);
console.log(highScores);
const ans3_1 = document.getElementById('ex-3-1');
highScores.forEach(d => { ans3_1.innerText += d + ', ' });



// 3-2. map
// 全員の点数に +5点 した新しい配列 adjustedScores を作成し、
// コンソールと画面(#ex-3-2)に出力してください。

// [ここにコードを書く]
const adjustedScores = scores.map(v => v + 5);
console.log(adjustedScores);
const ans3_2 = document.getElementById('ex-3-2');
adjustedScores.forEach(d => { ans3_2.innerText += d + ', ' });


// 3-3. find
// 以下の users 配列から、IDが2のユーザーを見つけ出し、
// その名前をコンソールと画面(#ex-3-3)に出力してください。
const usersList = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];

// [ここにコードを書く]
const user_2 = usersList.find(u => u.id === 2);
console.log(user_2.name);
const ans3_3 = document.getElementById('ex-3-3');
ans3_3.innerText = user_2.name;

// 4. 総合演習
// ------------------------------------------
const products = [
  { id: 1, name: "NoteBook", price: 150, category: "Stationery" },
  { id: 2, name: "Pen", price: 80, category: "Stationery" },
  { id: 3, name: "Mouse", price: 2500, category: "Electronics" },
  { id: 4, name: "Keyboard", price: 5000, category: "Electronics" }
];

// 4-1. 抽出 (filter)
// 価格が 1000円以下 の商品だけ抽出した配列 affordableProducts を作成し、
// その商品名をコンソールと画面(#ex-4-1)に出力してください。

// [ここにコードを書く]
const affordableProducts = products.filter(p => p.price <= 1000)
const ans4_1 = document.getElementById('ex-4-1');
affordableProducts.forEach(p => {
  console.log(p.name);
  ans4_1.innerText += `「${p.name}」`;
})


// 4-2. 加工 (map)
// 「商品名: 〇〇円」という文字列の配列 productLabels を作成し、
// コンソールと画面(#ex-4-2)に出力してください。

// [ここにコードを書く]
const productLabels = products.map((p) => `${p.name}: ${p.price.toLocaleString()}円`)
console.log(productLabels);
const ans4_2 = document.getElementById('ex-4-2');

productLabels.forEach((l) => {
  ans4_2.innerText += `「${l}」`;
})

// 4-3. 検索 (find)
// IDが 4 の商品を探し、コンソールと画面(#ex-4-3)に出力してください。

// [ここにコードを書く]
const targetProduct = products.find(p => p.id === 2).name;
console.log(targetProduct);
const ans4_3 = document.getElementById('ex-4-3');
ans4_3.innerText = targetProduct


// 4-4. 合計 (reduce / forEach)
// 全商品の合計金額を計算し、コンソールと画面(#ex-4-4)に出力してください。
// (reduce または forEach を使用)

// [ここにコードを書く]
let total = 0;
products.forEach(p => {
  total += p.price;
});
console.log(total)
const ans4_4 = document.getElementById('ex-4-4');
ans4_4.innerText = total.toLocaleString();
// 4-5. 結合 (Spread Syntax)
// 以下の newProducts を products に追加した新しい配列 allProducts を作成し、
// コンソールと画面(#ex-4-5)テーブルで出力してください。(テンプレートリテラルを使用)
const newProducts = [
  { id: 5, name: "Monitor", price: 12000, category: "Electronics" },
  { id: 6, name: "Eraser", price: 50, category: "Stationery" }
];
const allProducts = [...products, ...newProducts];
console.log(allProducts);
const ans4_5 = document.getElementById('ex-4-5');
let html = '';
allProducts.forEach((product => {
  html += `
  <tr>
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price.toLocaleString('ja-JP')}</td>
    <td>${product.category}</td>
  </tr>  
  `;
  ans4_5.innerHTML = html;
}))

// [ここにコードを書く]

