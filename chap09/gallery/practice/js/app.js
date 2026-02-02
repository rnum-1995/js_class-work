//アルバムデータの作成
let album = [
    { src: 'img/1.jpg', msg: '参道の緑が気持ちいい' },
    { src: 'img/2.jpg', msg: '階段はきつかった' },
    { src: 'img/3.jpg', msg: '高尾山薬王院！' },
    { src: 'img/4.jpg', msg: '帰りはロープウェイでスイスイ' },
    { src: 'img/5.jpg', msg: '〆のお蕎麦です' }
];

//最初のデータを表示しておく
let mainImage = document.createElement('img');  //imgタグ要素を作成
mainImage.setAttribute('src', album[0].src);    //画像ファイルのパス指定
mainImage.setAttribute('alt', album[0].msg);    //代替テキストを指定

let mainMsg = document.createElement('p');  //pタグ要素を作成
mainMsg.innerText = mainImage.alt;  //テキストを指定

let mainFlame = document.querySelector('#gallery .main');   //親要素(ID:gallery)の子要素(class:main)を取得
mainFlame.insertBefore(mainImage, null);    //取得した要素の末尾に挿入したいので「null」を指定
mainFlame.insertBefore(mainMsg, null);  //取得した要素の末尾に要素を追加

//サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb'); //親要素(ID:gallery)の子要素(class:thumb)を取得
for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img'); //imgタグ要素を作成
    thumbImage.setAttribute('src', album[i].src);   //画像ファイルのパス指定
    thumbImage.setAttribute('alt', album[i].msg);   //代替テキストを指定
    thumbFlame.insertBefore(thumbImage, null);  //取得した要素の末尾に要素を追加
}

//クリックした画像をメインにする
thumbFlame.addEventListener('click', (event) => {
    if (event.target.src) { //画像の部分をクリックしたら画像を入れ替えるための「if」
        mainImage.src = event.target.src;
        mainImage.alt = event.target.alt;
        mainMsg.innerText = event.target.alt;
    }
});