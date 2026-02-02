/**
 * 合計点を計算する関数
 * @param {Array} scoresStructs 生徒オブジェクトの配列、または点数の配列
 * @returns {number} 合計点
 */
export function calculateTotal(scores) {
  // scoreプロパティを持つオブジェクトの配列か、数値の配列かで分岐（汎用的にするため）
  let total = 0;
  scores.forEach(score => {
    const value = typeof score === 'object' ? score.score : score;
    total += value;
  });
  return total;
}

/**
 * 平均点を計算する関数
 * @param {Array} scores データ配列
 * @returns {number} 平均点 (小数第1位まで)
 */
export function calculateAverage(scores) {
  if (scores.length === 0) return 0;
  const total = calculateTotal(scores);
  const avg = total / scores.length;
  // 小数第2位を四捨五入して第1位まで求める例
  return Math.round(avg * 10) / 10;
}
