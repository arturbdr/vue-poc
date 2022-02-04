const app = Vue.createApp({
    data: function () {
        return {
            courseGoalA: "Learn Vue",
            courseGoalB: "Master Vue",
            vueDocsLink: "https://vuejs.org/v2/guide/"
        }
    },
    methods: {
        randomTextMessage() {
            let number = Math.random();
            if (number < 0.5) {
                return this.courseGoalA;
            }
            return this.courseGoalB;
        }
    }
});

app.mount('#user-goal')