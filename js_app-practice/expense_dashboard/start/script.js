// 家計簿データ（サーバーから取得したと仮定）
const transactions = [
    { id: 1, date: "2024-02-01", item: "給料", amount: 280000, type: "income" },
    { id: 2, date: "2024-02-02", item: "家賃", amount: 85000, type: "expense" },
    { id: 3, date: "2024-02-03", item: "食費", amount: 4500, type: "expense" },
    { id: 4, date: "2024-02-05", item: "光熱費", amount: 12000, type: "expense" },
    { id: 5, date: "2024-02-07", item: "書籍代", amount: 2400, type: "expense" },
    { id: 6, date: "2024-02-08", item: "友人との食事", amount: 5500, type: "expense" },
    { id: 7, date: "2024-02-10", item: "臨時収入", amount: 15000, type: "income" },
    { id: 8, date: "2024-02-12", item: "映画鑑賞", amount: 2000, type: "expense" },
    { id: 9, date: "2024-02-14", item: "バレンタイン", amount: 3500, type: "expense" },
    { id: 10, date: "2024-02-15", item: "日用品まとめ買い", amount: 6800, type: "expense" },
    { id: 11, date: "2024-02-17", item: "交通費ハブチャージ", amount: 3000, type: "expense" },
    { id: 12, date: "2024-02-18", item: "カフェ", amount: 850, type: "expense" },
    { id: 13, date: "2024-02-20", item: "携帯電話料金", amount: 8900, type: "expense" },
    { id: 14, date: "2024-02-22", item: "ジム会費", amount: 7800, type: "expense" },
    { id: 15, date: "2024-02-24", item: "スーパー", amount: 5200, type: "expense" },
    { id: 16, date: "2024-02-25", item: "給料（副業）", amount: 30000, type: "income" },
    { id: 17, date: "2024-02-26", item: "サブスクリプション", amount: 1200, type: "expense" },
    { id: 18, date: "2024-02-27", item: "医療費", amount: 2400, type: "expense" },
    { id: 19, date: "2024-02-28", item: "食費（外食）", amount: 3800, type: "expense" },
    { id: 20, date: "2024-02-29", item: "ガソリン代", amount: 4500, type: "expense" }
];

// 初期化処理
function init() {
    renderList(transactions);   //一覧表示
    calculateSummary(transactions);
    setupEventListeners();
}

/**
 * 取引一覧を表示する関数
 * @param {Array} data - 表示する取引データの配列
 */
function renderList(data) {
    const listElement = document.getElementById("transaction-list");
    listElement.innerHTML = ""; // 一旦クリア

    // TODO: 配列dataをループして、テーブルに行を追加する
    // ヒント:
    // 1. forEach文などでdataを反復処理する
    // 2. document.createElement("tr") で行を作成
    // 3. innerHTMLを使ってtd要素をセットする（テンプレートリテラルが便利）
    // 4. 収支の種別(type)に応じて、金額の文字色を変えるクラス（text-primaryなど）を付与する
    // 5. listElement.appendChild() で行を追加する
    data.forEach(current => {
        console.log(current);
        let trElm = document.createElement('tr');
        let amountClass = current.type === 'income' ? 'text-primary' : 'text-danger';
        trElm.innerHTML = `
        <td>${current.date}</td>
        <td>${current.item}</td>
        <td class="${amountClass}">${current.amount}</td>
        <td>${current.type === 'income' ? '収入' : '支出'}</td>`;
        listElement.append(trElm);
    });
}

/**
 * 集計（収入・支出・残高）を計算して表示する関数
 * @param {Array} data - 集計対象のデータ（常に全データを受け取る）
 */
function calculateSummary(data) {
    // TODO: 集計ロジックを実装する
    // ヒント:
    // 1. dataをループして、typeが"income"なら収入合計に加算、"expense"なら支出合計に加算
    // 2. 残高 = 収入合計 - 支出合計
    // 3. 計算結果を画面の各要素(#income-total, #expense-total, #balance-total)に表示する
    // 4. 金額はtoLocaleString()を使ってカンマ区切りにすると見やすい
    const incomeTotalArea = document.getElementById('income-total');
    const expenseTotalArea = document.getElementById('expense-total');
    const balanceTotalArea = document.getElementById('balance-total');

    //収入と支出の合計金額を入れる変数を定義
    let incomeTotalNum = 0;
    let expenseTotalNum = 0;

    data.forEach(current => {
        switch (current.type) {
            case 'income':
                incomeTotalNum += current.amount;
                break;
            case 'expense':
                expenseTotalNum += current.amount;
                break;
            default:
                false;
        }
    });
    let balanceTotalNum = incomeTotalNum - expenseTotalNum;
    console.log(expenseTotalNum, expenseTotalNum, balanceTotalArea);

    incomeTotalArea.textContent = incomeTotalNum + '円';
    expenseTotalArea.textContent = expenseTotalNum + '円';
    balanceTotalArea.textContent = balanceTotalNum + '円';
}

/**
 * フィルタリングを行う関数
 * @param {string} type - 'all' | 'income' | 'expense'
 */
function filterTransactions(type) {
    // TODO: フィルタリングロジックを実装する
    // ヒント:
    // 1. typeが"all"なら、元のtransactions配列をそのままrenderListに渡す
    // 2. それ以外なら、filterメソッドを使って条件に合うデータだけの新しい配列を作る
    // 3. 作った配列をrenderListに渡す
    // 注意: calculateSummaryは呼び出さない（集計は常に全データで固定のため）
    if (type === 'all') {
        renderList(transactions);
    } else {
        let filtered = transactions.filter((d) => { return d.type === type });
        renderList(filtered);
    }
}

/**
 * イベントリスナーを設定する関数
 */
function setupEventListeners() {
    // TODO: ボタンクリックイベントを設定する
    // ヒント:
    // 1. "すべて"(#btn-all), "収入"(#btn-income), "支出"(#btn-expense) の各ボタンを取得
    // 2. .addEventListener("click", ...) またはinputのchangeイベントで
    //    filterTransactions関数を適切な引数('all', 'income', 'expense')で呼び出す
    const filterButtonArray = document.querySelectorAll('.btn-check');
    filterButtonArray.forEach(btn => {
        btn.addEventListener('click', e => {
            console.log(e.currentTarget);
            if (e.currentTarget.id === 'btn-all') {
                filterTransactions('all');
            } else if (e.currentTarget.id === 'btn-income') {
                filterTransactions('income');
            } else {
                filterTransactions('expense');
            }
            // let buttonType = e.currentTarget.id.split('-')[1];
            // filterTransactions(buttonType);
        })
    });

}

// アプリの実行
init();
