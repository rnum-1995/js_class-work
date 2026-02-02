// アプリの初期化
function init() {
  updateClock();
  // 1秒ごと（またはそれ以下）にupdateClockを呼び出すタイマーを設定
  // TODO: setIntervalの実装
  setInterval(() => {
    updateClock()
  },);
  // カレンダーの生成
  const now = new Date();
  generateCalendar(now.getFullYear(), now.getMonth());
}

/**
 * デジタル時計を更新する関数
 */
function updateClock() {
  // TODO: 時計更新ロジックの実装
  // 1. new Date() で現在時刻を取得
  const now = new Date();

  // 2. 年・月・日・曜日を取得し、#current-date に表示
  //    (月は0始まり、曜日は数値であることに注意)
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let day = now.getDay();
  let weekArray = ['日', '月', '火', '水', '木', '金', '土'];
  const DateArea = document.getElementById('current-date');
  let toDay = `${year}年 ${month}月 ${date}日 (${weekArray[day]})`
  DateArea.innerHTML = `<p>${toDay}</p>`;
  // 3. 時・分・秒を取得し、2桁埋めをして #current-time に表示
  let nowTime = document.getElementById('current-time');
  nowTime.innerHTML = `${hour} : ${minute} : ${second}`
}

/**
 * 年と月を指定してカレンダーを生成する関数
 * @param {number} year - 西暦
 * @param {number} month - 月 (0:1月 〜 11:12月)
*/
function generateCalendar(year, month) {
  const calendarBody = document.getElementById('calendar-body');
  calendarBody.innerHTML = ''; // クリア

  // TODO: カレンダー生成ロジックの実装
  // ヒント:
  // 1. 月初めの曜日を取得: new Date(year, month, 1).getDay()
  let firstDay = new Date(year, month, 1).getDay();

  // 2. 月末の日付を取得: new Date(year, month + 1, 0).getDate()
  let lastDate = new Date(year, month + 1, 0).getDate();

  // 3. ループを使ってHTMLを組み立てる
  //    - 最初の空白セル (曜日インデックスの分だけ空のtd)
  //    - 1日から末日までのtd
  //    - 土曜日(6)が来たらtrを閉じて新しいtrを開始

  let html = '<tr>';

  for (let i = 0; i < 42; i++) {
    if (i > 0 && i % 7 === 0) html += '</tr><tr>';
    const date = i - firstDay + 1;
    html += `<td>${(date > 0 && date <= lastDate) ? date : ''}</td>`;
    if (date >= lastDate && (i + 1) % 7 === 0) break;
  }
  document.getElementById('calendar-body').innerHTML = html + '</tr>';
}
// 実行
init();

// for (let i = 0; i < firstOfDay; i++) {
//   let trElm = document.createElement('tr');
//   calendarBody.appendChild(trElm);
//   for (let g = 0; g < 7; g++) {
//     let tdElm = document.createElement('td');
//     trElm.appendChild(tdElm);
//     for (let day = 1; day <= lastOfDate; day++) {
//       tdElm.textContent = day;
//     }
//   }
//   console.log(trElm);

// for (let day = 1; day <= lastOfDate; day++) {
//   let tdElm = document.createElement('td');
//   tdElm.textContent = day;
//   // if (lastOfDate % 7 === 0) {
//   //   let trElm = document.createElement('tr');
//   //   trElm.append(tdElm);
//   //   console.log(trElm);
//   // }
