// console.log('hello');

/*
if文

if(条件式1){
    ブロック
    条件式1の条件が満たされた時の処理
}else if(条件式2){
    条件式2の条件が満たされた時の処理
}else{
    条件式1、2両方を満たしていないときの処理
}
*/

// 例
// パターン1

// budget = parseInt(budget);
let isHungry = confirm('腹減ってますか？'); //trueかfalseが代入される
//お腹がすいていない人は「退店する」を表示
if (isHungry) {
    // お腹がすいてるときの処理
    let budget = parseInt(prompt('所持金を入力してください。'));
    //budgetが数値じゃないときは「所持金は数値で入力してください」とアラートを表示する 
    console.log(isNaN(budget));
    if (!isNaN(budget)) {
        // 数値の時に処理
        if (budget >= 1500 && isHungry) {
            console.log('ピザを注文します!');
        } else if (!isHungry) {
            console.log('退店します。');
        } else if (budget >= 500) {
            console.log('ポテトを注文します。');
        } else {
            console.log('何も買えません・・・。');
        }
    } else {
        // 数値以外の時の処理
        alert('所持金は数値で入力してください');
    }

} else {
    // お腹がすいていないときの処理
    console.log('退店してください。')
}


// 例2 二種類の等しい「==」「===」（データ型の不一致で結果が変わる）
let num = 1;    //数字型
let str = '1';    //文字型

if (num === str) {
    console.log('等しいです。');
}