// 練習問題 02: 条件分岐

let score = parseInt(prompt('点数を入力してください'));

// score は文字列型として取得されます。数値型に変換してから条件分岐を行ってください。
// 以下に条件分岐(if文)を記述してください
// 80点以上: "優"
// 70点以上 80点未満: "良"
// 60点以上 70点未満: "可"
// 60点未満: "不可"

let grade = '';

// if (score >= 80) {
//     grade = '優';
// } else if (score >= 70) {
//     grade = '良';
// } else if (score >= 60) {
//     grade = '可';
// } else {
//     grade = '不可';
// }

// console.log(grade);


if (score >= 80) {
    grade = '優'
} else if (score >= 70) {
    grade = '良'
} else if (score >= 60) {
    grade = '可'
} else {
    grade = '不可'
}

console.log(grade);