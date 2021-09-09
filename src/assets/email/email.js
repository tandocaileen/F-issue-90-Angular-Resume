function submitToAPI(e) {
    e.preventDefault();
    //設定したAPI GatewayのエンドポイントURLをここに入れます。
    var URL = "https://ee7sahtsx9.execute-api.ap-northeast-1.amazonaws.com/test-1";

    //フォームの入力値をチェック
    var name = /[A-Za-z]{1}[A-Za-z]/;
    if (!name.test($("#name-input").val())) {
        alert("[2文字以上記入してください。]\nPlease enter at least 2 characters");
        return;
    }
    var subject = /[A-Za-z]{1}[A-Za-z]/;
    if (!subject.test($("#subject").val())) {
        alert("[2文字以上記入してください。]\nPlease enter at least 2 characters");
        return;
    }
    if ($("#email-input").val() == "") {
        alert("[メールを入力してください。]\nPlease enter your email");
        return;
    }


    var name = $("#name-input").val();
    var subject = $("#subject").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
        name: name,
        subject: subject,
        email: email,
        desc: desc
    };

    $.ajax({
        type: "POST",
        url: "https://ee7sahtsx9.execute-api.ap-northeast-1.amazonaws.com/test-1",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),

        success: function() {
            alert("[メッセージが送信されました] \nYour message has been sent :D");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function() {
            alert("[メッセージ送信失敗]！\nI'm sorry, seems like there's a prblem :(");
        }
    });
}
