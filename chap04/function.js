console.log('hello');

/*
・関数の基本
function 関数名(引数1,引数2,引数3....){
    行いたい処理
    return 戻り値;
}
*/

// 挨拶関数の定義
function greet(name = 'ななし') {
    let message = 'こんにちは';
    console.log(message + name + 'さん');
    return;
}

//関数の呼び出し
greet('太郎');
greet();

// 税込み価格を計算する関数
// 引数：商品の価格
// 戻り値：10%の消費税込みの価格
function calcTaxIncludePrice(price) {
    const TAX_RATE = 1.1;    //定数は大文字
    return Math.floor(price * TAX_RATE);
}

// 単価100円の商品の税込み価格を関数を使って計算してコンソールに表示
console.log(calcTaxIncludePrice(100));
console.log(calcTaxIncludePrice(200));


