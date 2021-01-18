var text = ["travel", "travel", "travel", "travel", "travel", "travel", "travel", "travel", "travel", "home", "home", "none", "none"];
for(var i = 0; i <= 365; i += 1) {
    var div = document.createElement("div");
    div.className = "flex-item";
    if(i <= text.length && text[i] == "travel") {
        div.style.backgroundColor = '#6930c3';
    } else if(i <= text.length &&  text[i] == "home") {
        div.style.backgroundColor = '#80ffdb';
    } else {
        div.style.backgroundColor = '#fff3e6';
    }
    document.getElementById("main").appendChild(div);
}
