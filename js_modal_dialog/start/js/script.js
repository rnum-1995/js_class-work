// メンバーリスト（変更しない）
const members = [
    { image: "hari1.jpg", name: "ラテ", type: "活発で人懐っこい", like: ["とうもろこし", "ゆでたまご"] },
    { image: "hari2.jpg", name: "ミルク", type: "とっても賢い", like: ["小松菜", "コオロギ"] },
    { image: "hari3.jpg", name: "チャイ", type: "ちょっと怖がり", like: ["かぼちゃ", "りんご"] }
];

//listModalを取得してその中身を初期化
const listModal = document.getElementById('listModal');
listModal.innerHTML = '';

// members配列の情報から画像と名前を取得して表示させる
// ※表示例はHTMLファイルのコメントアウトを参照

//・li作成
const listModalLi = document.createElement('li');
//・ulにliを挿入
listModal.appendChild(listModalLi);
//・div作成
const listModalDiv = document.createElement('div');
listModalDiv.className = 'round-thumbnail';
//・divをliに挿入
listModalLi.appendChild(listModalDiv);


// 一覧のそれぞれのボタンが押されたとき、そのハリネズミの詳細データをモーダルにセットして表示する

//ボタンをすべて取得


//　dialogタグを取得


//クリックされたボタンがどのボタンが判別する

        // 詳細の画像・名前・性格をそれぞれの情報で書き換える
        

        //　好きな食べ物をそれぞれの情報で書き換える
        //　好きな食べ物は「⚪︎⚪︎」の形で並べる


        //モーダルを開く


// 閉じるボタンをクリックしたら、モーダルを閉じる
