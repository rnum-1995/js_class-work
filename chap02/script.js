// 行コメント
/* 
ブッロクコメント（alt + shift + a）
改行してもコメント
*/

// 文字列型（String）
console.log("Hello World!");
console.log('Hello' + ' ' + 'World' + '!!');
console.log('Hello \nWorld');

// 数値型（Number）
console.log(100);
console.log('100');

// 算術演算子
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);

console.log('3' + '2');
console.log('3' + 2);
// Not a Number
console.log('Hello' - 'World');

// ダイアログボックス
// alert('Comming soon...');
// confirm('画面を閉じてよろしいですか？');
// console.log(prompt('注文数を入力してください'));

// 変数
let name;   //変数の宣言（空の箱を用意する）
name = 'Taro';  //代入
console.log(name);

let time = 60;  //変数宣言＋代入を同時に行う
console.log(time);
time = time * 60;   //再代入
console.log(time);