
// ==========================================
// ES6+ 演習問題
// ==========================================

// 1. 基礎構文
// ------------------------------------------

// 1-1. テンプレートリテラル
// 変数 name と age を宣言し、テンプレートリテラルを使って
// 「私の名前は〇〇です。〇〇歳です。」という文字列をコンソールに出力してください。
const name = "Yamada";
const age = 25;

// [ここにコードを書く]
let message = `私の名前は${name}です。${age}歳です。`
console.log(message);


// 1-2. アロー関数
// 関数 double をアロー関数で記述し、引数の数値を2倍にして返してください。
// 結果をコンソールに出力してください。

// [ここにコードを書く]
//[従来]
// function double(num) {
//   return num * 2;
// }
// console.log(double(2));
// //[アロー関数]
// const doubleArrow = (num) => {
//   return num * 2;
// }
// console.log(doubleArrow(2));
//[アロー省略記法]
const doubleArrow = num => num * 2;
console.log(doubleArrow(2));


// 1-3. アロー関数と this
// 以下のオブジェクト person を完成させ、
// greet メソッド内で setTimeout を使い、1秒後に "Hello, [name]" とコンソールに出力してください。
const person = {
  name: "Suzuki",
  greet: function () {
    // [ここにコードを書く]
    // setTimeout(function () {
    //   console.log('Hello,' + this.name);
    // }, 1000);

    setTimeout(() => {
      // console.log('Hello,' + this.name);
    }, 1000);
  }
};
person.greet();


// 2. データ操作
// ------------------------------------------

// 2-1. 分割代入
// 以下のオブジェクト user から name と email を分割代入で取り出し、
// コンソールに出力してください。
const user = {
  userId: 1,
  userName: "Tom",
  userEmail: "Tom@example.com",
  userAge: 30
};

// [ここにコードを書く]
//[従来]
// let userName = user.userName;
// let userEmail = user.userEmail;

//[ES6+]:オブジェクトの分割代入(プロパティ名と同じ変数に一気に代入される)
let { userName, userEmail, userAge } = user;
console.log(userName, userEmail, userAge);

// 2-2. スプレッド構文
// 以下の配列 classA, classB を結合し、さらに "Takeda" を追加した
// 新しい配列 allStudents を作成し、コンソールに出力してください。
const classA = ["Tanaka", "Sato"];
const classB = ["Suzuki", "Honda"];

// [ここにコードを書く]
//値渡し
let a = 10;
let b = a;
b += 10;
console.log(a, b);

//参照渡し
let c = [10, 20];
let d = c;
d[0] += 10;
console.log(c, d);

//問題解答
let allStudents = [...classA, ...classB, 'Takeda'];
console.log(allStudents);


// 3. 配列操作
// ------------------------------------------
const scores = [50, 85, 92, 45, 76];

// 3-1. filter
// 80点以上の点数だけを集めた配列 highScores を作成し、
// コンソールに出力してください。

// [ここにコードを書く]
// const hightScores = scores.filter((score) => {
//   return score >= 80;
// });
const hightScores = scores.filter(score => score >= 80);
console.log(hightScores);

// 3-2. map
// 全員の点数に +5点 した新しい配列 adjustedScores を作成し、
// コンソールに出力してください。

// [ここにコードを書く]
const adjustedScores = scores.map(score => score + 5);
console.log('加点後：' + adjustedScores);
console.log('加点前：' + scores);


// 3-3. find
// 以下の users 配列から、IDが2のユーザーを見つけ出し、
// その名前をコンソールに出力してください。
const usersList = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];

// [ここにコードを書く]
console.log(usersList.find(user => user.id === 2).name);

//for文で書いた場合
for (let i = 0; i < usersList.length; i++) {
  if (usersList[i].id === 2) {
    console.log(usersList[i].name);
    break;
  }
}


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
// コンソールと画面(#ex-4-1)に出力してください。

// [ここにコードを書く]



// 4-2. 加工 (map)
// 「商品名: 〇〇円」という文字列の配列 productLabels を作成し、
// コンソールと画面(#ex-4-2)に出力してください。

// [ここにコードを書く]



// 4-3. 検索 (find)
// IDが 4 の商品を探し、コンソールと画面(#ex-4-3)に出力してください。

// [ここにコードを書く]



// 4-4. 合計 (reduce / forEach)
// 全商品の合計金額を計算し、コンソールと画面(#ex-4-4)に出力してください。
// (reduce または forEach を使用)

// [ここにコードを書く]



// 4-5. 結合 (Spread Syntax)
// 以下の newProducts を products に追加した新しい配列 allProducts を作成し、
// コンソールと画面(#ex-4-5)テーブルで出力してください。(テンプレートリテラルを使用)
const newProducts = [
  { id: 5, name: "Monitor", price: 12000, category: "Electronics" },
  { id: 6, name: "Eraser", price: 50, category: "Stationery" }
];

// [ここにコードを書く]

