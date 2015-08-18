// var mainImage = $("#main-container img").attr("src");

function openYosemite(event) {
	console.log ("yosemite");
	changeActivePhoto(event);
}

function openEverest(event) {
	console.log ("everest");
	changeActivePhoto(event);
}

function openSahara(event) {
	console.log ("sahara");
	changeActivePhoto(event);
} 
// START HERE

// function changeActivePhoto (event) {
// function clickImage(event) {
// 	$("#main-container img").attr("src", $(event.target).attr("src");
// }  	
//   	var imageUrl = $(event.target).attr("src");
//   	// console.log(imageUrl);
//   	$("#main-container img").attr("src", imageUrl);
// }

// // or use one onlick listener
// $("#images-container img").click(changeActivePhoto);

// $("#yosemite").click(changeActivePhoto);
// $("#everest").click(changeActivePhoto);
// $("#sahara").click(changeActivePhoto);

// STOP HERE
// hint: we want to swap the main image with our other images
// 1. how do we find that main image tag?
// 2. how do I modify it to be a different image?

function openYosemite() {
	console.log ("yosemite");
	$("#main-container img").attr("src", "images/yosemite.jpg")
}

function openEverest() {
	console.log ("everest");
	$("#main-container img").attr("src", "images/everest.jpg")
}

function openSahara() {
	console.log ("sahara");
	$("#main-container img").attr("src", "images/sahara.jpg")
}



$("#yosemite").click(openYosemite);
$("#everest").click(openEverest);
$("#sahara").click(openSahara);