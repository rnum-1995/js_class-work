// [課題] js/scores.js から scores をインポートしてください (Default Import)
import scores from "./js/scores.js";
console.log(scores);

// [課題] js/math.js から calculateAverage をインポートしてください (Named Import)
import { calculateTotal, calculateAverage } from "./js/math.js";

calculateTotal();
calculateAverage();

// DOM要素の取得
const tableBody = document.getElementById("score-table-body");
const averageScoreElement = document.getElementById("average-score");

// [課題] scores を使ってテーブルに行を追加してください (forEach)
// 60点以上なら「合格」(bg-success)、未満なら「不合格」(bg-danger) のバッジを表示します


// [課題] calculateAverage を使って平均点を計算し、表示してください

