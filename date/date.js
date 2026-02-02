//Date()の使い方

let now = new Date('2026-02-28');
console.log(now);

// let firstOFYear = new Date('2026-01-01');
let firstOFYear = new Date(2026, 11, 1, 0, 0, 0);
console.log(firstOFYear);


//日付のオブジェクトのメソッド
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hour = now.getHours();  //0~23の数字が返ってくる
let minute = now.getMinutes();
let second = now.getSeconds();
let day = now.getDay(); //0~6の数字が返ってくる

let weekArray = ['日', '月', '火', '水', '木', '金', '土'];
console.log(year, month, date, hour, minute, second, weekArray[day]);

//表示領域を取得
const area = document.getElementById('area');
let str = year + '年' + month + '月' + date + '日(' + weekArray[day] + ')' + hour + '時' + minute + '分' + second + '秒';

area.innerHTML = '<p>' + str + '</p>';

let pElm = document.createElement('p');
pElm.textContent = str;
area.append(pElm);

//練習
//生年月日を使って年齢を計算する
let birthday = new Date('2000-01-28');  //2000年の1月28日のオブジェクトを生成
console.log(birthday, now);
let bYear = birthday.getFullYear();
let bMonth = birthday.getMonth() + 1;
let bDate = birthday.getDate();
let age = year - bYear;
let m = month - bMonth;
let d = date - bDate;
if (0 > m || (m === 0 && 0 > d)) {
    age--;
}
console.log(age + '歳');