// BMI計算 改修版
/*  
    以下の機能を追加してください。
    1.BMIの値と一緒に肥満度を表示してください。
    18.5未満: やせすぎ
    18.5以上25未満: ふつう
    25以上: ひまん
*/

// 身長と体重を用意する
let weight = prompt('BMIを測定します。まずはあなたの体重（kg）を入力してください');
weight = parseFloat(weight); //数値型に変換
let height = prompt('BMIを測定します。次にあなたの身長（cm）を入力してください');
height = parseFloat(height); //数値型に変換
height = height / 100;

let bmi = weight / (height * height);
bmi = Math.round(bmi * 100) / 100;
/*
・パターン1
if (bmi >= 25) {
    level = 'ひまん';
} else if (bmi >= 18.5) {
    level = 'ふつう';
} else {
    level = 'やせすぎ';
}
*/

/*
2.
肥満度を判定する関数 judgeLevel() 関数を定義し、定義した関数を使って肥満度を表示するよう変更してください。
*/
function judgeLevel(bmi) {
    let level = '';
    if (bmi >= 25) {
        level = 'ひまん';
    } else if (bmi >= 18.5) {
        level = 'ふつう';
    } else {
        level = 'やせすぎ';
    }
    return level;
}

let message = 'あなたのBMIは「' + bmi + '」です。\nあなたの肥満度は「' + judgeLevel(bmi) + '」です。'

alert(message);


