let vueApp = Vue.createApp({
    data() {
        return {
            myName: 'Artur',
            myAge: 37,
            myImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/2880px-Google_Images_2015_logo.svg.png'
        }
    },
    methods: {
        myFutureAge() {
            return this.myAge + 5;
        },
        getRandomNumber() {
            return Math.random();
        }

    }
});

vueApp.mount('#assignment');
