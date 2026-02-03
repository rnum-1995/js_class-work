// 練習問題 06: DOM操作 (解答)

const btn = document.getElementById('change-btn');

function changeColor() {
  // 1. id="target-text" の要素を取得して定数 `target` に代入してください
  const target = document.getElementById('target-text');

  // 2. 取得した要素の文字色(style.color)を "red" に変更してください
  target.style.color = "red";

  // 3. 取得した要素のテキスト内容(textContent)を "変更しました！" に書き換えてください
  target.textContent = "変更しました！";
}

// ボタンクリック時に changeColor 関数を実行します
btn.addEventListener('click', changeColor);
