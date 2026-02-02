// 表示中の年月を保持するオブジェクト
let viewDate = new Date();

// アプリの初期化
function init() {
    updateClock();
    // 1秒ごとにupdateClockを呼び出す
    //第2引数に 1000 (ミリ秒) を指定することで、1秒ごとに時計がカチカチと進むようになります。
    setInterval(updateClock, 1000);

    // 初期表示
    renderCalendar();

    // ボタンのイベント設定
    document.getElementById('prev-month').addEventListener('click', () => {
        // 1ヶ月戻す
        viewDate.setMonth(viewDate.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('next-month').addEventListener('click', () => {
        // 1ヶ月進める
        viewDate.setMonth(viewDate.getMonth() + 1);
        renderCalendar();
    });

    // カレンダーの生成
    const now = new Date();
    generateCalendar(now.getFullYear(), now.getMonth());
}

/**
 * 現在の viewDate に基づいてカレンダーを描画する
 */
function renderCalendar() {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    // タイトルの更新
    document.getElementById('calendar-title').textContent = `${year}年 ${month + 1}月`;

    // 前に作った generateCalendar 関数を呼び出す
    generateCalendar(year, month);
}

/**
 * デジタル時計を更新する関数
 */
function updateClock() {
    const now = new Date();

    // 1. 年・月・日・曜日の取得
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 0始まりなので+1
    const date = now.getDate();
    const dayList = ['日', '月', '火', '水', '木', '金', '土'];
    const day = dayList[now.getDay()];

    const dateString = `${year}年${month}月${date}日 (${day})`;
    document.getElementById('current-date').textContent = dateString;

    // 2. 時・分・秒の取得と2桁埋め (padStart)
    //1分」を「01分」と表示するためのモダンで便利な書き方です。
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = timeString;
}

/**
 * 年と月を指定してカレンダーを生成する関数
 */
function generateCalendar(year, month) {
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay(); // 月初めの曜日 (0-6)
    const lastDate = new Date(year, month + 1, 0).getDate(); // 月末の日付

    let tr = document.createElement('tr');
    calendarBody.appendChild(tr);

    // 1. 月初めの空白セルを追加
    for (let i = 0; i < firstDay; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }

    // 2. 1日から末日までを追加
    for (let date = 1; date <= lastDate; date++) {
        // 現在の「列数」を確認して、土曜日(週の7つ目)を過ぎていたら改行
        if (tr.children.length === 7) {
            tr = document.createElement('tr');
            calendarBody.appendChild(tr);
        }

        const td = document.createElement('td');
        td.textContent = date;

        // 今日の日付を強調（おまけ機能）
        const today = new Date();
        if (year === today.getFullYear() && month === today.getMonth() && date === today.getDate()) {
            td.classList.add('today');
        }

        tr.appendChild(td);
    }
}

// 実行
init();