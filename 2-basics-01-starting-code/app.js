const app = Vue.createApp({
    data: function () {
        return {
            courseGoal: "Learn Vue",
            vueDocsLink: "https://vuejs.org/v2/guide/"
        }
    },
    methods: {
        randomTextMessage: function () {
            let number = Math.random();
            if (number < 0.5) {
                return 'Learn vue!';
            }
            return 'Master vue';
        }
    }
});

app.mount('#user-goal')