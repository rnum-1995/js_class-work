//Q1.
//HTML Q1 の class="msg-area" の中に
// JSを使って「完了しました」と表示させてください
const msgArea = document.querySelector('.msg-area');
msgArea.textContent = '完了しました';


//Q2.
//1.「指定した色に変更される」changeColor関数を定義
// 引数：color
// 戻り値：なし

//2.背景色を「デフォルトの色」にするための変数defaultColorを定義
//3.HTML Q2 のbuttonをクリックした時
// 「赤になるボタン」を押したとき#cc3300
// 「青になるボタン」を押したとき#0099cc
//「元に戻るボタン」を押したとき「デフォルトの色」
//　にそれぞれ切り替わる様にJSを記述してください
const bgArea = document.getElementById('colorArea');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const resetBtn = document.getElementById('reset');
const defaultColor = bgArea.style.backgroundColor;

const changeColor = ((color) => {
    bgArea.style.backgroundColor = color;
    return color;
});

redBtn.addEventListener('click', (event) => {
    changeColor('#cc3300');
});

blueBtn.addEventListener('click', (event) => {
    changeColor('#0099cc');
});

resetBtn.addEventListener('click', (event) => {
    changeColor(defaultColor);
});


//Q3.
//HTML Q3 の ul要素の子要素へ　liを繰り返し処理で3つ追加
//liにはそれぞれ「卵」「砂糖」「醤油」と表示させてください

//1. liを作成
//2. liに配列バリューを入れる
//3. バリュー入りのliをulにいれる
const material = ['卵', '砂糖', '醤油'];
const materialList = document.getElementById('material-list');
material.forEach((value) => {
    let liElm = document.createElement('li');
    liElm.textContent = value;
    materialList.appendChild(liElm);
});


// Q4.
//配列chairs の category が"イス"の商品だけを抜き出して
//その商品のnameを ulの中に li として表示させてください
//liはjsで繰り返し処理を用いて追加してください

const chairs = [
    { id: 1, name: "LC2", category: "イス", price: 605000 },
    { id: 2, name: "マシュマロソファ", category: "ソファ", price: 1199000 },
    { id: 3, name: "ラ・シェーズ", category: "イス", price: 1161600 },
    { id: 4, name: "ボールチェア", category: "イス", price: 1225400 }
];

const chairList = document.querySelector('.chair-list');
const result = chairs.filter(item => item.category === "イス");
result.forEach((item) => {
    let lichair = document.createElement('li');
    lichair.textContent = item.name;
    chairList.appendChild(lichair);
});



//Q5.
// スコアが80点以上の生徒だけ抜き出して
// HTML 05 のclass="overSL"内にリストで表示させてください
// liはjsで繰り返し処理を用いて追加してください

const students = [
    { name: "早川", score: 85 },
    { name: "吉田", score: 72 },
    { name: "姫野", score: 90 },
    { name: "東山", score: 65 }
];

//1. id取得
const studentOverList = document.getElementById('overSL');
//2. filterかける
const scoreFilter = students.filter(student => student.score >= 80);
//3. filterをforeachする
scoreFilter.forEach((student) => {
    //4. liを作成
    const studentLiElm = document.createElement('li');
    //5. liに配列バリューを入れる
    studentLiElm.textContent = student.name;
    //6. liをulにいれる
    studentOverList.appendChild(studentLiElm);
});


//Q6.
// HTML Q6　見出し（th)の順番で、以下配列をテーブルにて表示してください
//テーブルはjsで繰り返し処理を用いて追加してください

const Jsweets = [
    { id: 1, name: "豆大福", price: 200 },
    { id: 2, name: "桜餅", price: 280 },
    { id: 3, name: "おはぎ", price: 250 }
];

//1. tbodyのid取得
const japaneseSweet = document.getElementById('japaneseSweet');

//2. 繰り返し処理で配列を呼び出す
Jsweets.forEach(Jsweet => {
    //3. tr作成
    const sweetTrElm = document.createElement('tr');
    //4 trをtbodyに追加
    japaneseSweet.appendChild(sweetTrElm);
    //5 trのinnerHTMLにtdを入れる
    sweetTrElm.innerHTML = `
    <td>${Jsweet.id}</td>
    <td>${Jsweet.name}</td>
    <td>${Jsweet.price}</td>`;
});


// Q7.
//2倍した結果を HTMLのclass="double-result" に表示する
// showDouble関数を作成してください
// 引数:num
// 戻り値：なし
// 作った関数には25を渡してください

const showDouble = ((num) => {
    //1. id取得
    const doubleResult = document.querySelector('.double-result');
    //2. doubleResultにinnerTextを引数*2
    doubleResult.textContent = num * 2;
});

//関数呼び出し
showDouble(25);



// Q8.
// selectで選択された値を取得して class="selected" に表示させてください

//1. id取得
const kinds = document.getElementById('kinds');
const selected = document.querySelector(".selected");

//2. セレクトボックスの値が変わったらselectedにテキストを挿入
kinds.addEventListener('change', () => {
    selected.innerHTML = kinds.value;
});



// Q9.
// 1.生年月日（文字列）birthdayを引数として受け取り現在の年齢を算出する関数calculateAgeを定義
// 引数：birthday
// 戻り値:age

const ageResult = document.querySelector('.age');

// 2.関数を実行して返ってきた年齢を class="age"に表示してください

const birthday_var = "1995-05-16";

//年齢を算出する関数を定義
const calculateAge = ((birthday) => {
    //1. 今日の日付を取得
    let today = new Date();
    //2. 誕生日の日付を取得
    let birthDate = new Date(birthday);
    //3. 今年の年数から誕生日の年数を引く
    let age = today.getFullYear() - birthDate.getFullYear();
    //4. 今年の月から誕生月を引く
    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDate() - birthDate.getDate();
    if (0 > m || (m === 0 && 0 > d)) {
        age--
    }
    return age;
});

ageResult.innerHTML = calculateAge(birthday_var);




// Q10.
/*
1. animals配列を使って、全ての動物を<ul class="animal-list"></ul>内にリストで表示する
renderAnimals関数を定義してください。
引数: animals
戻り値: なし
※表示例はHTMLファイルのコメントアウトを参照

2. チェックボックスにチェックが入っている場合、weight が500未満の生き物だけが表示されるようにしてください。
チェックが外れたら、再度全ての生き物が表示されるようにしてください
*/

const animals = [
    { name: "シャチ", weight: 3000, live: "知床半島" },
    { name: "イルカ", weight: 150, live: "熊本天草" },
    { name: "クジラ", weight: 25000, live: "小笠原諸島" },
    { name: "スナメリ", weight: 40, live: "瀬戸内海" }
];

// 要素を取得


// 1.全てを表示する関数を定義


//2.チェックボックスにチェックが入っているとき、weightが500未満の生き物だけが表示されるイベントを記述
