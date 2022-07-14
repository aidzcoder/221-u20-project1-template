const feedItem = require("../model/feedItem");

console.log("controller running!")

//creates the arrays of feedItem
let feedItem1 = feedItem.createfeedItem("Cheeseburger", "A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes.", "https://bit.ly/3RhWIHa", "https://bit.ly/3o2x109");
let feedItem2 = feedItem.createfeedItem("French Fries", "French fries or simply fries or chips, are pieces of potato that have been deep-fried", "https://bit.ly/3Askv1f", "https://bit.ly/3IhZecy");
let feedItem3 = feedItem.createfeedItem("Chicken Nuggets", "A chicken nugget is a food product consisting of a small piece of deboned chicken meat that is breaded or battered, then deep-fried or baked.", "https://bit.ly/3NQVEHB", "https://bit.ly/3yez7yw");

//pushes all the created array into another array so 2d array
let feedItems = [];
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);


console.log(feedItems);

//gets all the feeditems
exports.getfeedItems = (req , res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}
//adds a new array into feedItems
exports.savefeedItems = (req, res) => {
    res.setHeader('content-Type','application/json');
    feedItems.push(feedItem.createfeedItem(req.body.title, req.body.body, req.body.linkUrl,req.body.imageUrl));
    res.send(feedItems);
}
//gets a specified array using id
exports.getfeedItem = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.userId]);
}
//deletes a specified array using id
exports.deletefeedItem = (req, res) => {
    res.setHeader('content-Type','application/json');
    feedItems.splice(req.params.userId, 1);
    res.send(feedItems);
}
//updates a specific part of the feedItem using id
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