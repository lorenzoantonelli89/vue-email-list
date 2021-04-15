function init() {
    for(let i = 0; i < 10; i++){
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            method: "GET",
            success: function (data) {
                const res = data.response;
                $('#chat-list').append('<li>' + res + '</li>');
            },
            error: function () {
                console.log('error');
            }
        });
    }
}
$(init);