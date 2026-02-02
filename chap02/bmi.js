// BMI計算
// 身長と体重を用意する
let weight = prompt('BMIを測定します。まずはあなたの体重(kg)を入力してください。');
weight = parseFloat(weight);    //数値型に変換
let height = prompt('BMIを測定します。まずはあなたの身長(cm)を入力してください。');
height = parseFloat(height);    //数値型に変換
height = height / 100;  //mに変換
let bmi = weight / (height * height);
bmi = Math.round(bmi * 100) / 100;  //小数点を移動させて戻す
// console.log(bmi);

//alert();でBMIを表示
alert('あなたのBMIは「' + bmi + '」です。');

