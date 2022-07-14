
console.log("testing!");

window.addEventListener('load', () => {
    fetch('/api/users').then((res) => {
        res.json().then((data) => {
            for(var i = 0; i<data.length ; i++) {
                let num = i;
                let item = data[i];
                document.getElementById("#newsfeed").innerHTML += "<img class = 'feedImage' src=" + item.imageUrl + ">" + "<br>" + "<a href = '" + item.linkUrl + "'>" + item.title + "</a>"  + "<p>"+ item.body +"</p>" + "<hr>";
            }
        })
    })
})

//document.getElementById('changeButton0').innerHTML = console.log("hi");
//document.getElementById('button0').addEventListener('click',console.log("button0 clicked"))


function checkPortalPress(e) {
    goToLocation("http://my.marist.edu");
}

document.getElementById("portal_button").addEventListener('click', checkPortalPress);
