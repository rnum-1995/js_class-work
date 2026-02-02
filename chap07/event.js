let form = document.getElementById('form');
let button = document.getElementById('button');
console.log(close);

//イベントを登録したい要素.addEventListener('イベントの種類','イベントが発生したときに実行したい処理が書いてある「関数」')；
button.addEventListener('click', (event) => {
    // form要素のdisplayプロパティをblockに変更
    // form.style.display = 'block';
    // console.log(event.target.textContent);
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

// フォームを閉じる
// let closeButton = document.getElementById('close');
// closeButton.addEventListener('click', () => {
//     form.style.display = 'none';
// });


//テキストエリアを取得
let textarea = document.getElementById('textarea');

//文字数制限
let maxTextNum = parseInt(textarea.getAttribute('maxlength'));

//要素の追加
let textMessage = document.createElement('div');
let parent = textarea.parentElement;    //textareaの親要素のp要素を取得
parent.insertBefore(textMessage, textarea);

//textareaでキーボードが入力されたとき
textarea.addEventListener('keyup', (event) => {
    // console.log(textarea.ariaValueMax.length);
    let currentTextNum = textarea.value.length;
    textMessage.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」文字入力できます。</p>'
});