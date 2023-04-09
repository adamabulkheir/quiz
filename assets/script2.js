var scores = document.querySelector("#highscores")
var array = JSON.parse(localStorage.getItem("scores"))
for (let i = 0; i < array.length; i++) {
var li = document.createElement("li")
li.textContent = array[i].initials + " - " + array[i].score
scores.appendChild(li)
}