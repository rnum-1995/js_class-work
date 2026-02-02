$(function () {
    //上に戻るボタンの初期化
    let topBtn = $('#scrollTop');
    topBtn.hide();

    //ある程度スクロールされたら、上に戻るボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {    //「this」=自分自身、ここではwindowを表している
            topBtn.fadeIn();    //フェードイン表示
        } else {
            topBtn.fadeOut();   //フェードアウトで非表示
        }
    });

    //クリックで上に戻るボタン
    topBtn.click(function (event) {
        event.preventDefault(); //ページ内リンクの挙動(topに戻る)をキャンセル
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});



