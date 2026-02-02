// モジュールのインポート
import scores from "./js/scores.js";
import { calculateAverage } from "./js/math.js";

// DOM要素の取得
const tableBody = document.getElementById("score-table-body");
const averageScoreElement = document.getElementById("average-score");

// 1. 成績リストの表示
scores.forEach(student => {
  // 60点以上で合格、未満で不合格
  const isPass = student.score >= 60;
  const badgeClass = isPass ? "bg-success" : "bg-danger";
  const resultText = isPass ? "合格" : "不合格";

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.score}点</td>
    <td><span class="badge ${badgeClass}">${resultText}</span></td>
  `;
  tableBody.appendChild(tr);
});

// 2. 平均点の計算と表示
const average = calculateAverage(scores);
averageScoreElement.textContent = average;

console.log("Score Modules loaded successfully!");
