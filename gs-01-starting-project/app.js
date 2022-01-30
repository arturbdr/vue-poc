let app = (function () {
    'use strict';
    const btnAddGoal = document.getElementById("btnAddGoal");
    const inptGoalTxt = document.getElementById("goal");
    const ulGoals = document.getElementById("goals");

    const onClickBtnAddGoal = () => {
        const userInputtedText = inptGoalTxt.value;
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(userInputtedText));
        ulGoals.appendChild(li);
    };

    const bindElements = () => {
        btnAddGoal.onclick = onClickBtnAddGoal;
    };

    return {
        init: () => {
            bindElements();
        }
    }
})();
app.init();