//contructor for feedItem
function feedItem(title, body, linkUrl, imageUrl){
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

console.log("model feedItem running");

//allows me to create feedItem in the feedController
exports.createfeedItem = (title, body, linkUrl, imageUrl) => {
    return new feedItem(title, body, linkUrl, imageUrl);
}



