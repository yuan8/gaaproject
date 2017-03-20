// Init App
var myApp = new Framework7({
    modalTitle: 'Framework7',
    // Enable Material theme
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;

// // Add main view
var mainView = myApp.addView('.view-main', {reloadPages:true
});

function popover_detail_project(ev) {
	// console.log(ev);
	var clickedLink = ev;
	myApp.popover('.popover-detail-project', clickedLink);
}



