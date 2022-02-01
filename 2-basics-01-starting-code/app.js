const app = Vue.createApp({
    data: function () {
        return {
            courseGoal: "Learn Vue",
            vueDocsLink: "https://vuejs.org/v2/guide/"
        }
    }
});

app.mount('#user-goal')