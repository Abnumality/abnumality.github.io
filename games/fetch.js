fetch("./gamedirs.json")
.then(response => {
    return response.json();
})
.then(data => {
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var div = document.createElement("div")
        div.setAttribute("id", obj.file)
        div.setAttribute("class", "button")
        div.onclick = function() {
            loadGame(this);
        };
        document.getElementById("wrapper").appendChild(div)
        var gamename = document.createElement("p")
        gamename.setAttribute("class","name")
        gamename.textContent = obj.file
        div.appendChild(gamename)
        var pathstring = (("./images/".concat(obj.file)).concat(".png"))

        var image = document.createElement("img")
        image.src = pathstring
        image.setAttribute("class", "gameimage")
        div.appendChild(image)
        image.setAttribute("onerror","this.src='images/noimage.png';")
    }
});