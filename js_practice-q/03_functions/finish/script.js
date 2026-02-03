// 練習問題 03: 関数 (解答)

// 1. 三角形の面積を計算して戻り値を返す関数 `calculateTriangleArea` を作成してください
function calculateTriangleArea(base, height) {
  return base * height / 2;
}

// 2. 作成した関数を使って、底辺10、高さ5の三角形の面積を計算し、
//    結果を定数 `area` に代入してください
const area = calculateTriangleArea(10, 5);

// 3. コンソールに `area` の値を表示してください
console.log(area);
