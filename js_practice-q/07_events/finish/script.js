// 練習問題 07: イベントハンドル (解答)

// 1. HTMLから id="btn" の要素(カウントアップボタン)を取得し定数 btn に代入してください
const btn = document.getElementById('btn');

// 2. HTMLから id="count-text" の要素(回数表示)を取得し定数 countText に代入してください
const countText = document.getElementById('count-text');

// 3. 回数を保持する変数 count を定義し、0 を代入してください
let count = 0;

// 4. ボタン(btn)がクリック(click)された時のイベントリスナーを設定してください
//    イベントリスナーの処理内容:
//    - 変数 count に 1 を足す
//    - span要素(countText)のテキスト(textContent)を count の値に書き換える
btn.addEventListener('click', function () {
  count = count + 1; // または count++
  countText.textContent = count;
});
