function init() {
    for(let i = 0; i < 10; i++){
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            method: "GET",
            success: function (data) {
                const res = data.response
                $('.row').append('<h1>' + res + '</h1>')
            },
            error: function () {
                console.log('error');
            }
        });
    }
}
$(init);