
/*
＜while文の書き方＞

while(条件式){
    繰り返す処理；
}
*/

// オリンピックイヤーを表示
let year = 2000;

while (2100 >= year) {
    // 夏季オリンピックと冬季オリンピックの年を出しわける。
    // 例）2000年は夏季オリンピックです。
    if (year % 4 === 0) {
        console.log(year + '年は夏季オリンピックです。')
    } else {
        console.log(year + '年は冬季オリンピックです。')
    }
    // console.log(year);
    year = year + 2;
}
