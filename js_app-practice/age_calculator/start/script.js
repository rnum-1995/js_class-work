// セレクトボックスの要素を取得
const yearSelect = document.getElementById('year');
const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const btnCalc = document.getElementById('btn-calc');
const btnReset = document.getElementById('btn-reset');

// 結果表示エリア
const ageResult = document.getElementById('result-age');
const countdownResult = document.getElementById('result-countdown');

let timerId = null; // タイマーID管理用

// 初期化処理
function init() {
  generateYearMonthOptions();

  // イベントリスナーの設定
  // 年・月が変わったら日を更新する
  yearSelect.addEventListener('change', updateDayOptions);
  monthSelect.addEventListener('change', updateDayOptions);

  // 計算ボタン
  btnCalc.addEventListener('click', () => {
    calculateAge();
    // 既存のタイマーがあればクリアして、新しいカウントダウンを開始
    if (timerId) clearInterval(timerId);
    updateCountdown();
    timerId = setInterval(updateCountdown, 1000);
  });
}

//リセットボタン
btnReset.style.background = 'orange';
btnReset.style.marginTop = '10px';
function resetAge() {
  btnReset.addEventListener('click', () => {

  });
}


/**
 * 年と月のセレクトボックスを生成する
 */
function generateYearMonthOptions() {
  // TODO: 年（1900〜現在）と月（1〜12）のoptionタグを生成してS追加する
  // ヒント: document.createElement('option'), appendChild, for文
  let now = new Date();
  //年のoption要素を生成＆追加
  for (let i = 1900; i <= now.getFullYear(); i++) {
    let optionElm = document.createElement('option');
    optionElm.textContent = i;
    optionElm.setAttribute('value', i);
    if (i === 1990) {
      optionElm.setAttribute('selected', true);
    }
    yearSelect.append(optionElm);
  }

  //月のoption要素を生成＆追加
  for (let i = 1; i <= 12; i++) {
    let optionElm = document.createElement('option');
    optionElm.textContent = i;
    optionElm.setAttribute('value', i);
    monthSelect.append(optionElm);
  }
  // 日の選択肢も初期化しておく（とりあえず1〜31日などで）
  updateDayOptions();
}


/**
 * 選択された年・月に応じて日のセレクトボックスを更新する
 */
function updateDayOptions() {
  // 選択されている年と月を取得
  // まだ選択されていない場合(valueが空)は、適当なデフォルト値(現在の年、1月など)を使うか、
  // または日を31日で固定して作るなどの対応をする

  // TODO: その月の末日を取得する
  // ヒント: new Date(year, month, 0).getDate()

  // TODO: daySelectの中身をクリア(innerHTML = "")して、末日までのoptionを再生成する
  daySelect.innerHTML = '<option value="" selected disabled>日</option>';
  let selectedYear = yearSelect.value;
  let selectedMonth = monthSelect.value;
  let endOfMonth = new Date(selectedYear, selectedMonth, 0).getDate();
  // console.log(selectedYear, selectedYear, endOfMonth);

  for (let i = 1; i <= endOfMonth; i++) {
    let optionElm = document.createElement('option');
    optionElm.textContent = i;
    optionElm.setAttribute('value', i);
    daySelect.append(optionElm);
  }
}


/**
 * 年齢を計算して表示する
 */
function calculateAge() {
  // TODO: 年齢計算ロジック
  // 1. セレクトボックスの値から入力された生年月日(Date)を作成
  let selectedYear = parseInt(yearSelect.value);
  let selectedMonth = parseInt(monthSelect.value) - 1; //インデックスが取得されるため「-1」が必要
  let selectedDate = parseInt(daySelect.value);
  //誕生日オブジェクトを生成
  let birthday = new Date(selectedYear, selectedMonth, selectedDate);

  // 2. 現在日時(Date)を取得
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();

  // 3. 単純な「年」の引き算だけでなく、誕生日が来ていない場合の補正を行う
  let age = year - birthday.getFullYear();
  let m = month - (birthday.getMonth() + 1); //インデックスが取得できるため+1
  let d = date - birthday.getDate();
  if (0 > m || (m === 0 && 0 > d)) {
    age--;
  }

  // 4. 結果を #result-age に表示
  ageResult.textContent = age + '歳';
}


/**
 * 次の誕生日までのカウントダウンを表示する
 */
function updateCountdown() {
  // TODO: カウントダウンロジック
  // 1. 次の誕生日を求める
  //    - 今年の誕生日がすでに過ぎているか判定
  //    - 過ぎていれば「来年の誕生日」、まだなら「今年の誕生日」をターゲットにする
  //誕生日のオブジェクトを作成
  let selectedYear = parseInt(yearSelect.value);
  let selectedMonth = parseInt(monthSelect.value) - 1;
  let selectedDate = parseInt(daySelect.value);
  let birthday = new Date(selectedYear, selectedMonth, selectedDate);

  //今日のオブジェクトを作成
  let now = new Date();

  //今年の誕生日オブジェクトを作成
  let nextBirthday = new Date(now.getFullYear(), birthday.getHours(), birthday.getDate());
  if (now > nextBirthday) {
    nextBirthday = new Date(now.getFullYear() + 1, birthday.getHours(), birthday.getDate());
  }

  // 2. (次の誕生日 - 現在日時) でミリ秒の差分を計算
  let diff = Math.floor((nextBirthday - now)) / 1000;

  // 3. ミリ秒を 日・時・分・秒 に変換
  let s = Math.floor(diff % 60);  //60で割ると分が算出されるためその余りが秒
  let m = Math.floor((diff / 60) % 60);
  let h = Math.floor((diff / 60 / 60) % 24);
  let d = Math.floor(diff / 60 / 60 / 24);

  // 4. #result-countdown に表示
  // countdownResult.textContent = d + '日' + h + '時間' + m + '分' + s + '秒';
  //テンプレートリテラルでの書き方
  countdownResult.textContent = `${d}日 ${h}時間 ${m}分 ${s}秒`;
}

// アプリ実行
init();
