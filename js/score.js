var displayPage = document.querySelector("#display");
var displayList = document.querySelector("#list")


function getScoreFromLocalStorage() {
    var returnInfo = JSON.parse(localStorage.getItem("scoresList"));
    

    for(var i=0; i < returnInfo.length; i++){
        var score = returnInfo[i].score;
        var initial = returnInfo[i].Initial;
        var combined = initial + ":      " + score;
        console.log(combined);
        var liEl = document.createElement("li");
        liEl.textContent = combined;
        displayPage.appendChild(liEl);
    }
    
};
displayPage.setAttribute("style", "font-size: 100px; padding:3px; list-style:none; display:flex;  flex-direction: column; background-color:lightblue; border: 3px dotted green; margin-top:10px")

getScoreFromLocalStorage()