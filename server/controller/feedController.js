const feedItem = require("../model/feedItem");

console.log("controller running!")

let feedItem1 = feedItem.createfeedItem("water","clear liquid","waterlink","waterimage");
let feedItem2 = feedItem.createfeedItem("sprite","clear sweet liquid","spritelink","spriteimage");
let feedItem3 = feedItem.createfeedItem("coke","black sweet liquid","cokelink","cokeimage");

let feedItems = [];
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);


console.log(feedItems);

exports.getfeedItems = (req , res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}

exports.savefeedItems = (req, res) => {
    res.setHeader('content-Type','application/json');
    feedItems.push(feedItem.createfeedItem(req.body.title, req.body.body, req.body.linkUrl,req.body.imageUrl));
    res.send(feedItems);
}

exports.getfeedItem = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.userId]);
}

exports.deletefeedItem = (req, res) => {
    res.setHeader('content-Type','application/json');
    feedItems.splice(req.params.userId, 1);
    res.send(feedItems);
}
exports.updatefeedItem = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	var updatedfeedItem = feedItems[req.params.userId];

	console.log(req.body.title);
	
    if(req.body.title)
        updatedfeedItem.title = req.body.title;
	if(req.body.body)
		updatedfeedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedfeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedfeedItem.imageUrl = req.body.imageUrl;
    
    feedItems[req.params.userId] = updatedfeedItem;
    res.send(feedItems[req.params.userId]);
}