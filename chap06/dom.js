// console.log('hello');

// ★id = 'practice'のdiv要素の中のテキストを「れんしゅう」に書き換える

// 1-1.id = 'practice'のdiv要素をJavaScriptで取得する
let practice = document.getElementById('practice');   //id属性の値を手掛かりに要素取得するメソッド
console.log(practice);

// 1-2.取得した要素を操作する
practice.innerHTML = '<h1>れんしゅう</h1>';
// practice.textContent = '<h1>れんしゅう</h1>';
practice.style.backgroundColor = '#999';
practice.style.fontSize = '30px';
practice.style.color = '#fff'
practice.style.textAlign = 'center';
practice.style.borderBottom = '5px solid red'

//JSで要素を生成する
let first = document.createElement('div');  //要素の生成
//element.setAttribute('属性名','属性値')
first.setAttribute('id', 'first');   //属性の追加
first.innerHTML = ' <p>要素を追加</p>';
practice.append(first); //append()...要素の最後尾に追加

let second = document.createElement('div');
second.setAttribute('id', 'second');
second.innerHTML = '<p>さらに要素を追加</p>';
console.log(second);
// practice.append(second);
practice.insertBefore(second, first);   //insertBefore(追加する要素、どの要素の前に入れれるか)...特定の要素の前に追加


//要素の削除 
// firstの親要素を探す
let parent = first.parentElement;
console.log(parent);
parent.removeChild(first);


// 2-1.id属性以外を手掛かりに要素を取得
let listItem = document.querySelector('.list__item:nth-child(2)');  //CSSのセレクタを手掛かりに要素を取得
console.log(listItem);

let listItemAll = document.querySelectorAll('.list__item');  //CSSのセレクタを手掛かりに要素を取得(マッチしたすべての要素)
console.log(listItemAll);
for (let i = 0; i < listItemAll.length; i++) {
    console.log(listItemAll[i]);
    listItemAll[i].textContent = 'アイテム' + (i + 1);
}


// ul.listに４番目のli.list__itemを追加
// TODO
// 1.ul.list要素を取得
const list = document.querySelector('.list');

//2.li要素を生成
const liElm = document.createElement('li');

//3.li要素にclass属性と属性値list__itemをセット
liElm.setAttribute('class', 'list__item');

//4.li要素のコンテンツに「アイテム4」をセット
liElm.textContent = 'アイテム4';

//5.ul.listの最後尾に生成したli要素を追加
list.append(liElm);

// 簡単な方法
list.innerHTML += '<li class="list__item">アイテム5</li>';