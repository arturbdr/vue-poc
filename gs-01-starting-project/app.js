let app = (function () {
    'use strict';
    const addGoalBtn = document.getElementById("btnAddGoal");

    const onClickBtnAddGoal = () => {
        console.log("clicked");
    };

    const bindElements = () => {
        addGoalBtn.onclick = onClickBtnAddGoal;
    };

    return {
        init: () => {
            bindElements();
        }
    }
})();
app.init();