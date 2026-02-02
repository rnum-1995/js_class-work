// 配列を作成
let drink = ['コーラ', 'オレンジジュース', 'ウーロン茶'];

console.log(drink);

// オレンジジュースだけコンソールに表示
console.log(drink[1]);

//配列の長さ（配列に入っているアイテムの数）をコンソールに表示
console.log(drink.length);

// オレンジジュースをアップルジュースに変更
drink[1] = 'アップルジュース';

//インデックス3の部屋にジャスミンティーを追加
drink[3] = 'ジャスミンティー'

//インデックス10の部屋に牛乳を追加
drink[4] = '牛乳'
console.log(drink);


//for文を使ってdrink配列のアイテムをすべて表示
for (let i = 0; i < drink.length; i++) {
    console.log(drink[i]);
} 
