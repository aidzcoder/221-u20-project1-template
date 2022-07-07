function checkPortalPress(e) {
      goToLocation("http://my.marist.edu");
  }

document.getElementById("portal_button").addEventListener('click', checkPortalPress);

function feedItem(title, body, linkUrl, imageUrl){
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

let story1 = new feedItem("Cheeseburger", "A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes.", "https://bit.ly/3RhWIHa", "https://bit.ly/3o2x109");
let story2 = new feedItem("French Fries", "French fries or simply fries or chips, are pieces of potato that have been deep-fried", "https://bit.ly/3Askv1f", "https://bit.ly/3IhZecy");
let story3 = new feedItem("Chicken Nuggets", "A chicken nugget is a food product consisting of a small piece of deboned chicken meat that is breaded or battered, then deep-fried or baked.", "https://bit.ly/3NQVEHB", "https://bit.ly/3yez7yw");

//array
let currentStories = [story1, story2, story3];



function displayItem(param1){
    for(var i=0;i<param1.length;i++){
        let item = param1[i];
            document.getElementById("#newsfeed").innerHTML += "<img class = 'feedImage' src=" + item.imageUrl + ">" + "<br>" + "<a href = '" + item.linkUrl + "'>" + item.title + "</a>" + "<p>"+ item.body +"</p>";
    }
}


window.addEventListener("load", displayItem(currentStories));

