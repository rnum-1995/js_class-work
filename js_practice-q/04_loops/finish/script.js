// 練習問題 04: 繰り返し (解答)

// for文を使用して、1から30までの繰り返す処理を作成してください
// その中でif文を使い、以下の条件でコンソールに出力してください
// - 3の倍数かつ5の倍数のとき: "FizzBuzz"
// - 3の倍数のとき: "Fizz"
// - 5の倍数のとき: "Buzz"
// - それ以外のとき: 数字

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // i % 15 === 0 でもOK
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
