function initVue() {

    new Vue({
        el: '#app',
        data: {
            'info': null,
            'arrEmail': [],
        },
        mounted() {
            for(let i = 0; i < 10; i++){
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => (this.arrEmail.push(this.info = response.data.response)))
            }
        }
    });

}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);
